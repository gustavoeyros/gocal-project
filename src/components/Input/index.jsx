import { InputStyle } from "./styled";
const Input = ({ placeholder, type, enteredRef, hasError, onChange }) => {
  return (
    <>
      {type !== "select" && (
        <InputStyle
          ref={enteredRef}
          type={type}
          placeholder={placeholder}
          hasError={hasError}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default Input;
