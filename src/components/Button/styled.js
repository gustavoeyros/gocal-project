import styled from "styled-components";

export const ButtonStyle = styled.button`
  cursor: pointer;
  border: none;

  width: 335px;
  height: 56px;
  border-radius: 5px;
  color: white;

  ${(props) =>
    props.styledBack
      ? "background: transparent; color: #37b874"
      : "background:  #37b874"}
`;
