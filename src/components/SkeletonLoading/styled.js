import styled from "styled-components";

export const CardInfoWrapper = styled.div`
  display: flex;
  background-color: white;

  padding: 5px;
  height: 70px;
  border-radius: 5px;
  width: 335px;
  & div {
    width: 50%;
  }
  & p a {
    text-decoration: none;
    color: #37b874;
  }

  & h2 {
    width: 162px;
    height: 27px;
  }

  & div p {
    width: 147px;
    height: 25px;
  }
  @media (min-width: 767px) {
    width: 100%;
  }
`;

export const TitleInfoWrapper = styled.div`
  text-align: left;
  & h2 {
    font-size: 18px;
    background-color: #e9e5e5;
  }
  & div {
    color: #969cb2;
    width: 100%;
    font-size: 12px;
    margin-top: 5px;
    background-color: #e9e5e5;
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

  & span {
    width: 32px;
    height: 25px;
    margin-left: 130px;
    margin-bottom: 10px;
    background-color: #e9e5e5;
  }
  & p {
    color: #37b874;
    background-color: #e9e5e5;
    margin-left: 15px;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
