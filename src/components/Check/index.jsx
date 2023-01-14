import { CheckWrapper, InputCheck } from "./styled";

const Check = ({ onChange }) => {
  return (
    <CheckWrapper>
      <InputCheck onChange={onChange} type="checkbox" id="saveInfo" />

      <label htmlFor="saveInfo">Lembrar das minhas informações</label>
    </CheckWrapper>
  );
};

export default Check;
