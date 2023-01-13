import { Title } from "./styled";
const Description = ({ children, position }) => {
  return (
    <>
      <Title position={position}>{children}</Title>
    </>
  );
};

export default Description;
