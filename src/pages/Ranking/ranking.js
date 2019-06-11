import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RankingActions } from "../../store/ducks/ranking";

import { Container, Wrapper } from "./styles";

import Header from "../../components/header";
import bolhas from "../../assests/images/el-fundo-mar-1.png";
import submarino from "../../assests/images/el-fundo-mar-submarino.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";
import Avatar1 from "../../assests/images/avatar/tucano.png";
import Avatar2 from "../../assests/images/avatar/peixe.png";
import Avatar3 from "../../assests/images/avatar/urso.png";
import Avatar4 from "../../assests/images/avatar/rocket.png";

class RankingTemp extends Component {
  async componentDidMount() {
    await this.props.getRankingRequest();
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Header logado={true} />
          <Wrapper>
            <h2>Acompanhe o nosso placar</h2>
            <div className="box">
              {this.props.ranking.loading && (
                <i className="fa fa-spinner fa-pulse" />
              )}
              <ul>
                {this.props.ranking.data
                  .filter(f => f.desqualificado == 0)
                  .map(r => (
                    <li key={Math.random(8)}>
                      <div className="line">
                        <div className="avatar">
                          <img
                            src={
                              r.avatar == "1"
                                ? Avatar1
                                : r.avatar == "2"
                                ? Avatar2
                                : r.avatar == "3"
                                ? Avatar3
                                : Avatar4
                            }
                            alt="Avatar"
                          />
                          <p>{r.nome}</p>
                        </div>
                        <div className="fases">
                          <p>{r.fases_concluidas} Fases</p>
                        </div>
                        <div className="pontos">
                          <p>{r.pontos} pontos</p>
                        </div>
                        <div className="tempo">
                          <p>{r.tempo_conclusao}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <h2 className="desqualificadas">Equipes desqualificadas</h2>
            <div className="box">
              {this.props.ranking.loading && (
                <i className="fa fa-spinner fa-pulse" />
              )}
              <ul>
                {this.props.ranking.data
                  .filter(f => f.desqualificado == 1)
                  .map(r => (
                    <li key={Math.random(8)}>
                      <div className="line">
                        <div className="avatar">
                          <img
                            src={
                              r.avatar == "1"
                                ? Avatar1
                                : r.avatar == "2"
                                ? Avatar2
                                : r.avatar == "3"
                                ? Avatar3
                                : Avatar4
                            }
                            alt="Avatar"
                          />
                          <p>{r.nome}</p>
                        </div>
                        <div className="fases">
                          <p>{r.fases_concluidas} Fases</p>
                        </div>
                        <div className="pontos">
                          <p>{r.pontos} pontos</p>
                        </div>
                        <div className="tempo">
                          <p>{r.tempo_conclusao}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </Wrapper>
          <img className="unimed" src={Unimed30} alt="Unimed 30 anos" />
          <img className="bolhas" src={bolhas} alt="Fundo do mar" />
          <img className="submarino" src={submarino} alt="Submarino" />
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  ranking: state.ranking
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RankingActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankingTemp);
