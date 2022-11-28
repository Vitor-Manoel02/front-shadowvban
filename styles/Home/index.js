import styled from "styled-components";

export const containerHome = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: 50px;
  padding: var(--spacing-lg);
  background-color: var(--color-background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-lg);
  font-weight: bold;
`;

export const header = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
`;


export const containerLogin = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// export const containerLogin = styled.div`
//   width: 60%;
//   height: auto;
//   padding: 20px;
//   background-color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   border: 2px solid #e6e6e6;
//   /* gap: 1rem; */
//   button {
//     border-radius: 20px;
//   }
//   button:hover {
//     background-color: #191c2b;
//     cursor: pointer;
//   }
// `;

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
  border: var(--border);
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
