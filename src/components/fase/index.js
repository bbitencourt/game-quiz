import React, { Component, Fragment } from "react";
import { Fase } from "./styles";

import check from "../../assests/images/check-button.png";

export default class fase extends Component {
  render() {
    const { title, text, points, status, incompleto, gameOver } = this.props;
    return (
      <Fragment>
        <Fase>
          <h4>{title}</h4>
          {points ? <p className="points">{points} Pontos</p> : <p>{text}</p>}
          {!gameOver ? (
            status === 1 ? (
              <button className="azul aguarde" disabled={true}>
                Aguarde
              </button>
            ) : status === 2 ? (
              <button className="azul" onClick={this.props.onClick}>
                {this.props.loading ? (
                  <i className="fa fa-spinner fa-pulse" />
                ) : incompleto ? (
                  "Continuar"
                ) : (
                  "Jogar"
                )}
              </button>
            ) : status === 3 ? (
              <button className="verde concluido" disabled={true}>
                <img src={check} /> Concluído
              </button>
            ) : (
              <button>no-status</button>
            )
          ) : (
            ""
          )}
        </Fase>
      </Fragment>
    );
  }
}
