import CardList from "../CardList";
import { useState, useEffect } from "react";
import { HistoryWrapper, TitleWrapper } from "./styled";
const History = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const showHistory = async () => {
    const response = await fetch(import.meta.env.VITE_FIREBASE_URL);
    const data = await response.json();

    const loadedHistory = [];
    for (const key in data) {
      loadedHistory.push({
        id: key,
        name: data[key].user.name,
        age: data[key].user.age,
        height: data[key].user.height,
        weight: data[key].user.weight,
        level: data[key].user.level,
      });
    }
    setHistory(loadedHistory);
    setIsLoading(false);
  };

  useEffect(() => {
    showHistory();
  }, [showHistory]);
  return (
    <HistoryWrapper>
      <TitleWrapper>
        <span>Seu</span> <span>histórico</span>
      </TitleWrapper>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <CardList infoDisplay={history} />}
    </HistoryWrapper>
  );
};

export default History;
