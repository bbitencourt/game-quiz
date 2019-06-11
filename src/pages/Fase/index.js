import React, { Component, Fragment } from "react";
import {
  format,
  addSeconds,
  addMinutes,
  compareAsc,
  differenceInSeconds
} from "date-fns";

import Sound from "react-sound";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FasesActions } from "../../store/ducks/fases";

import { Container, Wrapper } from "./styles";
import Header from "../../components/header";

import nuvem from "../../assests/images/fase1/el-nuvem.png";
import balao from "../../assests/images/fase1/el-balao.png";
import montanha from "../../assests/images/fase1/el-montanha.png";

import submarino from "../../assests/images/el-fundo-mar-submarino.png";
import polvo from "../../assests/images/fase2/el-polvo.png";
import mar from "../../assests/images/fase2/el-mar.png";

import gelo from "../../assests/images/fase3/el-gelo.png";
import passaro from "../../assests/images/fase3/el-passaro.png";
import nuvemPassaro from "../../assests/images/fase3/el-nuvens-passaro.png";

import stars from "../../assests/images/el-stars.png";
import starsBase from "../../assests/images/el-stars-base.png";
import planets from "../../assests/images/el-planets.png";
import astronautas from "../../assests/images/el-astronautas.png";

import Unimed30 from "../../assests/images/unimed-30anos.png";
import Music1 from "../../assests/music/bgm_action_1.mp3";
import Music2 from "../../assests/music/bgm_action_2.mp3";
import Music3 from "../../assests/music/bgm_action_3.mp3";
import Music4 from "../../assests/music/bgm_action_4.mp3";

