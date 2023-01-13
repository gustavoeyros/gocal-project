import { GlobalWrapper } from "./styled";
import Title from "../components/Title";
import ResultText from "../components/ResultText";
import Button from "../components/Button";
import Check from "../components/Check";
const Result = () => {
  return (
    <GlobalWrapper>
      <Title>
        <p>Aqui está o seu</p>
        resultado
      </Title>

      <ResultText position="first">
        <p>
          Seu <b>metabolismo basal</b> é de:
        </p>
        1606 calorias.
      </ResultText>
      <ResultText>
        <p>
          Para <b>manter o seu peso </b>você precisa consumir em média:
        </p>
        1928 calorias.
      </ResultText>
      <ResultText>
        <p>
          Para <b>perder peso</b> você precisa consumir em média:
        </p>
        1638 calorias.
      </ResultText>
      <ResultText position="last">
        <p>
          Para <b>ganhar peso</b> você precisa consumir em média:
        </p>
        1638 calorias.
      </ResultText>
      <Check />
      <Button nav="/home">Reiniciar</Button>
    </GlobalWrapper>
  );
};

export default Result;
