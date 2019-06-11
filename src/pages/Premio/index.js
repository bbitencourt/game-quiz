import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper } from "./styles";

import Header from "../../components/header";

import stars from "../../assests/images/el-stars.png";
import starsBase from "../../assests/images/el-stars-base.png";
import planets from "../../assests/images/el-planets.png";
import astronautas from "../../assests/images/el-astronautas.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";
import trofeu1 from "../../assests/images/trofeu-1.png";
import trofeu2 from "../../assests/images/trofeu-2.png";
import trofeu3 from "../../assests/images/trofeu-3.png";

export default class Premio extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Header logado={true} />
          <Wrapper>
            <h2>Premiação</h2>
            <p className="subtitle">
              As 4 equipes que mais pontuarem no final das fases participarão da
              grande final ao vivo e concorrerão a prêmios exclusivos!
            </p>
            <div className="row">
              <div className="premio">
                <img src={trofeu1} alt="1º Lugar" />
                <h3>1º Lugar</h3>
                <h5>Prêmio</h5>
                <p>
                  Jantar da equipe com 1 acompanhante por pessoa no restaurante
                  Brasador
                </p>
              </div>
              <div className="premio">
                <img src={trofeu2} alt="2º Lugar" />
                <h3>2º Lugar</h3>
                <h5>Prêmio</h5>
                <p>Vale compras de R$150,00 por integrante da equipe</p>
              </div>
              <div className="premio">
                <img src={trofeu3} alt="3º Lugar" />
                <h3>3º Lugar</h3>
                <h5>Prêmio</h5>
                <p>
                  Ingressos para cinema com acompanhante no ParkSul, Sala Vip +
                  pipoca e refrigerante
                </p>
              </div>
            </div>
          </Wrapper>
          <img className="unimed" src={Unimed30} alt="Unimed 30 anos" />
          <img className="stars" src={stars} alt="estrelas" />
          <img className="starsBase" src={starsBase} alt="estrelas" />
          <img className="planets" src={planets} alt="Planetas" />
          <img className="astronautas" src={astronautas} alt="Astronautas" />
        </Container>
      </Fragment>
    );
  }
}
