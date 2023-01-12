import styled from "styled-components";

export const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  color: white;

  width: 335px;
  height: 56px;
  border-radius: 5px;

  ${(props) =>
    props.styledBack
      ? "background: transparent; color: #37b874"
      : "background:  #37b874"}
`;
