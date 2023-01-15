import styled from "styled-components";

export const HistoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 29px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #37b874;
  width: 141px;
  font-weight: 700;
  font-size: 18px;
  height: 33px;
  margin-top: 56px;
  & span:nth-child(1) {
    display: flex;
    align-items: center;
    color: #2c2c2c;
    background: #ffffff;
    height: 100%;
    padding-left: 5px;
    width: 30%;
  }
  & span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2c2c2c;
    background: #37b874;
    color: white;
    height: 100%;
    padding-left: 5px;
  }
`;
