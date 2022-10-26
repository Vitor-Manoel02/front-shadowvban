import styled from "styled-components";

export const containerHome = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #191c2b;
  h1 {
    font-size: 2rem;
    color: #dde1ea;
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #6c23e5;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    height: 60px;
  }

  button:hover {
    scale: 1.1;
  }
`;
