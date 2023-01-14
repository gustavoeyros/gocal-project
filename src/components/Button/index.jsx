import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "./styled";
const Button = ({ children, styledBack, nav }) => {
  const navigate = useNavigate();
  const backPage = () => {
    if (nav) {
      navigate(nav);
    }
  };
  return (
    <>
      <ButtonStyle styledBack={styledBack} onClick={backPage}>
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;
