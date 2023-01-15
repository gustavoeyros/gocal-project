import { useRef, useState } from "react";
import { GlobalWrapper } from "./styled";
import Title from "../components/Title";
import Description from "../components/Description";
import { Form, InputWrapper } from "./styled";
import Input from "../components/Input";
import Button from "../components/Button";
import SelectInfo from "../components/SelectInfo";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [enteredGender, setEnteredGender] = useState(null);
  const [enteredAge, setEnteredAge] = useState(null);
  const [enteredWeight, setEnteredWeight] = useState(null);
  const [enteredHeight, setEnteredHeight] = useState(null);
  const [enteredLevel, setEnteredLevel] = useState(null);

  const genderRef = useRef();
  const ageRef = useRef();
  const weightRef = useRef();
  const heightRef = useRef();
  const levelRef = useRef();

  const navigate = useNavigate();

  const changeAgeHandler = () => {
    if (ageRef.current.value.length === 0) {
      setEnteredAge(false);
    }
    setEnteredAge(true);
  };

  const changeWeightHandler = () => {
    if (weightRef.current.value.length === 0) {
      setEnteredWeight(false);
    }
    setEnteredWeight(true);
  };

  const changeHeightHandler = () => {
    if (heightRef.current.value.length === 0) {
      setEnteredHeight(false);
    }
    setEnteredHeight(true);
  };

  const genderHandler = () => {
    if (genderRef.current.value === "null") {
      setEnteredGender(false);
    }
    setEnteredGender(true);
  };

  const levelHandler = () => {
    if (levelRef.current.value === "null") {
      setEnteredLevel(false);
    }
    setEnteredLevel(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    genderRef.current.value === "null"
      ? setEnteredGender(false)
      : setEnteredGender(true);

    ageRef.current.value.length === 0
      ? setEnteredAge(false)
      : setEnteredAge(true);

    weightRef.current.value.length === 0
      ? setEnteredWeight(false)
      : setEnteredWeight(true);

    heightRef.current.value.length === 0
      ? setEnteredHeight(false)
      : setEnteredHeight(true);

    levelRef.current.value === "null"
      ? setEnteredLevel(false)
      : setEnteredLevel(true);

    //submit validation
    if (
      enteredGender &&
      enteredAge &&
      enteredWeight &&
      enteredHeight &&
      enteredLevel
    ) {
      navigate("/result");

      //send data
      localStorage.setItem("gender", genderRef.current.value);
      localStorage.setItem("age", ageRef.current.value);
      localStorage.setItem("weight", weightRef.current.value);
      localStorage.setItem("height", heightRef.current.value);
      localStorage.setItem("level", levelRef.current.value);
    }
  };

  const backToHome = () => {
    navigate("/home");
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
              enteredRef={genderRef}
              about={"gender"}
              hasError={enteredGender}
              onChange={genderHandler}
            />

            <Input
              placeholder="Sua idade"
              type="number"
              enteredRef={ageRef}
              hasError={enteredAge}
              onChange={changeAgeHandler}
            />
            <Input
              placeholder="Seu peso"
              type="number"
              enteredRef={weightRef}
              hasError={enteredWeight}
              onChange={changeWeightHandler}
            />
            <Input
              placeholder="Sua altura(cm)"
              type="number"
              enteredRef={heightRef}
              hasError={enteredHeight}
              onChange={changeHeightHandler}
            />

            <SelectInfo
              enteredRef={levelRef}
              about={"level"}
              hasError={enteredLevel}
              onChange={levelHandler}
            />
          </InputWrapper>
          <Button>Calcular</Button>
          <Button styledBack="back" onClick={backToHome}>
            Voltar
          </Button>
        </Form>
      </div>
    </GlobalWrapper>
  );
};

export default Settings;
