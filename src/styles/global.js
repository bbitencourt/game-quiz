import { createGlobalStyle } from "styled-components";
import UnimedSlab from "../assests/fonts/UnimedSlab-Bold.otf";
import UnimedSlabExtra from "../assests/fonts/UnimedSlab-ExtraBold.otf";
import UnimedDemiBold from "../assests/fonts/UnimedDemiBold.ttf";
import Unimed from "../assests/fonts/UnimedRegular.ttf";
import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "UnimedSlab";
    font-style: bold;
    src: url(${UnimedSlab});
  }
  @font-face {
    font-family: "UnimedSlabExtra";
    font-style: 900;
    src: url(${UnimedSlabExtra});
  }
  @font-face {
    font-family: "UnimedDemiBold";
    font-style: bold;
    src: url(${UnimedDemiBold});
  }
  @font-face {
    font-family: "Unimed";
    font-style: normal;
    src: url(${Unimed});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  h1 {
    font-family: 'UnimedSlabExtra';
    color: #fff;
    font-size: 48px;
    text-align: left;
    line-height: 48px;

  }

  h2 {
    font-family: 'UnimedSlab';
    color: #AFD455;
    font-size: 32px;
    text-align: left;
    line-height: 32px;
  }

  h3 {
    font-family: 'UnimedSlab';
    color: #FFF;
    font-size: 32px;
    text-align: left;
    line-height: 32px;
  }

  h4 {
    font-family: 'UnimedSlabExtra';
    color: #FFA429;
    font-size: 36px;
    text-align: left;
    line-height: 36px;
  }

  h5 {
    font-family: 'UnimedSlabExtra';
    color: #FFA429;
    font-size: 18px;
    text-align: left;
    line-height: 18px;
  }
  h6 {
    font-family: 'UnimedSlabExtra';
    color: #003550;
    font-size: 46px;
    text-align: center;
    line-height: 46px;
  }

  button {
    border-radius: 24px;
    height: 48px;
    padding: 14px 22px;
    background-color: transparent;
    border: none;
    font-family: 'UnimedSlab';
    color: #FFF;
    text-transform: uppercase;
    font-size: 16px;
    transition: 300ms;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }

  }
  button.laranja {
      background-color:#F47D35;
  }
  button.azul {
      background-color:#30B1E2;
  }
  button.verde {
      background-color:#00AD6F;
  }
`;

export default GlobalStyle;
