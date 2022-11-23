import * as s from "./style";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function EtapasAnalise({ title, sniper, error, messageError, messageSearch}) {

  return (
    <s.containerLoader>
      {sniper === true ? (
        <>
        <BsCheck2All fill="#09b109" size={36} />
        <figcaption>{title}</figcaption>
        </>
      ) : error === -1 ? (
        <>
        <AiOutlineClose fill="#ff0000" size={36} />
        <figcaption>{messageError}</figcaption>
        </>
      ) : (
        <>
        <s.loader />
        <figcaption>{messageSearch}</figcaption>
        </>
      )}
    </s.containerLoader>
  );
}
