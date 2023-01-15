import styled from "styled-components";

export const CardInfoWrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 12px;
  height: 70px;
  border-radius: 5px;
  & div {
    width: 50%;
  }
`;

export const TitleInfoWrapper = styled.div`
  text-align: left;
  & h2 {
    font-size: 18px;
  }
  & div {
    color: #969cb2;
    width: 100%;
  }
  & div span {
    padding: 8px 0px;
    margin-right: 15px;
  }
`;

export const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-weight: 500;

  & p {
    color: #37b874;
  }
`;