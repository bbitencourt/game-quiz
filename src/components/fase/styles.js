import styled from "styled-components";

export const Fase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  height: 180px;

  h4 {
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  p {
    font-family: "UnimedSlab";
    font-size: 18px;
    line-height: 20px;
    color: #fff;
    margin-bottom: 16px;
    text-align: center;

    &.points {
      font-size: 24px;
      text-transform: uppercase;
    }
  }
  button {
    i {
      color: #fff;
      font-size: 24px;
    }
    &.aguarde {
      opacity: 0.5;
      width: 100%;
      &:hover {
        cursor: initial;
      }
    }
    &.azul {
      width: 100%;
    }
    &.concluido {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        margin-right: 10px;
      }

      &:hover {
        opacity: 1;
        cursor: initial;
      }
    }
  }
`;
