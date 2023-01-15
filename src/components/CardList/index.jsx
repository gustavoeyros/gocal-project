import Card from "../Card";
import { CardWrapper } from "./styled";
const CardList = ({ infoDisplay }) => {
  return (
    <CardWrapper>
      {infoDisplay.map((info) => (
        <Card
          key={info.id}
          userName={info.name}
          userHeight={info.height}
          userWeight={info.weight}
          userAge={info.age}
        />
      ))}
    </CardWrapper>
  );
};

export default CardList;
