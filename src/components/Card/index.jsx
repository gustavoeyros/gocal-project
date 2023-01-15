import { CardInfoWrapper, TitleInfoWrapper, SubInfoWrapper } from "./styled";
const Card = ({ userName, userHeight, userWeight, userAge }) => {
  return (
    <CardInfoWrapper>
      <TitleInfoWrapper>
        <h2>{userName}</h2>
        <div>
          <span>{userHeight}m</span>
          <span>{userWeight}kg</span>
        </div>
      </TitleInfoWrapper>
      <SubInfoWrapper>
        <span>{userAge} anos</span>
        <p>Veja o resultado </p>
      </SubInfoWrapper>
    </CardInfoWrapper>
  );
};

export default Card;
