import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 100px 30px;
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
  padding: 0 100px;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 0 30px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 0 15px;
  }
`;

export const CryptoDetailsWrapper = styled.div`
  padding: 50px 100px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #e2e2e2;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 50px 30px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 25px 15px;
  }
`;

export const CryptoDetailsName = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 22px;
`;

export const CryptoDetailsContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 15px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-top: 30px;
    align-items: center;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-top: 30px;
    align-items: center;
  }
`;

export const CryptoDetailsGraphics = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CryptoDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CryptoDetailsTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 10px auto 15px 0;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    margin: 5px auto 5px 0;
  }
`;

export const CryptoDetailsTitleInfo = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const CryptoDetailsTitleLink = styled.a`
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  color: black;
  transition: 0.3s;
  &:hover {
    color: #7878d2;
  }
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;
