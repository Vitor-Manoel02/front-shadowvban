import axios from "axios";

export default async function perfilVerify(Token){
    try{
        const { data } = await axios.get("https://ac5b-200-9-19-174.sa.ngrok.io/pageandprofileverification", {
          headers: {
            token: Token,
            "ngrok-skip-browser-warning": 1
          }
        });
        return {
          success: true,
          message: "Token enviado com sucesso",
          result: data 
        }
    }catch(error){
        return{
            success: false,
            message: "Erro ao acessar a API",
            result: error
        }
    }
};
