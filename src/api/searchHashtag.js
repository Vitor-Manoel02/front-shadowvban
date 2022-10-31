import axios from "axios";

export default async function searchHashtag(Token){
    try{
        const { data } = await axios.get("http://localhost:4000/hashtagverification", {
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
