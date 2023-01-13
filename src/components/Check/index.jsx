import { CheckWrapper, InputCheck } from "./styled";

const Check = () => {
  return (
    <CheckWrapper>
      <InputCheck type="checkbox" id="saveInfo" />

      <label htmlFor="saveInfo">Lembrar das minhas informações</label>
    </CheckWrapper>
  );
};

export default Check;
