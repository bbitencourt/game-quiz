import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FasesActions } from "../../store/ducks/fases";

import { format, compareAsc } from "date-fns";

import { Container, Wrapper } from "./styles";

import Header from "../../components/header";
import Fase from "../../components/fase";

import stars from "../../assests/images/el-stars.png";
import starsBase from "../../assests/images/el-stars-base.png";
import planets from "../../assests/images/el-planets.png";
import astronautas from "../../assests/images/el-astronautas.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";

class Fases extends Component {
  async componentDidMount() {
    const user = this.props.auth.data.id;
    if (user === "undefined") {
      await this.props.getFasesRequest();
    } else {
      await this.props.getFasesRequest(user, this.props.history);
    }
  }

  handleFase = async fase => {
    const { logado } = this.props.auth;
    if (!logado) {
      this.props.history.push("/interligados/login");
    } else {
      const { id, token } = this.props.auth.data;
      const data = {
        usuario: id,
        token,
        fase
      };
      await this.props.getQuestRequest(data, this.props.history);
    }
  };

  render() {
    const { fases } = this.props.fases;
    const gameOver = "2032-06-05 23:59:59";
    return (
      <Fragment>
        <Container>
          <Header />
          <Wrapper>
            <div className="row">
              {this.props.fases.loading && (
                <i className="fa fa-spinner fa-pulse" />
              )}
              {fases.map(fa => (
                <Fase
                  title={fa.nome}
                  points={parseFloat(fa.pontos)}
                  incompleto={fa.data_inicio && !fa.data_fim && true}
                  gameOver={
                    compareAsc(gameOver, new Date()) == -1 ? true : false
                  }
                  onClick={() => this.handleFase(fa.id)}
                  loading={this.props.fases.loadingFase}
                  text={
                    compareAsc(fa.inicio, new Date()) == -1 && !fa.data_fim
                      ? "Jogue para fazer pontos"
                      : `Disponível em ${format(fa.inicio, "DD/MM")}`
                  }
                  status={
                    fa.data_fim
                      ? 3
                      : compareAsc(fa.inicio, new Date()) == -1
                      ? 2
                      : 1
                  }
                />
              ))}
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
const mapStateToProps = state => ({
  auth: state.auth,
  fases: state.fases
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FasesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fases);
