import { GlobalWrapper } from "./styled";
import Title from "../components/Title";
import Description from "../components/Description";
import { Form } from "./styled";
import Input from "../components/Input";
import Button from "../components/Button";
const Settings = () => {
  return (
    <GlobalWrapper>
      <div>
        <Title>
          <p>Olá,</p>
          Gustavo Neves
        </Title>{" "}
        <Description>Vamos calcular o seu gasto energético basal!</Description>
        <Form>
          <Input position="first" placeholder="Seu sexo" type="select" />
          <Input placeholder="Sua idade" type="number" />
          <Input placeholder="Seu peso" type="number" />
          <Input placeholder="Sua altura(cm)" type="number" />
          <Input
            position="last"
            placeholder="Seu nível de atividade física"
            type="select"
          />
          <Button>Calcular</Button>
          <Button styledBack="back">Voltar</Button>
        </Form>
      </div>
    </GlobalWrapper>
  );
};

export default Settings;
