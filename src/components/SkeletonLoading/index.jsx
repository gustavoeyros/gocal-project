import {
  CardInfoWrapper,
  TitleInfoWrapper,
  SubInfoWrapper,
  SkeletonWrapper,
} from "./styled";
const SkeletonLoading = () => {
  return (
    <SkeletonWrapper>
      <CardInfoWrapper>
        <TitleInfoWrapper>
          <h2></h2>
          <div>
            <span></span>
            <span></span>
          </div>
        </TitleInfoWrapper>
        <SubInfoWrapper>
          <span></span>
          <p></p>
        </SubInfoWrapper>
      </CardInfoWrapper>

      <CardInfoWrapper>
        <TitleInfoWrapper>
          <h2></h2>
          <div>
            <span></span>
            <span></span>
          </div>
        </TitleInfoWrapper>
        <SubInfoWrapper>
          <span></span>
          <p></p>
        </SubInfoWrapper>
      </CardInfoWrapper>

      <CardInfoWrapper>
        <TitleInfoWrapper>
          <h2></h2>
          <div>
            <span></span>
            <span></span>
          </div>
        </TitleInfoWrapper>
        <SubInfoWrapper>
          <span></span>
          <p></p>
        </SubInfoWrapper>
      </CardInfoWrapper>
    </SkeletonWrapper>
  );
};

export default SkeletonLoading;
