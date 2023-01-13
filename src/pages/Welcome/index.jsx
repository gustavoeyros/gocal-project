import { useNavigate } from "react-router";
import { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { Wrapper } from "./styled";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);
  return (
    <Wrapper>
      <img src={Logo} />
    </Wrapper>
  );
};

export default Welcome;
