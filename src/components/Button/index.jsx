import { ButtonStyle } from "./styled";
import { Link } from "react-router-dom";
const Button = ({ children, styledBack, nav }) => {
  return (
    <>
      <Link to={nav}>
        <ButtonStyle styledBack={styledBack}>{children}</ButtonStyle>
      </Link>
    </>
  );
};

export default Button;
