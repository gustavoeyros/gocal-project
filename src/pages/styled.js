import styled from "styled-components";

export const GlobalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: #f3f3f3;

  padding: 70px 20px 0;

  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
