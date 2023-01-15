import styled from "styled-components";

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  margin-bottom: 21px;
  width: 335px;
  & input {
    display: none;
  }

  & input + label:before {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background-color: white;
    border: 1px solid gray;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
  }

  & input:checked + label:before {
    background-position: center;
    background-color: #1d9f5a;
    border: 1.5px solid #1d9f5a;
  }
`;

export const InputCheck = styled.input`
  width: 18px;
  height: 18px;
`;
