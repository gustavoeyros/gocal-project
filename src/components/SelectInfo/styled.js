import styled from "styled-components";

export const Select = styled.select`
  color: #969cb3;
  background-color: #ffffff;
  border: none;
  outline: none;
  width: 335px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;

  ${(props) => (props.hasError === false ? "border: 1px solid red" : "")}
`;
