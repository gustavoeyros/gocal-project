import { ResultStyled } from "./styled";

const ResultText = ({ children, position }) => {
  return (
    <>
      <ResultStyled position={position}>{children}</ResultStyled>
    </>
  );
};

export default ResultText;
