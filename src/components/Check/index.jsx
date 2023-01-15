import { CheckWrapper, InputCheck } from "./styled";

const Check = ({ onChange }) => {
  return (
    <CheckWrapper>
      <InputCheck onChange={onChange} type="checkbox" id="saveInfo" />

      <label htmlFor="saveInfo"></label>
      <span>Lembrar das minhas informações</span>
    </CheckWrapper>
  );
};

export default Check;
