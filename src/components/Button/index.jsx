import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "./styled";
const Button = ({ children, styledBack, nav, onClick }) => {
  const navigate = useNavigate();
  const backPage = () => {
    if (nav) {
      navigate(nav);
    }
  };
  return (
    <>
      <ButtonStyle styledBack={styledBack} onClick={onClick}>
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
