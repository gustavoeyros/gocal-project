import { Select } from "./styled";

const SelectInfo = ({ about, enteredRef, hasError, onChange }) => {
  return (
    <>
      {about === "gender" && (
        <Select ref={enteredRef} hasError={hasError} onChange={onChange}>
          <option value="null" id="null" selected disabled hidden>
            Seu sexo
          </option>
          <option value="masculine" id="masculine">
            Masculino
          </option>
          <option value="feminine" id="feminine">
            Feminino
          </option>
        </Select>
      )}

      {about === "level" && (
        <Select ref={enteredRef} hasError={hasError} onChange={onChange}>
          <option value="null" id="null" selected disabled hidden>
            Seu nível de atividade física
          </option>
          <option value="1">Muito ativo</option>
          <option value="2">Ativo</option>
          <option value="3">Irregularmente ativo</option>
          <option value="4">Sedentário</option>
        </Select>
      )}
    </>
  );
};

export default SelectInfo;
