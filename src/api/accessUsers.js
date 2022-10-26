import axios from "axios";

export default async function postAcessToken(token){
  const { data } = await axios.get("https://481d-200-9-19-174.sa.ngrok.io/shadowbanverification", {
    headers: {
      Authorization: token,
    }
  });
  return {
    success: true,
    message: "Token enviado com sucesso",
    result: data 
  }
};
