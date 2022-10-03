import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 100px 25px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 100px 15px;
  }
`;

export const CryptosTitles = styled.h1`
  margin-top: 80px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

export const CryptosWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;
