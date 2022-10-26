import * as s from "./styles";
import Cards from "../Cards";
import { dataCard } from "../../function/dataCard";

export default function Avatar({ src, name, fn, email }) {
  return (
    <s.containerAvatar>
      <s.Avatar>
        <img src={src} alt="avatar" />
        <h1>{name}</h1>
        <h1>Email do usuário: {email}</h1>
      </s.Avatar>
        {/* {
            dataCard.map((item, index) => {
                return <Cards key={index} title={item.title} value={item.value} description={item.description} />
            })
        } */}
        <button onClick={()=>fn()}>LOGOUT</button>
    </s.containerAvatar>
  );
}
