import { Title } from "./styled";
const Description = (props) => {
  return (
    <>
      <Title>{props.children}</Title>
    </>
  );
};

export default Description;
