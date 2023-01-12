import { InputStyle } from "./styled";
const Input = (props) => {
  return (
    <>
      <InputStyle type="text" placeholder={props.placeholder} />
    </>
  );
};

export default Input;
