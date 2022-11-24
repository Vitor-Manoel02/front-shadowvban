import axios from "axios";

export default async function ShadowBanVerify(Token){
    try{
        const { data } = await axios.get("https://back-shadow.herokuapp.com/shadowbanverification", {
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
            message: error.response.message,
            result: error
        }
    }
};
