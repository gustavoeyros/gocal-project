import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalWrapper, Form, InitialWrapper } from "./styled";
import Button from "../components/Button";
import Input from "../components/Input";
import Description from "../components/Description";

const Home = () => {
  const [isEnteredName, setIsEnteredName] = useState(null);
  const enteredName = useRef();
  const navigate = useNavigate();

  const nameHandler = (event) => {
    event.preventDefault();

    if (enteredName.current.value.length === 0) {
      setIsEnteredName(false);
      return;
    }
    navigate("/settings");
    setIsEnteredName(true);
    localStorage.setItem("name", enteredName.current.value);
  };

  return (
    <GlobalWrapper>
      <Form onSubmit={nameHandler}>
        <Description position="first">
          <p>Para começar</p> como podemos te chamar?
        </Description>
        <InitialWrapper>
          <Input
            placeholder="Digite o seu nome"
            enteredRef={enteredName}
            hasError={isEnteredName}
          />
        </InitialWrapper>
        <Button>Avançar</Button>
      </Form>
    </GlobalWrapper>
  );
};

export default Home;
