import styled from "styled-components";

export const containerAvatar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 80%;
  background-color: #191c2b;
  h1 {
    font-size: 2rem;
    color: #c8cdd5;
    font-family: "Roboto", sans-serif;
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
    width: 20%;
    height: 60px;
  }

  button:hover {
    scale: 1.1;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #191c2b;
  img {
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 20px;
  }

  img:hover {
    scale: 1.1;
    border-radius: 50%;
  }
`;
