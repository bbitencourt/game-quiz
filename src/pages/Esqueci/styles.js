import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1920px;
  min-height: 100%;
  position: relative;
  padding-bottom: 160px;
  background: rgb(69, 17, 80);
  background: linear-gradient(
    130deg,
    rgba(69, 17, 80, 1) 10%,
    rgba(16, 60, 111, 1) 100%
  );

  img.planets {
    position: absolute;
    left: 2%;
    top: 20%;
    z-index: 0;
    transition: 300ms;
  }

  img.stars {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    transition: 300ms;
  }

  img.astronautas {
    position: absolute;
    top: 25%;
    right: -2%;
    z-index: 0;
    transition: 300ms;
  }

  img.unimed {
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
  }

  @media only screen and (max-width: 1025px) {
    img.planets {
      left: -5%;
    }
    img.astronautas {
      right: -20%;
    }
  }

  @media only screen and (max-width: 768px) {
    img.planets {
      left: -30%;
      opacity: 0.3;
    }
    img.astronautas {
      right: -30%;
      opacity: 0.3;
    }
  }
  @media only screen and (max-width: 640px) {
    img.planets {
      opacity: 0;
    }
    img.astronautas {
      opacity: 0;
    }
    img.unimed {
      right: 27%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 720px;
  margin: 48px auto 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 99;
  height: 100%;
  padding: 0 32px;

  h2 {
    text-align: center;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  p {
    font-family: "Unimed";
    font-size: 16px;
    line-height: 18px;
    color: #fff;
    margin-bottom: 16px;
    text-align: center;
  }
  form {
    display: flex;
    width: 80%;
    flex-direction: column;
    margin: 30px 0;

    span {
      display: block;
      color: #f00;
      margin-bottom: 16px;
      font-family: "Unimed";
      letter-spacing: 1px;
    }

    div.row {
      display: flex;
      flex-direction: row-reverse;
      flex: 1;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      button {
        margin-top: 24px;
        min-width: 200px;
        i {
          font-size: 22px;
        }
        &.verde {
          margin-right: 24px;
        }
      }

      a.esqueci {
        display: block;
        margin-top: 32px;
        font-family: "UnimedSlab";
        color: #fff;
        text-align: center;
      }
    }

    label {
      color: #fff;
      margin-bottom: 8px;
      font-family: "UnimedSlab";
      text-transform: uppercase;
    }

    input {
      flex: 1;
      margin-bottom: 16px;
      padding: 16px;
      border-radius: 4px;
      border: 0;
      background-color: rgba(0, 0, 0, 0.3);
      font-family: "Unimed";
      color: #fff;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 768px) {
    form {
      width: 80%;
    }
  }
  @media only screen and (max-width: 640px) {
    form {
      width: 100%;
      div.row {
        a {
          flex: 1;
        }
        button.verde {
          margin-right: 0;
          width: 100%;
        }
        button.azul {
          width: 100%;
        }
      }
    }
  }
`;
