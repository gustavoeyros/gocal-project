import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GlobalWrapper, ResultWrapper } from "./styled";
import Title from "../components/Title";
import ResultText from "../components/ResultText";
import Button from "../components/Button";
import Check from "../components/Check";

const Result = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const name = localStorage.getItem("name");
  const gender = localStorage.getItem("gender");
  const age = localStorage.getItem("age");
  const weight = localStorage.getItem("weight");
  const height = localStorage.getItem("height");
  const level = localStorage.getItem("level");

  const userData = {
    name,
    gender,
    age,
    weight,
    height,
    level,
  };

  //ouput
  let resultMetabolism;

  //basal metabolism
  if (gender === "masculine") {
    resultMetabolism =
      level * (66 + (13, 7 * weight) + 5 * height - (6, 8 * age));
  }
  if (gender === "feminine") {
    resultMetabolism =
      level * (655 + (9, 6 * weight) + (1, 8 * height) - (4, 7 * age));
  }

  const checkHandler = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const sendHandler = async () => {
    if (isChecked) {
      await fetch(import.meta.env.VITE_FIREBASE_URL, {
        method: "POST",
        body: JSON.stringify({
          user: userData,
        }),
      });
      navigate("/home");
    } else {
      navigate("/home");
    }
  };

  return (
    <GlobalWrapper>
      <Title>
        <p>Aqui está o seu</p>
        resultado
      </Title>

      <ResultWrapper>
        <ResultText>
          <p>
            Seu <b>metabolismo basal</b> é de:
          </p>
          {resultMetabolism.toFixed(2)} calorias.
        </ResultText>
        <ResultText>
          <p>
            Para <b>manter o seu peso </b>você precisa consumir em média:
          </p>
          {resultMetabolism.toFixed(2)} calorias.
        </ResultText>
        <ResultText>
          <p>
            Para <b>perder peso</b> você precisa consumir em média:
          </p>
          {(resultMetabolism - 400).toFixed(2)} calorias.
        </ResultText>
        <ResultText>
          <p>
            Para <b>ganhar peso</b> você precisa consumir em média:
          </p>
          {(resultMetabolism + 400).toFixed(2)} calorias.
        </ResultText>
      </ResultWrapper>
      <Check onChange={checkHandler} />
      <Button onClick={sendHandler}>Reiniciar</Button>
    </GlobalWrapper>
  );
};

export default Result;
