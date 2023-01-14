import { Select } from "./styled";

const SelectInfo = ({ about }) => {
  return (
    <>
      {about === "gender" && (
        <Select>
          <option value="none" selected disabled hidden>
            Seu sexo
          </option>
          <option value="masculine">Masculino</option>
          <option value="feminine">Feminino</option>
        </Select>
      )}

      {about === "level" && (
        <Select>
          <option value="none" selected disabled hidden>
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
