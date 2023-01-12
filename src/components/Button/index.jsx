import { ButtonStyle } from "./styled";

const Button = (props) => {
  return (
    <>
      <ButtonStyle>{props.children}</ButtonStyle>
    </>
  );
};

export default Button;
