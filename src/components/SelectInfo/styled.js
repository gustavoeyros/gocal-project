import styled from "styled-components";
import arrowSelect from "../../assets/arrowSelect.svg";
export const Select = styled.select`
  color: #969cb3;
  background-color: #ffffff;
  border: none;
  outline: none;
  width: 335px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;

  //remove arrow
  -webkit-appearance: none;
  -moz-appearance: none;
  //custom arrow
  background-image: url(${arrowSelect});
  background-repeat: no-repeat;
  background-position: 90% center;

  ${(props) => (props.hasError === false ? "border: 1px solid red" : "")}
`;
