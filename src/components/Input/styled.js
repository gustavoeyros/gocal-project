import styled from "styled-components";

export const InputStyle = styled.input`
  background-color: #ffffff;
  border: none;
  outline: none;

  width: 335px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;

  &::placeholder {
    color: #969cb3;
  }
  ${(props) =>
    props.position === "first" ? "margin-top: 20px;" : "margin-top: 10px;"}

  ${(props) => (props.position === "last" ? "margin-bottom: 20px;" : "")}

  ${(props) =>
    props.position === "unique" ? "margin-bottom: 10px; margin-top:20px;" : ""}
`;

export const Select = styled.select`
  color: #969cb3;
  background-color: #ffffff;
  border: none;
  outline: none;

  width: 335px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;

  ${(props) =>
    props.position === "first" ? "margin-top: 20px;" : "margin-top: 10px;"}

  ${(props) => (props.position === "last" ? "margin-bottom: 20px;" : "")}
`;
