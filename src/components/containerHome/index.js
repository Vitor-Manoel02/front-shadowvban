import * as s from "../../../styles/Home/index.js";
import { useEffect, useState } from "react";
import ShadowBanVerify from "../../api/ShadowBanVerify.js";
import perfilVerify from "../../api/perfilVerify.js";
import ButtonLogin from "../buttonLogin/index.js";
import EtapasAnalise from "../etapasAnalise/index.js";
import { BsCheck2All } from "react-icons/bs";
import ShadowBanFalse from "../shadowBanFalse/index.js";
import ShadowBanTrue from "../shadowBanTrue/index.js";
import { AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Verifica se o usuário está logado
  const [step, setStep] = useState(0); // Verifica em qual etapa o usuário está
  const [shadowBan, getShadowBan] = useState(); // Verifica se o usuário está banido
  const [showResult, setShowResult] = useState(false); // Mostra o resultado da verificação
  const [message, setMessage] = useState("");
  const [messageErrorPerfil, setMessageErrorPerfil] = useState(""); // mensagem de erro do perfil
  const [messageErrorHashtag, setMessageErrorHashtag] = useState(""); // mensagem de erro da hashtag
  const [messageErrorShadowBan, setMessageErrorShadowBan] = useState(""); // mensagem de erro do shadowban
  const [showProfile, setShowProfile] = useState(true); // mostrar o perfil
  const [error, setError] = useState(0); // gera erro caso uma das etapas falhe
  const [showHashtag, setShowAHashtag] = useState(false); // mostrar se  a etaapa de hashtag foi concluida

  const responseFacebook = (response) => {
    // responseFacebook, pakote que chama a função de login do facebook
    if (response.status != "unknown") {
      setIsLoggedIn(true);
      getUsers(response.accessToken);
      console.log(response);
    }
  };

  async function getUsers(accessToken) {
    // fazendo requisição para pegar os dados do usuário
    const perfil = await perfilVerify(accessToken);
    if (
      perfil.result.message === "Conexão com Facebook e Instagram realizado."
    ) {
      // se a conexão com o facebook e instagram for realizada, então o usuário tem os requisitos para fazer a verificação
      setStep(1);
      const searchHashtags = await searchHashtag(accessToken);
      if (searchHashtags.result.message === "Critérios de análise atendidos!") {
        // se a conexão com o facebook e instagram for realizada, então o usuário tem os requisitos para fazer a verificação(foto com hashtag)
        setShowAHashtag(true);
        setStep(2);
        const ShadowBan = await ShadowBanVerify(accessToken);
        if (ShadowBan.result.message === "Perfil sem shadowban!") {
          //se for encontrado que o perfil não tem shadowban, então o usuário pode prosseguir com a verificação
          setStep(3);
          getShadowBan(false);
          setShowResult(true);
        } else { // se o perfil tiver shadowban, então o usuário não pode prosseguir com a verificação
          setMessageErrorShadowBan(ShadowBan.result.response.data.message);

          getShadowBan(true);
          setShowResult(true);
        }
      } else { // se a conexão com o facebook e instagram não for realizada, então o usuário não tem os requisitos para fazer a verificação(foto com hashtag)
        setShowResult(false);
        setError(-1);
        setMessageErrorHashtag(searchHashtags.result.response.data.message);
      }
    } else { // se a conexão com o facebook e instagram não for realizada, então o usuário não tem os requisitos para fazer a verificação
      setShowResult(false);
      setError(-1);
      setMessageErrorPerfil(perfil.result.response.data.message);
    }
  }

  return isLoggedIn === true ? ( // se o usuário estiver logado
    <s.containerHome>
      <s.header>
        <h1>Analisando sua conta</h1>
        <figcaption>Isso pode demorar alguns segundos...</figcaption>
        {showResult === true ? ( // se o showResult for true, ele vai mostrar o resultado
          <BsCheck2All fill="#09b109" size={36} />
        ) : error === -1 ? ( // se o erro for -1, ele vai mostrar o erro
          <AiOutlineClose fill="#ff0000" size={36} />
        ) : (
          <s.loader /> // se não, ele vai mostrar o loader
        )}
      </s.header>
      <s.containerEtapa>
        {/*verificando se o perfil está correto*/}
        {showProfile && (
          <EtapasAnalise
            step={step}
            sniper={step >= 1}
            title="Perfil verificado com sucesso!"
            error={error}
            messageError={messageErrorPerfil}
            messageSearch="Verficando perfil..."
          />
        )}
        {/*verificando se a hashtag está correta*/}
        {showHashtag && (
          <EtapasAnalise
            step={step}
            title="Hashtag verificada com sucesso!"
            sniper={step >= 2}
            error={error}
            messageError={messageErrorHashtag}
            messageSearch="Verificando hashtag..."
          />
        )}
        {/*verificando se o perfil está shadowban*/}
        {showResult && (
          <EtapasAnalise
            step={step}
            title="Verificado com sucesso!"
            sniper={step >= 3}
            error={error}
            messageError={messageErrorShadowBan}
            messageSearch="Verificando ShadowBan..."
          />
        )}
        {/*mostrando o resultado*/}
        {showResult === true ? ( // se o showResult for true, ele vai mostrar o resultado
          shadowBan === true ? ( // se o shadowBan for true, ele vai mostrar o shadowBanTrue
            <ShadowBanTrue />
          ) : (
            <ShadowBanFalse /> // se não, ele vai mostrar o shadowBanFalse
          )
        ) : (
          <s.containerResult></s.containerResult> // se não, ele vai mostrar um container vazio
        )}
      </s.containerEtapa>
    </s.containerHome>
  ) : (
    // se o usuário não estiver logado
    <s.containerHome>
      <s.containerLogin>
        <ButtonLogin responseFacebook={responseFacebook} />{" "}
        {/*botão de login do facebook*/}
      </s.containerLogin>
    </s.containerHome>
  );
}
