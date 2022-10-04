import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  box-sizing: border-box;
  padding: 20px 100px;
  width: 100%;
  height: 90px;
  background: #e2e2e2;
  box-shadow: 0px 0px 9px 5px rgb(184 181 181);

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    padding: 20px 35px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 20px 15px;
    height: 110px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-beetwen;
`;

export const CryptoRankContainer = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    flex-direction: column;
    gap: 0;
    margin-top: -20px;
  }
`;

export const CryptoRankButton = styled.div`
  margin-left: auto;
  margin-right: 60px;

  @media screen and (min-width: 640px) and (max-width: 1019px) {
    margin-right: 120px;
  }

  @media screen and (min-width: 350px) and (max-width: 639px) {
    margin-left: 30px;
  }
`;

export const CryptoRankWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const CryptoRankName = styled.div`
  margin-right: 7px;
`;
