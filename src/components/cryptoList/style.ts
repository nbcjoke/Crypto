import styled from "styled-components";

export const CryptoItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    gap: 25px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    gap: 15px;
  }
`;

export const CryptoItem = styled.div`
  border-radius: 5px;
  padding: 20px;
  width: 350px;
  height: 300px;
  background: #e2e2e2;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 3px 20px 3px rgb(0 0 0 / 15%);
  }

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    width: 300px;
    height: 250px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    width: 300px;
    height: 250px;
    padding: 10px;
  }
`;

export const CryptoTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

export const CryptoName = styled.h1`
  font-size: 18px;
`;

export const CryptoSymbol = styled.h1`
  font-size: 16px;
`;

export const CryptoPrice = styled.p`
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const CryptoRank = styled.p`
  margin: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    margin-top: 60px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    margin-top: 25px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    flex-direction: column;
    gap: 20px;
  }
`;
