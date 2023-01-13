import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalWrapper, Form } from "./styled";
import Button from "../components/Button";
import Input from "../components/Input";
import Description from "../components/Description";

const Home = () => {
  const [isEnteredName, setIsEnteredName] = useState("");
  const enteredName = useRef();
  const navigate = useNavigate();

  const regEx = new RegExp("[a-zA-Z0-9]");

  const nameHandler = (event) => {
    event.preventDefault();

    if (enteredName.current.value.length === 0 || regEx.test(enteredName)) {
      setIsEnteredName(false);
      return;
    }
    navigate("/settings");
    setIsEnteredName(true);
  };

  return (
    <GlobalWrapper>
      <Form onSubmit={nameHandler}>
        <Description position="first">
          <p>Para começar</p> como podemos te chamar?
        </Description>
        <Input
          position="unique"
          placeholder="Digite o seu nome"
          enteredRef={enteredName}
          hasError={isEnteredName}
        />
        <Button>Avançar</Button>
      </Form>
    </GlobalWrapper>
  );
};

export default Home;
