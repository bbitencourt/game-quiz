import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1920px;
  min-height: 100%;
  padding-bottom: 160px;
  background: rgb(40, 132, 118);
  background: linear-gradient(
    130deg,
    rgba(40, 132, 118, 1) 0%,
    rgba(37, 20, 105, 1) 65%
  );
  position: relative;

  img.hospital {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
    transition: 300ms;
  }
  img.stars {
    position: absolute;
    top: 0;
    right: -100px;
    z-index: 0;
    transition: 300ms;
  }

  img.unimed {
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
  }

  @media only screen and (max-width: 768px) {
    img.hospital {
      opacity: 0.2;
    }

    img.stars {
      opacity: 0.2;
    }
  }

  @media only screen and (max-width: 768px) {
    img.unimed {
      right: 30%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 100px auto 0 auto;
  align-items: center;
  position: relative;
  z-index: 99;
  height: 100%;
  padding: 0 32px;

  div.wrapText {
    width: 50%;
    margin-bottom: 62px;

    img.logo {
      margin-bottom: 48px;
      transition: 300ms;
    }

    h1 {
      text-align: left;
      margin-bottom: 24px;
    }

    p {
      font-family: "Unimed";
      font-size: 16px;
      line-height: 18px;
      color: #fff;
      margin-bottom: 16px;

      &.amarelo {
        color: #ffa429;
      }
    }
    div.wrapButton {
      margin-top: 48px;

      button {
        margin-right: 24px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 48px;

    div.wrapText {
      width: 90%;
      text-align: center;

      img.logo {
        align-self: center;
        width: 80%;
      }

      h1 {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    div.wrapText {
      button {
        width: 100%;
        margin-right: 0;
      }
      button.laranja {
        margin-top: 16px;
      }
    }
  }
`;
