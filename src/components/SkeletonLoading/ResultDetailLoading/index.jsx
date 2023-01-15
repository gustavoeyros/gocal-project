import { GlobalWrapper, ResultWrapper } from "../../../pages/styled";
import { TitleLoading, ResultTextLoading, ButtonLoading } from "./styled";

const ResultDetailLoading = () => {
  return (
    <GlobalWrapper>
      <>
        <TitleLoading />
        <ResultWrapper>
          <ResultTextLoading />

          <ResultTextLoading />

          <ResultTextLoading />

          <ResultTextLoading />
        </ResultWrapper>
        <ButtonLoading />
      </>
    </GlobalWrapper>
  );
};

export default ResultDetailLoading;
