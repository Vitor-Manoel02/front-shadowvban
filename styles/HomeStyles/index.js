import styled from "styled-components";

export const containerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #191c2b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const containerLogin = styled.div`
  width: 60%;
  height: 70%;
  background-color: #191c2b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  button {
    border-radius: 20px;
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
  width: 100%;
  height: 60%;
  border: solid 1px #ffff;
  display: flex;
  flex-direction: column;
  div{
    width: 100%;
    height: 40px;
    border: 1px solid #ffff;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;
  }
`;
