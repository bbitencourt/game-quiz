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
    rgba(69, 17, 80, 1) 0%,
    rgba(16, 60, 111, 1) 80%
  );

  img.planets {
    position: absolute;
    left: 0%;
    top: 20%;
    z-index: 0;
    transition: 300ms;
  }

  img.stars {
    position: absolute;
    top: -5%;
    right: 0;
    z-index: 0;
    transition: 300ms;
  }

  img.starsBase {
    position: absolute;
    bottom: -5%;
    right: 0;
    z-index: 0;
    transition: 300ms;
  }

  img.astronautas {
    position: absolute;
    top: 25%;
    right: -5%;
    z-index: 0;
    transition: 300ms;
  }

  img.unimed {
    position: absolute;
    right: 5%;
    bottom: 5%;
    z-index: 99;
  }
  @media only screen and (max-width: 1367px) {
    img.planets {
      left: -2%;
    }
    img.astronautas {
      right: -10%;
    }
  }
  @media only screen and (max-width: 1025px) {
    img.planets {
      left: -10%;
    }
    img.astronautas {
      right: -25%;
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
  max-width: 980px;
  margin: 96px auto 0 auto;
  justify-content: center;
  align-items: center;
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
    &.subtitle {
      width: 50%;
    }
  }

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1;
    margin-top: 48px;

    div.premio {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex: 1;
      align-items: center;
      margin-right: 32px;

      img {
        margin-bottom: 16px;
      }
      h3 {
        margin-bottom: 8px;
      }
      h5 {
        margin-bottom: 16px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    p.subtitle {
      width: 100%;
    }
    div.row {
      div.premio {
        margin-right: 16px;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    margin-top: 48px;
    div.row {
      flex-direction: column;
      .premio {
        margin-right: 0;
        margin-bottom: 32px;
      }
    }
  }
`;
