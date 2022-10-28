import * as s from "./style";
import { BsCheck2All } from "react-icons/bs";

export default function EtapasAnalise({ title, sniper }) {
  return (
    <s.containerLoader>
      {sniper === true ? <BsCheck2All fill="#09b109" size={36} /> : <s.loader/>}
      <h3>{title}</h3>
    </s.containerLoader>
  );
}
