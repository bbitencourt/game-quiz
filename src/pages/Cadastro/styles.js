import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1920px;
  min-height: 100%;
  position: relative;
  padding-bottom: 160px;
  background: rgb(68, 45, 132);
  background: linear-gradient(
    130deg,
    rgba(68, 45, 132, 1) 30%,
    rgba(0, 122, 159, 1) 100%
  );

  img.submarino {
    position: absolute;
    right: 75%;
    top: 40%;
    z-index: 0;
    transition: 300ms;
  }

  img.bolhas {
    position: absolute;
    top: -60px;
    right: 13%;
    z-index: 0;
    transition: 300ms;
  }

  img.unimed {
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
    transition: 300ms;
  }

  @media only screen and (max-width: 1441px) {
    img.bolhas {
      right: 8%;
    }
  }
  @media only screen and (max-width: 1025px) {
    img.bolhas {
      right: -7%;
    }
    img.submarino {
      right: 85%;
      top: 40%;
    }
  }

  @media only screen and (max-width: 768px) {
    img.bolhas {
      right: -30%;
    }
    img.submarino {
      right: 75%;
      top: 65%;
    }
  }
  @media only screen and (max-width: 640px) {
    img.bolhas {
      opacity: 0;
    }
    img.submarino {
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
  max-width: 700px;
  margin: 48px auto 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 99;
  min-height: 100%;
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

  div.etapa.hidden {
    display: none;
  }

  div.etapa {
    display: flex;
    flex-direction: column;
    flex: 1;

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 30px 0;

      div.error {
        background-color: #fff;
        border-radius: 8px;
        padding: 32px;
        margin: 24px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          margin-right: 8px;
        }

        span {
          margin: 0;
          font-family: "UnimedSlab";
          letter-spacing: 0;
        }
      }

      label {
        color: #fff;
        margin-bottom: 8px;
        font-family: "UnimedSlab";
        text-transform: uppercase;
      }

      input {
        margin-bottom: 16px;
        padding: 16px;
        border-radius: 4px;
        border: 0;
        background-color: rgba(0, 0, 0, 0.3);
        font-family: "Unimed";
        color: #fff;
        font-size: 16px;
      }

      span {
        display: block;
        color: #ef5350;
        margin-bottom: 16px;
        font-family: "Unimed";
        letter-spacing: 1px;
      }

      button {
        margin-top: 24px;
        width: 200px;

        i {
          font-size: 22px;
        }
      }
      button.verde {
        margin-right: 24px;
      }
      button.avatar {
        width: auto;
        height: 128px;
        margin: 0 24px 24px 0;
        padding: 0;

        border-radius: 4px;
        position: relative;

        &:hover {
          opacity: 1;
          span {
            opacity: 1;
          }
        }
        span {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 128px;
          height: 128px;
          border: 5px #fff solid;
          border-radius: 4px;
          opacity: 0;
          transition: 300ms;

          &.selected {
            opacity: 1;
            img.check {
              opacity: 1;
            }
          }

          img.check {
            opacity: 0;
            position: absolute;
            right: -15px;
            bottom: -15px;
            transition: 300ms;
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }

      div.row {
        display: flex;
        flex-direction: row;
        flex: 1;
        flex-wrap: wrap;

        &.center {
          align-items: center;
          justify-content: center;
        }

        .first {
          margin-right: 16px;
        }
        .column {
          display: flex;
          flex: 1;
          flex-direction: column;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    div.etapa {
      div.row {
        &.actions {
          flex-direction: column-reverse;
        }
        div.first {
          margin-right: 0;
        }
        button.avatar {
          &:last-child {
            margin-right: 24px;
          }
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
