import { GlobalWrapper, Form } from "./styled";
import Button from "../components/Button";
import Input from "../components/Input";
import Description from "../components/Description";

const Home = () => {
  return (
    <GlobalWrapper>
      <Form>
        <Description>
          <p>Para começar</p> como podemos te chamar?
        </Description>
        <Input position="unique" placeholder="Digite o seu nome" />
        <Button>Avançar</Button>
      </Form>
    </GlobalWrapper>
  );
};

export default Home;
