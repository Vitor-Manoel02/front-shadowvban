import axios from "axios";

export default async function searchHashtag(Token) {
  try {
    const { data } = await axios.get(
      "https://back-shadow.herokuapp.com/hashtagverification",
      {
        headers: {
          token: Token,
        },
      }
    );
    return {
      success: true,
      message: "Token enviado com sucesso",
      result: data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response.message,
      result: error,
    };
  }
}
