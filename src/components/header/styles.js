import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 99;
  padding: 32px;

  @media only screen and (max-width: 768px) {
    justify-content: center;

    div {
      margin-bottom: 16px;
    }
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 25px;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 16px;
  }
`;
