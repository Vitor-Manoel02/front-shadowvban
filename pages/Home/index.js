// import FacebookLogin from "react-facebook-login";
import InstagramLogin from "react-instagram-login";
import * as s from "../../styles/HomeStyles/index";
import { IconName } from "react-icons/tfi";
// import Sniper from "../../src/components/sniper";
import { useEffect, useState } from "react";
import postAcessToken from "../../src/api/accessUsers";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState({});
  const [verify, getVerify] = useState(false);
  const [sniper, getSniper] = useState("");

  const responseInstagram = (response) => {
    if (!response.error_type) {
      setIsLoggedIn(true);
      const accessToken = response;
      setToken(accessToken);
      console.log("Você está logado, seu token é: ", accessToken);
      getUser();
    }
  };

  async function getUser() {
    const userData = await postAcessToken(token);
    localStorage.setItem('response',JSON.stringify(userData));
    console.log("resultado:". userData);
  }

  return (
    <div className="App">
      {isLoggedIn === true ? (
        <s.containerHome>
          <s.containerLogin>
            <h1>Analisando sua conta</h1>
            <figcaption>Isso pode demorar alguns segundos...</figcaption>

            <s.loader></s.loader>
            <s.containerEtapa>
              <div>Conectando com sua conta</div>
              <div>Buscando foto mais recente ultilizando hashtag</div>
              <div>Analisando Shadowban</div>
            </s.containerEtapa>
          </s.containerLogin>
        </s.containerHome>
      ) : (
        <s.containerHome>
          <s.containerLogin>
            <h1>Minhas conta está com shadowban?</h1>
            <h2>
              Descubra se o alcance do seu perfil está sendo prejudicado por
              conta do Shadowban.
            </h2>
            <InstagramLogin
              clientId="623283426120943"
              buttonText="Login"
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
              scope="user_profile,user_media"
            />
            <div>
              <h3>Como usar:</h3>
              <ol>
                <li>Faça login com sua conta empresarial do instagram.</li>
                <li>
                  Você precisa ter postado uma foto recente, usando hashtags.
                </li>
                <li>Verificamos se o perfil existe e atende aos requisitos.</li>
                <li>Agora é só descobrir se você está com Shadowban ou não.</li>
              </ol>
            </div>
          </s.containerLogin>
        </s.containerHome>
      )}
    </div>
  );
}
