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
      right: 33%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 32px auto 0 auto;
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
    color: #383838;
    margin-bottom: 16px;
    text-align: left;

    &.subtitle {
      color: #fff;
      text-align: center;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
    padding: 48px;
  }
`;
