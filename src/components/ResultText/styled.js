import styled from "styled-components";

export const ResultStyled = styled.div`
  color: #37b874;
  font-weight: 700;
  & p {
    color: black;
    font-weight: 400;
  }

  ${(props) =>
    props.position === "first" ? "margin-top: 40px;" : "margin-top: 30px;"}

  ${(props) => (props.position === "last" ? "margin-bottom: 138px;" : "")}
`;
