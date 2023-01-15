import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { GlobalWrapper, Form, InitialWrapper } from "./styled";
import Button from "../components/Button";
import Input from "../components/Input";
import Description from "../components/Description";
import History from "../components/History";

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
    localStorage.setItem("name", enteredName.current.value);
  };

  const changeNameHandler = () => {
    if (enteredName.current.value.length === 0) {
      setIsEnteredName(false);
      return;
    }
    setIsEnteredName(true);
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
            onChange={changeNameHandler}
          />
        </InitialWrapper>
        <Button>Avançar</Button>
      </Form>
      <History />
    </GlobalWrapper>
  );
};

export default Home;
