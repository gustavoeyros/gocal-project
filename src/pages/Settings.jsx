import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalWrapper } from "./styled";
import Title from "../components/Title";
import Description from "../components/Description";
import { Form, InputWrapper } from "./styled";
import Input from "../components/Input";
import Button from "../components/Button";
const Settings = () => {
  const [enteredGender, setEnteredGender] = useState(false);
  const [enteredAge, setEnteredAge] = useState(false);
  const [enteredWeight, setEnteredWeight] = useState(false);
  const [enteredHeight, setEnteredHeight] = useState(false);
  const [enteredLevel, setEnteredLevel] = useState(false);

  const genderRef = useRef();
  const ageRef = useRef();
  const weightRef = useRef();
  const heightRef = useRef();
  const levelRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <GlobalWrapper>
      <div>
        <Title>
          <p>Olá,</p>
          {localStorage.getItem("name")}
        </Title>{" "}
        <Description>Vamos calcular o seu gasto energético basal!</Description>
        <Form onSubmit={submitHandler}>
          <InputWrapper>
            <Input
              placeholder="Seu sexo"
              type="select"
              enteredRef={genderRef}
            />
            <Input placeholder="Sua idade" type="number" enteredRef={ageRef} />
            <Input
              placeholder="Seu peso"
              type="number"
              enteredRef={weightRef}
            />
            <Input
              placeholder="Sua altura(cm)"
              type="number"
              enteredRef={heightRef}
            />
            <Input
              placeholder="Seu nível de atividade física"
              type="select"
              enteredRef={levelRef}
            />
          </InputWrapper>
          <Button nav="/result">Calcular</Button>
          <Button styledBack="back" nav="/home">
            Voltar
          </Button>
        </Form>
      </div>
    </GlobalWrapper>
  );
};

export default Settings;
