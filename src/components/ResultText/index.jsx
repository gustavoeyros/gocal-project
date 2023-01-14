import { ResultStyled } from "./styled";

const ResultText = ({ children }) => {
  return (
    <>
      <ResultStyled>{children}</ResultStyled>
    </>
  );
};

export default ResultText;
