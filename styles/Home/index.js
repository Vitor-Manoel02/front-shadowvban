import styled from "styled-components";

export const containerHome = styled.div`
  width: 100vw ;
  height: 100vh ;
  background-color: white;
  display: flex ;
  justify-content: center ;
  align-items: center ;
  flex-direction: column;
`;

export const containerLogin = styled.div`
  width: 60% ;
  height: 70% ;
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  border: 2px solid gray;
  display: flex ;
  justify-content: center ;
  align-items: center ;
  flex-direction: column ;
  gap: 1rem;
  button {
    border-radius: 20px ;
  }
  button:hover {
    background-color: #191c2b ;
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
  width: 60%;
  height: auto;
  border: solid 1px #ffff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const containerResponse = styled.div`
  width: 100%;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

export const containerResult = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  padding: 6rem;
`;