class Fase extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
  }
  state = {
    time: 300,
    over: false,
    fase: 1,
    indexArray: 0,
    perguntas: [],
    musicPlay: Sound.status.STOP,
    SoundError: Sound.status.STOP,
    SoundOk: Sound.status.STOP
  };

  componentDidUpdate() {
    const fim = this.props.fases.fase.perguntas.findIndex(
      p => p.usuResposta == null
    );
    fim === -1 && this.props.history.push("/interligados/fases");
  }
  async componentDidMount() {
    if (!this.props.fases.fase.id) {
      this.props.history.push("/interligados/fases");
    }

    const inicioFase = this.props.fases.fase.data_inicio;

    if (inicioFase) {
      const newTimer = await addMinutes(inicioFase, 5);
      const compara = await compareAsc(newTimer, new Date());

      compara === -1 && (await this.setState({ time: 0 }));

      compara === 1 &&
        (await this.setState({
          time: differenceInSeconds(newTimer, new Date())
        }));
    }

    this.timer = setInterval(this.tick, 1000);
  }
  tick() {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      clearInterval(this.timer);
      this.setState({ over: true });
    }
  }

  handleStart = async () => {
    if (!this.props.fases.fase.data_inicio) {
      const data = {
        equipe_id: this.props.auth.data.id,
        fase_id: this.props.fases.fase.id
      };
      const token = this.props.auth.data.token;
      await this.props.startFaseRequest(data, token);
      await this.setState({ musicPlay: Sound.status.PLAYING });
    } else {
      await this.props.startFaseSuccess();
      await this.setState({ musicPlay: Sound.status.PLAYING });
    }
  };

  handleProximaPergunta = async () => {
    const i = this.state.indexArray;
    const numP = this.props.fases.fase.perguntas.length - 1;
    if (i < numP) {
      await this.setState({ indexArray: i + 1 });
    } else if (i >= numP) {
      await this.setState({ indexArray: i });
    }
  };

  handleAnteriorPergunta = async () => {
    const i = this.state.indexArray;
    if (i !== 0) {
      await this.setState({ indexArray: i - 1 });
    } else if (i === 0) {
      await this.setState({ indexArray: 0 });
    }
  };

  handleResposta = async (index, resposta) => {
    const data = {
      equipe_id: this.props.auth.data.id,
      pergunta_id: this.props.fases.fase.perguntas[index].id,
      pergunta_opcao_id: resposta,
      indexArray: index
    };

    const token = this.props.auth.data.token;
    await this.props.postQuestRequest(data, token);
  };

  render() {
    let currentFase = null;
    let Music = Music1;
    const { indexArray, time } = this.state;
    const { perguntas, id } = this.props.fases.fase;
    switch (id) {
      case "1":
        currentFase = "fase1";
        Music = Music1;
        break;
      case "2":
        currentFase = "fase2";
        Music = Music2;
        break;
      case "3":
        currentFase = "fase3";
        Music = Music3;
        break;
      case "4":
        currentFase = "fase4";
        Music = Music4;
        break;
      default:
        currentFase = "";
        Music = Music1;
    }

    return (
      <Fragment>
        <Sound url={Music} playStatus={this.state.musicPlay} loop volume={30} />
        <Container className={currentFase}>
          <Header fase={currentFase} />

          <Wrapper
            className={
              this.props.fases.startFase
                ? `hidden ${currentFase}`
                : `${currentFase} inicio`
            }
          >
            <h1 className="start">{this.props.fases.fase.nome}</h1>
            <p>{this.props.fases.fase.descr}</p>
            <button className="comecar" onClick={this.handleStart}>
              {this.props.fases.loadingFase ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                "Começar"
              )}
            </button>
          </Wrapper>
          {this.props.fases.fase.perguntas.length > 0 && (
            <Wrapper
              className={
                !this.props.fases.startFase
                  ? `hidden ${currentFase}`
                  : currentFase
              }
            >
              <small>Tempo restante:</small>
              <h6>
                {this.state.over
                  ? "Seu tempo bônus acabou"
                  : format(addSeconds(new Date(0), time), "mm:ss")}
              </h6>
              <div className="pergunta">
                <h1>{perguntas[indexArray].pergunta}</h1>
                <div className="respostas">
                  <ul>
                    {perguntas[indexArray].opcoes.map(op => (
                      <li key={op.id}>
                        <button
                          disabled={
                            !!perguntas[indexArray].usuResposta ||
                            this.props.fases.loadingQuest
                          }
                          onClick={() => this.handleResposta(indexArray, op.id)}
                          className={
                            perguntas[indexArray].usuResposta ==
                              perguntas[indexArray].respCorreta &&
                            perguntas[indexArray].respCorreta == op.id
                              ? "option certo"
                              : perguntas[indexArray].usuResposta !=
                                  perguntas[indexArray].respCorreta &&
                                perguntas[indexArray].usuResposta == op.id
                              ? "option erro"
                              : perguntas[indexArray].usuResposta &&
                                perguntas[indexArray].respCorreta == op.id
                              ? "option certo"
                              : "option"
                          }
                        >
                          {op.indice}
                        </button>
                        <button
                          className={
                            perguntas[indexArray].usuResposta ==
                              perguntas[indexArray].respCorreta &&
                            perguntas[indexArray].respCorreta == op.id
                              ? "certo opcoes respondido"
                              : perguntas[indexArray].usuResposta !=
                                  perguntas[indexArray].respCorreta &&
                                perguntas[indexArray].usuResposta == op.id
                              ? "erro opcoes respondido"
                              : perguntas[indexArray].usuResposta &&
                                perguntas[indexArray].respCorreta == op.id
                              ? "certo opcoes respondido"
                              : perguntas[indexArray].usuResposta
                              ? "opcoes respondido"
                              : "opcoes"
                          }
                          disabled={
                            !!perguntas[indexArray].usuResposta ||
                            this.props.fases.loadingQuest
                          }
                          onClick={() => this.handleResposta(indexArray, op.id)}
                        >
                          {op.resp}
                        </button>
                      </li>
                    ))}
                  </ul>
                  {this.props.fases.error && (
                    <div className="error">
                      <span>
                        <i class="fa fa-exclamation-circle" />
                        {this.props.fases.error}
                      </span>
                    </div>
                  )}
                </div>
                <div className="row">
                  <button
                    className="verde"
                    disabled={this.props.fases.loadingQuest}
                    onClick={this.handleAnteriorPergunta}
                  >
                    {this.props.fases.loadingQuest ? (
                      <i className="fa fa-spinner fa-pulse" />
                    ) : (
                      "Anterior"
                    )}
                  </button>
                  <button
                    className="azul"
                    disabled={this.props.fases.loadingQuest}
                    onClick={this.handleProximaPergunta}
                  >
                    {this.props.fases.loadingQuest ? (
                      <i className="fa fa-spinner fa-pulse" />
                    ) : (
                      "Próximo"
                    )}
                  </button>
                </div>
              </div>
            </Wrapper>
          )}

          {/* Fase1 */}
          <img className="el nuvem" src={nuvem} alt="Nuvens" />
          <img className="el balao" src={balao} alt="Balão" />
          <img className="el montanha" src={montanha} alt="Montanha" />
          {/* Fase2 */}
          <img className="el mar" src={mar} alt="Mar" />
          <img className="el submarino" src={submarino} alt="Submarino" />
          <img className="el polvo" src={polvo} alt="Polvo" />
          {/* Fase3 */}
          <img className="el gelo" src={gelo} alt="Gelo" />
          <img className="el passaro" src={passaro} alt="Passaro" />
          <img className="el nuvemPassaro" src={nuvemPassaro} alt="Nuvem" />
          {/* Fase 4 */}
          <img className="el stars" src={stars} alt="estrelas" />
          <img className="el starsBase" src={starsBase} alt="estrelas" />
          <img className="el planets" src={planets} alt="Planetas" />
          <img className="el astronautas" src={astronautas} alt="Astronautas" />

          <img className="unimed" src={Unimed30} alt="Unimed 30 anos" />
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
)(Fase);
