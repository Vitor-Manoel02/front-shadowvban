import FacebookLogin from 'react-facebook-login';

export default function NotLogged({responseFacebook}) {
    return(
        <>
        <h1>Minhas conta está com shadowban?</h1>
            <h2>
              Descubra se o alcance do seu perfil está sendo prejudicado por
              conta do Shadowban.
            </h2>
            <FacebookLogin
             appId="812880569961304"
             autoLoad={true}
             fields="name,email,picture"
             callback={responseFacebook}
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
        </>
        
    )
}