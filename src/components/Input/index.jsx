import { InputStyle, Select } from "./styled";
const Input = ({ placeholder, type, enteredRef, hasError }) => {
  return (
    <>
      {type !== "select" && (
        <InputStyle
          ref={enteredRef}
          type={type}
          placeholder={placeholder}
          hasError={hasError}
        />
      )}
      {type === "select" && (
        <Select type={type}>
          {type === "first" && (
            <>
              <option value="none" selected disabled hidden>
                Seu sexo
              </option>
              <option value="masculine">Masculino</option>
              <option value="feminine">Feminino</option>
            </>
          )}
          {type === "last" && (
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
