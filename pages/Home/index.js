import * as s from "../../styles/Home/index";
import { useEffect, useState } from "react";
import ShadowBanVerify from "../../src/api/ShadowBanVerify";
import searchHashtag from "../../src/api/searchHashtag";
import perfilVerify from "../../src/api/perfilVerify";
import ButtonLogin from "../../src/components/buttonLogin";
import EtapasAnalise from "../../src/components/etapasAnalise";
import { v4 as uuidv4 } from "uuid";
import { BsCheck2All } from "react-icons/bs";
import ShadowBanTrue from "../../src/components/shadowBanTrue";
import ShadowBanFalse from "../../src/components/shadowBanFalse";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, getUser] = useState([]);
  const [step, setStep] = useState(0);
  const [verify, getVerify] = useState(false);
  const [shadowBan, getShadowBan] = useState();
  const [showResult, setShowResult] = useState(false);
  const [messageErrorPerfil, setMessageErrorPerfil] = useState();
  const [messageErrorHashtag, setMessageErrorHashtag] = useState();
  const [messageErrorShadowBan, setMessageErrorShadowBan] = useState();
  const [error, setError] = useState(0);

  const responseFacebook = (response) => {
    if (response.status != "unknown") {
      setIsLoggedIn(true);
      getUsers(response.accessToken);
      console.log(response.accessToken);
    }
  };

  async function getUsers(accessToken) {
    const perfil = await perfilVerify(accessToken);
    if (
      perfil.result.message === "Conexão com Facebook e Instagram realizado."
    ) {
      setStep(1);
      const searchHashtags = await searchHashtag(accessToken);
      if (searchHashtags.result.message === "Critérios de análise atendidos!") {
        setStep(2);
        const ShadowBan = await ShadowBanVerify(accessToken);
        if (ShadowBan.result.message === "Perfil sem shadowban!") {
          setStep(3);
          getShadowBan(false);
          setShowResult(true);
        }else{
          setMessageErrorShadowBan(ShadowBan.result.message);
          getShadowBan(true);
          setShowResult(true);
        }
      }else{
        setShowResult(false)
        setError(-1);
        setMessageErrorHashtag(searchHashtags.result.message);
      }
    } else {
      setShowResult(false);
      setError(-1);
      setMessageErrorPerfil(perfil.result.response.data.message);
    }
  }

  console.log("Usuário", user);

  return (
    <div className="App">
      {isLoggedIn === true ? (
        <s.containerHome>
          <s.containerLogin>
            <h1>Analisando sua conta</h1>
            <figcaption>Isso pode demorar alguns segundos...</figcaption>
            {showResult === false ? (
              step < 0 ? (
                <AiOutlineCloseCircle fill="#ff0000" size={36} />
              ) : (
                <s.loader />
              )
            ) : (
              <BsCheck2All size={100} color="#00ff00" />
            )}
            <s.containerEtapa>
            {
              step <= 1 ? (
                <EtapasAnalise
                  title="Verificando perfil"
                  sniper={step === 1 ? true : false}
                  messageError={messageErrorPerfil}
                  messageTrue="Perfil verificado com sucesso!"
                  error={error}
                />
              ) : step <= 2 ? (
                <EtapasAnalise
                  title="Verificando hashtag" 
                  sniper={step === 2 ? true : false}
                  messageError={messageErrorHashtag}
                  messageTrue="Hashtag verificada com sucesso!"
                  error={error}
                />
              ) : step <= 3 ? (
                <EtapasAnalise
                  title="Verificando shadowban"
                  sniper={step === 3 ? true : false}
                  messageError={messageErrorShadowBan}
                  messageTrue="Shadowban verificado com sucesso!"
                  error={error}
                />
              )
              : null
            }
            {showResult === true ? (
                shadowBan === true ? (
                  <ShadowBanTrue />
                ) : (
                  <ShadowBanFalse />
                )
              ) : (
                <s.containerResult></s.containerResult>
              )}
            </s.containerEtapa>
          </s.containerLogin>
        </s.containerHome>
      ) : (
        <s.containerHome>
          <s.containerLogin>
            <ButtonLogin responseFacebook={responseFacebook} />
          </s.containerLogin>
        </s.containerHome>
      )}
    </div>
  );
}
