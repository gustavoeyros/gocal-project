import arrowHistory from "../../assets/arrowHistory.svg";
import { Link } from "react-router-dom";
import { CardInfoWrapper, TitleInfoWrapper, SubInfoWrapper } from "./styled";
const Card = ({ userName, userHeight, userWeight, userAge, userId }) => {
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
        <p>
          <Link to={`/result/${userId}`}>
            Veja o resultado <img src={arrowHistory} />
          </Link>
        </p>
      </SubInfoWrapper>
    </CardInfoWrapper>
  );
};

export default Card;
