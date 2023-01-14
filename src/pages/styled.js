import styled from "styled-components";

export const GlobalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: #f3f3f3;

  padding: 70px 20px 0;

  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;

    & div {
      width: 275px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InitialWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 138px;
`;
