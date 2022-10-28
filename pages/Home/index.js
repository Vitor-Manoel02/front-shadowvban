import * as s from "../../styles/Home/index";
import { useEffect, useState } from "react";
import ShadowBanVerify from "../../src/api/ShadowBanVerify";
import searchHashtag from "../../src/api/searchHashtag";
import perfilVerify from "../../src/api/perfilVerify";
import NotLogged from "../../src/components/notLogged";
import EtapasAnalise from "../../src/components/etapasAnalise";
import { v4 as uuidv4 } from "uuid";
import { BsCheck2All } from "react-icons/bs";
import ShadowBanTrue from "../../src/components/shadowBanTrue";
import ShadowBanFalse from "../../src/components/shadowBanFalse";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, getUser] = useState([]);
  const [step, setStep] = useState(0);
  const [verify, getVerify] = useState(false);
  const [shadowBan, getShadowBan] = useState();
  const [showResult, setShowResult] = useState(false);
  const uuid = uuidv4();

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
        }
      }
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
              <s.loader />
            ) : (
              <BsCheck2All fill="#09b109" size={36} />
            )}
            <s.containerEtapa>
              <EtapasAnalise
                id={uuid}
                title="Verificando se o perfil existe"
                sniper={step >= 1}
              />
              <EtapasAnalise
                id={uuid}
                title="Buscando foto mais recente ultilizando hashtag"
                sniper={step >= 2}
              />
              <EtapasAnalise
                id={uuid}
                title="Analisando Shadowban..."
                sniper={step >= 3}
              />
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
            <NotLogged responseFacebook={responseFacebook} />
          </s.containerLogin>
        </s.containerHome>
      )}
    </div>
  );
}
