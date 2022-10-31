import styled from "styled-components";

export const containerLoader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid #e6e6e6;
  gap: 2rem;
`;

export const loader = styled.div`
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #6040c6;
  height: 50px;
  width: 50px;
`;
