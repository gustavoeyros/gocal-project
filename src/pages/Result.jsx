import { GlobalWrapper, ResultWrapper } from "./styled";
import Title from "../components/Title";
import ResultText from "../components/ResultText";
import Button from "../components/Button";
import Check from "../components/Check";
const Result = () => {
  const gender = localStorage.getItem("gender");
  const age = localStorage.getItem("age");
  const weight = localStorage.getItem("weight");
  const height = localStorage.getItem("height");
  const level = localStorage.getItem("level");

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
          {resultMetabolism} calorias.
        </ResultText>
        <ResultText>
          <p>
            Para <b>manter o seu peso </b>você precisa consumir em média:
          </p>
          {resultMetabolism} calorias.
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
      <Check />
      <Button nav="/home">Reiniciar</Button>
    </GlobalWrapper>
  );
};

export default Result;
