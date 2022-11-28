import axios from "axios";

export default async function ShadowBanVerify(Token){
    try{
        const { data } = await axios.get("https://backend.shadowban.com.br/shadowbanverification", {
          headers: {
            token: Token
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
