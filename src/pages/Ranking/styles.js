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
    right: 3%;
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
  justify-content: center;
  position: relative;
  z-index: 99;
  min-height: 100%;
  padding: 0 32px;

  h2 {
    text-align: center;
    margin-bottom: 16px;
    text-transform: uppercase;

    &.desqualificadas {
      margin-top: 24px;
    }
  }

  p {
    font-family: "Unimed";
    font-size: 16px;
    line-height: 16px;
    color: #686288;
    text-align: left;
  }
  .box {
    display: flex;
    background-color: #fff;
    border-radius: 6px;
    padding: 32px;

    i {
      color: #666;
      font-size: 24px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      flex: 1;

      li {
        display: flex;
        flex-direction: column;
        flex: 1;
        border-bottom: 1px #d3d3d3 solid;
        padding: 8px 0;

        &:last-child {
          border-bottom: 0;
        }

        .line {
          display: flex;
          flex: 1;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;

          .avatar {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex: 0.5;

            img {
              height: 32px;
              margin-right: 8px;
            }
          }

          .fases {
            flex: 0.2;
          }
          .pontos {
            display: flex;
            justify-content: flex-start;
            flex: 0.2;
          }
          .tempo {
            display: flex;
            justify-content: flex-end;
            flex: 0.1;
          }
        }
      }
    }
  }
`;
