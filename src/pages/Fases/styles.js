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
      left: -5%;
    }
    img.astronautas {
      right: -15%;
    }
  }
  @media only screen and (max-width: 1025px) {
    img.planets {
      left: -20%;
    }
    img.astronautas {
      right: -30%;
    }
  }

  @media only screen and (max-width: 768px) {
    img.planets {
      opacity: 0;
    }
    img.astronautas {
      opacity: 0;
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
  max-width: 1100px;
  margin: 200px auto 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  height: 100%;
  padding: 0 32px;

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1;

    i {
      color: #fff;
      font-size: 24px;
    }

    div {
      margin-right: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    div.row {
      div {
        margin-right: 16px;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    margin-top: 48px;
    div.row {
      flex-direction: column;
      div {
        margin-right: 0;
        margin-bottom: 32px;
      }
    }
  }
`;
