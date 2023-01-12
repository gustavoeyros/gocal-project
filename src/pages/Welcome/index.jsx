import Logo from "../../assets/logo.svg";
import { Wrapper } from "./styled";
const Welcome = () => {
  return (
    <Wrapper>
      <img src={Logo} />
    </Wrapper>
  );
};

export default Welcome;
