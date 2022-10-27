import styled from "styled-components";

export const containerHome = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  background-color: #191c2b;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const containerLogin = styled.div`
  width: 60% !important;
  height: 70% !important;
  background-color: #191c2b;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  gap: 1rem;
  button {
    border-radius: 20px !important;
  }
  button:hover {
    background-color: #191c2b !important;
    cursor: pointer;
  }
`;

export const loader = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #6040c6;
  height: 50px;
  width: 50px;
`;


export const containerEtapa = styled.div`
  width: 100% !important;
  height: 60%;
  border: solid 1px #ffff;
  display: flex;
  flex-direction: column;
`;