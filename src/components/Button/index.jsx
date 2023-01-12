import { ButtonStyle } from "./styled";

const Button = ({ children, styledBack }) => {
  return (
    <>
      <ButtonStyle styledBack={styledBack}>{children}</ButtonStyle>
    </>
  );
};

export default Button;
