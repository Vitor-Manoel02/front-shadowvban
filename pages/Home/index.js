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
import { AiOutlineClose } from "react-icons/ai";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, getUser] = useState([]);
  const [step, setStep] = useState(0);
  const [verify, getVerify] = useState(false);
  const [shadowBan, getShadowBan] = useState();
  const [showResult, setShowResult] = useState(false);

  const [message, setMessage] = useState("");
  const [messageErrorPerfil, setMessageErrorPerfil] = useState("");
  const [messageErrorHashtag, setMessageErrorHashtag] = useState("");
  const [messageErrorShadowBan, setMessageErrorShadowBan] = useState("");
  const [showProfile, setShowProfile] = useState(true);
  const [error, setError] = useState(0);
  const [showHashtag, setShowAHashtag] = useState(false);
  // const [showBan, setShowBan] = useState(false);
  const uuid = uuidv4();

  const responseFacebook = (response) => {
    if (response.status != "unknown") {
      setIsLoggedIn(true);
      getUsers(response.accessToken);
      console.log(response);
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
        setShowAHashtag(true);
        setStep(2);
        const ShadowBan = await ShadowBanVerify(accessToken);
        if (ShadowBan.result.message === "Perfil sem shadowban!") {
          setStep(3);
          getShadowBan(false);
          setShowResult(true);
        }else{

          setMessageErrorShadowBan(ShadowBan.result.response.data.message);


          getShadowBan(true);
          setShowResult(true);
        }
      }else{
        setShowResult(false)
        setError(-1);
        setMessageErrorHashtag(searchHashtags.result.response.data.message);

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
          <h1>Analisando sua conta</h1>
          <figcaption>Isso pode demorar alguns segundos...</figcaption>
          {showResult === true ? (
            <BsCheck2All fill="#09b109" size={36} />
          ) : (
            error === -1 ? (
              <AiOutlineClose fill="#ff0000" size={36} />
            ) : (
              <s.loader />
            )
          )

        }
          <s.containerEtapa>
            {
              showProfile && <EtapasAnalise step={step} title={message} sniper={step >= 1} error={error} messageError={messageErrorPerfil} messageSearch="Verficando perfil..." />
            }
            {
              showHashtag && <EtapasAnalise step={step} title={message} sniper={step >= 2} error={error} messageError={messageErrorHashtag} messageSearch="Verificando hashtag..." />
            }
            {
              showResult && <EtapasAnalise step={step} title={message} sniper={step >= 3} error={error} messageError={messageErrorShadowBan} messageSearch="Verificando ShadowBan..." />
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
