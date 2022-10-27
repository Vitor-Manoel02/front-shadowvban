import * as s from "../../styles/HomeStyles/index";
import { useEffect, useState } from "react";
import postAcessToken from "../../src/api/accessUsers";
import NotLogged from "../../src/components/notLogged";
import EtapasAnalise from "../../src/components/etapasAnalise";
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [verify, getVerify] = useState(false);
  const uuid = uuidv4();

  const responseFacebook = (response) => {
    if (response.status != "unknown") {
      setIsLoggedIn(true);
      const accessToken = response;
      console.log("Você está logado, seu token é: ", accessToken);
      getUser(accessToken);
    }
  };

  async function getUser(accessToken) {
    const userData = await postAcessToken(accessToken);
    localStorage.setItem("response", JSON.stringify(userData));
    console.log("resultado:".userData);
  }

  // async function timeOut(){
  //    = await setTimeout(()=>{

  //   },[])
  // }
  const value = true;

  return (
    <div className="App">
      {isLoggedIn === true ? (
        <s.containerHome>
          <s.containerLogin>
            <h1>Analisando sua conta</h1>
            <figcaption>Isso pode demorar alguns segundos...</figcaption>
            <s.loader />
            <s.containerEtapa>
              <EtapasAnalise
                id={uuid}
                title="Verificando se o perfil existe"
                sniper={value}
              />
              <EtapasAnalise
                id={uuid}
                title="Buscando foto mais recente ultilizando hashtag"
                sniper={value}
              />
              <EtapasAnalise
                id={uuid}
                title="Analisando Shadowban..."
                sniper={value}
              />
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
