import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlobalWrapper, ResultWrapper } from "./styled";
import Title from "../components/Title";
import ResultText from "../components/ResultText";
import Button from "../components/Button";
import ResultDetailLoading from "../components/SkeletonLoading/ResultDetailLoading";

const ResultDetail = () => {
  const [loadedHistory, setLoadedHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resultMetabolism, setResultMetabolism] = useState("");

  const navigate = useNavigate();
  const params = useParams("/result/:resultId");

  const { resultId } = params;

  const showHistory = async () => {
    const response = await fetch(import.meta.env.VITE_FIREBASE_URL);
    const data = await response.json();

    for (const key in data) {
      loadedHistory.push({
        id: key,
        name: data[key].user.name,
        age: data[key].user.age,
        height: data[key].user.height,
        weight: data[key].user.weight,
        level: data[key].user.level,
        gender: data[key].user.gender,
      });
    }
    const filteredHistory = loadedHistory.filter(
      (info) => info.id === resultId
    );
    setLoadedHistory(filteredHistory);
    setIsLoading(false);

    const level = loadedHistory[0].level;
    const weight = loadedHistory[0].weight;
    const height = loadedHistory[0].height;
    const age = loadedHistory[0].age;
    const gender = loadedHistory[0].gender;

    //basal metabolism
    if (gender === "masculine") {
      setResultMetabolism(
        level * (66 + (13, 7 * weight) + 5 * height - (6, 8 * age))
      );
    }
    if (gender === "feminine") {
      setResultMetabolism(
        level * (655 + (9, 6 * weight) + (1, 8 * height) - (4, 7 * age))
      );
    }
  };

  useEffect(() => {
    showHistory();
  }, [showHistory]);

  const backToHome = () => {
    navigate("/home");
  };

  return (
    <GlobalWrapper>
      {!isLoading && (
        <>
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
          <Button onClick={backToHome}>Voltar</Button>
        </>
      )}
      {isLoading && <ResultDetailLoading />}
    </GlobalWrapper>
  );
};

export default ResultDetail;
