import styled from "styled-components";

export const InputStyle = styled.input`
  background-color: #ffffff;
  border: none;
  outline: none;

  width: 335px;
  height: 56px;
  border-radius: 8px;
  padding: 20px 17px;

  &::placeholder {
    color: #969cb3;
  }

  ${(props) => (props.hasError === false ? "border: 1px solid red" : "")}
`;
