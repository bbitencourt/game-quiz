import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1920px;
  min-height: 100%;
  position: relative;
  padding-bottom: 160px;
  position: relative;
  transition: 300ms;

  img.el {
    display: none;
    position: absolute;
  }

  &.fase1 {
    background: rgb(91, 200, 226);
    background: linear-gradient(
      130deg,
      rgba(91, 200, 226, 1) 0%,
      rgba(46, 146, 209, 1) 78%
    );

    img.nuvem {
      display: block;
      left: -8%;
      top: 20%;
      z-index: 0;
      transition: 300ms;
    }

    img.balao {
      display: block;
      right: -10%;
      top: 30%;
      z-index: 0;
      transition: 300ms;
    }

    img.montanha {
      display: block;
      left: 5%;
      bottom: -13%;
      z-index: 0;
      transition: 300ms;
    }
  }

  &.fase2 {
    background: rgb(68, 45, 132);
    background: linear-gradient(
      130deg,
      rgba(68, 45, 132, 1) 30%,
      rgba(0, 122, 159, 1) 100%
    );

    img.mar {
      display: block;
      bottom: -8%;
      right: 0%;
      z-index: 0;
      transition: 300ms;
    }
    img.submarino {
      display: block;
      left: -8%;
      top: 35%;
      z-index: 0;
      transition: 300ms;
    }
    img.polvo {
      display: block;
      right: 0%;
      top: 25%;
      z-index: 0;
      transition: 300ms;
    }
  }

  &.fase3 {
    background: rgb(91, 200, 226);
    background: linear-gradient(
      130deg,
      rgba(91, 200, 226, 1) 0%,
      rgba(46, 146, 209, 1) 78%
    );

    img.gelo {
      display: block;
      left: -8%;
      bottom: -5%;
      z-index: 0;
      transition: 300ms;
    }
    img.passaro {
      display: block;
      top: 18%;
      left: 25%;
      z-index: 0;
      transition: 300ms;
    }
    img.nuvemPassaro {
      display: block;
      right: -5%;
      top: 35%;
      z-index: 0;
      transition: 300ms;
    }
  }

  &.fase4 {
    background: rgb(69, 17, 80);
    background: linear-gradient(
      130deg,
      rgba(69, 17, 80, 1) 10%,
      rgba(16, 60, 111, 1) 100%
    );

    img.planets {
      display: block;
      left: 2%;
      top: 20%;
      z-index: 0;
      transition: 300ms;
    }

    img.stars {
      display: block;
      top: -5%;
      right: 0;
      z-index: 0;
      transition: 300ms;
    }

    img.starsBase {
      display: block;
      bottom: -5%;
      right: 0;
      z-index: 0;
      transition: 300ms;
    }

    img.astronautas {
      display: block;
      top: 25%;
      right: -2%;
      z-index: 0;
      transition: 300ms;
    }
  }

  img.unimed {
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
  }

  @media only screen and (max-width: 768px) {
    &.fase1 {
      img.nuvem {
        display: none;
      }
      img.balao {
        display: none;
      }
      img.montanha {
        display: none;
      }
    }
    &.fase2 {
      img.mar {
        display: none;
      }
      img.submarino {
        display: none;
      }
      img.polvo {
        display: none;
      }
    }
    &.fase3 {
      img.gelo {
        display: none;
      }
      img.passaro {
        display: none;
      }
      img.nuvemPassaro {
        display: none;
      }
    }
    &.fase4 {
      img.planets {
        display: none;
      }

      img.stars {
        display: none;
      }

      img.starsBase {
        display: none;
      }

      img.astronautas {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 640px) {
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
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  height: 100%;
  flex: 1;
  padding: 0 32px;

  &.hidden {
    display: none;
  }

  &.inicio {
    margin: 72px auto 0 auto;
    max-width: 640px;
  }

  small {
    font-family: "UnimedDemiBold";
    font-size: 19px;
    text-align: center;
    margin-bottom: 8px;
    color: #fff;
  }

  h1 {
    font-family: "UnimedSlab";
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    margin-top: 24px;

    &.start {
      font-family: "UnimedSlabExtra";
      color: #ffc880;
      font-size: 56px;
      line-height: 56px;
      text-transform: uppercase;
      margin: 0 0 24px 0;
    }
  }

  p {
    font-family: "Unimed";
    font-size: 20px;
    color: #fff;
    text-align: center;
  }

  button.comecar {
    background-color: #003550;
    min-width: 200px;
    margin-top: 24px;
  }

  div.error {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    padding: 24px;
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f44336;
    i {
      margin-right: 8px;
    }

    span {
      margin: 0;
      font-family: "UnimedSlab";
      letter-spacing: 0;
    }
  }
  ul {
    list-style: none;
    margin-top: 32px;

    li {
      display: flex;
      margin-bottom: 24px;
      button.option {
        display: flex;
        width: 34px;
        height: 34px;
        border-radius: 17px;
        background: #fff;
        border: 2px #d8cad3 solid;
        color: #003550;
        font-family: "Unimed";
        font-weight: bold;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        padding: 0;
        cursor: pointer;

        &.certo {
          background: #afd455;
          border-color: #009b63;
          color: #fff;
        }

        &.erro {
          background: #f44336;
          border-color: #d32f2f;
          color: #fff;
        }
      }
      button.opcoes {
        height: auto;
        text-transform: inherit;
        font-family: "Unimed";
        font-size: 20px;
        text-align: left;
        line-height: 24px;
        padding: 0;
        flex: 1;
        border-radius: 0;

        &:hover {
          opacity: 1;
          color: #ffa429;
        }
        &.certo {
          color: #afd455;
        }

        &.erro {
          color: #f44336;
        }
        &.respondido {
          &.certo {
            &:hover {
              color: #afd455;
            }
          }
          &.erro {
            &:hover {
              color: #f44336;
            }
          }
          &:hover {
            opacity: 1;
            color: #fff;
          }
        }
      }
    }
  }

  &.fase2 {
    h6 {
      color: #ffa429;
    }
    button.comecar {
      background-color: #f47d35;
    }
  }
  &.fase4 {
    h6 {
      color: #ffa429;
    }
    button.comecar {
      background-color: #f47d35;
    }
  }

  div.row {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 48px;

    button {
      width: 200px;
      &.verde {
        margin-right: 24px;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    h6 {
      font-size: 24px;
    }
    h1 {
      font-size: 24px;
    }
    div.row {
      flex-direction: column-reverse;
      button {
        width: 100%;
        &.verde {
          margin: 0;
        }
        &.azul {
          margin-bottom: 24px;
        }
      }
    }
  }
`;
