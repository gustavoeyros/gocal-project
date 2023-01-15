import styled from "styled-components";

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: black;
  width: 335px;

  ${(props) =>
    props.position === "first" ? "padding-top: 0px;" : "padding-top: 45px;"}
`;
