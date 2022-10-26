// import FacebookLogin from "react-facebook-login";
import InstagramLogin from "react-instagram-login";
import * as s from "../../styles/HomeStyles/index";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState({});

  const responseInstagram = (response) => {
    if (!response.error_type) {
      setIsLoggedIn(true);
      const accessToken = {
        accessToken: response,
      };
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      setToken(accessToken);
      console.log("Você está logado, seu token é: ", accessToken);
    }
  };

  return (
    <div className="App">
      {isLoggedIn === true ? (
        <div>
          
        </div>
      ) : (
        <s.containerHome>
          <s.containerLogin>
            <h1>Minhas conta está com shadowban?</h1>
            <h2>
              Descubra se o alcance do seu perfil está sendo prejudicado por
              conta do Shadowban.
            </h2>
            <InstagramLogin
              clientId="1296989504384057"
              buttonText="Login"
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
              scope="user_profile,user_media"
            />
            <div>
              <h3>Como usar:</h3>
              <ol>
                <li>Faça login com sua conta empresarial do instagram.</li>
                <li>Você precisa ter postado uma foto recente, usando hashtags.</li>
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
