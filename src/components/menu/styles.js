import styled from "styled-components";

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  li {
    display: flex;
    margin-right: 20px;
    a {
      font-family: "UnimedSlab";
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
      transition: 300ms;

      &:hover {
        color: #afd455;
      }
    }
    &:last-child {
      margin-right: 0;
    }
    &.logout {
      img {
        margin-right: 8px;
      }
      a {
        color: #f47d35;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    li {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 640px) {
    li {
      margin-bottom: 10px;
    }
  }
`;
