import { useRef, useState } from "react";
import { GlobalWrapper } from "./styled";
import Title from "../components/Title";
import Description from "../components/Description";
import { Form, InputWrapper } from "./styled";
import Input from "../components/Input";
import Button from "../components/Button";
import SelectInfo from "../components/SelectInfo";
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
            <SelectInfo
              placeholder="Seu sexo"
              enteredRef={genderRef}
              about={"gender"}
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
            <SelectInfo
              placeholder="Seu nível de atividade física"
              enteredRef={levelRef}
              about={"level"}
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
