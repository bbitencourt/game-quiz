import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { Container, Wrapper } from "./styles";
import Header from "../../components/header";
import bgHospital from "../../assests/images/bg-hospital.png";
import stars from "../../assests/images/el-home.png";
import logo from "../../assests/images/interligados.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Header main={true} />
          <Wrapper>
            {this.props.auth.logado ? (
              <div className="wrapText">
                <img className="logo" src={logo} alt="Interligados" />
                <h1>Confira as fases liberadas!</h1>
                <p>
                  A cada dia, uma nova fase é liberada, totalizando 4 etapas. As
                  4 equipes que mais pontuarem vão participar da grande final e
                  concorrem a prêmios.
                </p>

                <div className="wrapButton">
                  <Link to="/interligados/fases">
                    <button className="azul">Jogar agora!</button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="wrapText">
                <img className="logo" src={logo} alt="Interligados" />
                <h1>Cadastre sua equipe e comece a jogar!</h1>
                <p>
                  A cada dia, uma nova fase é liberada, totalizando 4 etapas. As
                  4 equipes que mais pontuarem vão participar da grande final e
                  concorrem a prêmios.
                </p>
                <p className="amarelo">
                  Leia atentamente as regras do game antes de iniciar!
                </p>

                <div className="wrapButton">
                  <Link to="/interligados/cadastro">
                    <button className="azul">Cadastrar Equipe</button>
                  </Link>
                  <Link to="/interligados/login">
                    <button className="laranja">Já tenho equipe</button>
                  </Link>
                </div>
              </div>
            )}
          </Wrapper>
          <Link to="/interligados/rankingtemp">
            <img className="unimed" src={Unimed30} alt="Unimed 30 anos" />
          </Link>
          <img className="stars" src={stars} alt="estrelas" />
          <img className="hospital" src={bgHospital} alt="Hospital" />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Main);
