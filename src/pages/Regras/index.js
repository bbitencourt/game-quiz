import React, { Component, Fragment } from "react";

import { Container, Wrapper } from "./styles";

import Header from "../../components/header";
import bolhas from "../../assests/images/el-fundo-mar-1.png";
import submarino from "../../assests/images/el-fundo-mar-submarino.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";

export default class Regras extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Header logado={true} />
          <Wrapper>
            <h2>Regras</h2>
            <p className="subtitle">Confira o regulamento do jogo.</p>
            <div className="box">
              <p>
                • As equipes devem ser formadas por no mínimo 3 e no máximo 5
                participantes.
              </p>
              <p>
                • As informações contidas neste game são sigilosas e não devem
                ser disponibilizadas a terceiros.
              </p>
              <p>
                • Poderão participar apenas colaboradores da Unimed Volta
                Redonda.
              </p>
              <p>
                • Não podem participar gerentes, superintendentes, diretores e
                colaboradores ligados a Gerência de Comunicação e Marketing e
                Estratégia e Projetos
              </p>

              <p>
                • As perguntas que compõe cada fase terão pontuações diferentes:
              </p>
              <p>
                <strong>* Primeira fase:</strong> 5 pontos cada pergunta
                (Totalizando: 25 pontos)
                <br />
                <strong>* Segunda fase:</strong> 10 pontos cada pergunta
                (Totalizando 50 pontos)
                <br />
                <strong>* Terceira fase:</strong> 15 pontos cada pergunta
                (Totalizando 75 pontos)
                <br />
                <strong>* Quarta fase:</strong> 20 pontos cada pergunta
                (Totalizando 100 pontos)
                <br />
              </p>

              <p>
                • As equipes terão até 5 minutos para completar cada fase. Após
                esse tempo, poderão continuar a responder as perguntas, ganhando
                a metade do ponto.
              </p>
              <p>
                • Ponto Extra: As equipes que responderem as 5 perguntas nos
                tempos abaixo ganham uma pontuação extra de até 10 pontos:
              </p>

              <p>
                <strong>Em até 1 minuto:</strong> + 10 pontos
                <br />
                <strong>Em até 3 minutos:</strong> + 5 pontos
                <br />
                <strong>Acima de 4 minutos:</strong> Não ganha ponto extra
              </p>

              <p>
                • O jogo será divido em quatro fases. Você terá de 8h30 às 18h
                para completá-la.
              </p>
              <p>
                <strong>Fase 1 e 2 disponíveis em 03/06/2019</strong>
                <strong> – Segunda-Feira</strong>
                <br />
                <strong>Fase 3 disponível em 04/06/2019</strong>
                <strong> – Terça-Feira</strong>
                <br />
                <strong>Fase 4 disponível em 05/06/2019</strong>
                <strong> – Quarta-Feira</strong>
              </p>

              <p>
                • As equipes poderão consultar o material de apoio que estará
                disponível no portal do Colaborador a partir do dia 30/05/2019 e
                contar com o apoio dos seus gestores, basta clicar no banner na
                página inicial.
              </p>
              <p>
                • Serão classificados para a grande final, que acontecerá no
                07/06/2019 às 09h, ao vivo, as 4 (quatro) equipes com maior
                número de pontuação. No caso de empate, será classificada a
                equipe que respondeu todas as fases em menor tempo.
              </p>

              <p>
                • Premiação: Os participantes da grande final ganham os
                seguintes prêmios:
              </p>
              <p>
                <strong>1º lugar –</strong> Jantar da equipe com 1 acompanhante por pessoa no restaurante
                  Brasador
                <br />
                <strong>2º lugar –</strong> Vale compras de R$150,00 por integrante da equipe
                <br />
                <strong>3º lugar –</strong> Ingressos para cinema com acompanhante no ParkSul, Sala Vip +
                  pipoca e refrigerante
              </p>

              <p>• As datas e horários podem sofrer alterações.</p>
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
