import { InputStyle, Select } from "./styled";
const Input = ({ position, placeholder, type }) => {
  return (
    <>
      {type !== "select" && (
        <InputStyle position={position} type={type} placeholder={placeholder} />
      )}
      {type === "select" && (
        <Select position={position} type={type}>
          {position === "first" && (
            <>
              <option value="none" selected disabled hidden>
                Seu sexo
              </option>
              <option value="masculine">Masculino</option>
              <option value="feminine">Feminino</option>
            </>
          )}
          {position === "last" && (
            <>
              <option value="none" selected disabled hidden>
                Seu nível de atividade física
              </option>
              <option value="1">Muito ativo</option>
              <option value="2">Ativo</option>
              <option value="3">Irregularmente ativo</option>
              <option value="4">Sedentário</option>
            </>
          )}
        </Select>
      )}
    </>
  );
};

export default Input;
