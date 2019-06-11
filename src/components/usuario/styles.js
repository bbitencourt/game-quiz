import styled from "styled-components";

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    border-radius: 4px;
    margin-right: 20px;
    height: 80px;
  }

  div {
    display: flex;
    flex-direction: column;

    h4 {
      font-family: "UnimedSlabExtra";
      font-size: 20px;
      color: #fff;
      margin-bottom: 6px;
    }

    h5 {
      font-family: "UnimedSlab";
      font-size: 16px;
      color: ${props =>
        props.fase == "fase1" || props.fase == "fase3" ? "#002334" : "#ffa429"};
      text-transform: uppercase;
    }
  }
`;
