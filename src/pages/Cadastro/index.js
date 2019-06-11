import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import { Container, Wrapper } from "./styles";
import { Form, Input } from "@rocketseat/unform";

import Header from "../../components/header";
import bolhas from "../../assests/images/el-fundo-mar-1.png";
import submarino from "../../assests/images/el-fundo-mar-submarino.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";
import Avatar1 from "../../assests/images/avatar/tucano.png";
import Avatar2 from "../../assests/images/avatar/peixe.png";
import Avatar3 from "../../assests/images/avatar/urso.png";
import Avatar4 from "../../assests/images/avatar/rocket.png";
import check from "../../assests/images/icon-check.png";

import * as yup from "yup";

const schemaE1 = yup.object().shape({
  membro1: yup.string().required("Campo obrigatório"),
  setor1: yup.string().required("Campo obrigatório"),
  membro2: yup.string().required("Campo obrigatório"),
  setor2: yup.string().required("Campo obrigatório"),
  membro3: yup.string().required("Campo obrigatório"),
  setor3: yup.string().required("Campo obrigatório"),
  membro4: yup.string(),
  setor4: yup.string(),
  membro5: yup.string(),
  setor5: yup.string()
});
const schemaE2 = yup.object().shape({
  equipe: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("E-mail obrigatório"),
  senha: yup.string().required("Senha obrigatório")
});

class Cadastro extends Component {
  state = {
    etapa: 1,
    avatar: 1,
    membros: [],
    equipe: null,
    email: null,
    senha: null
  };

  componentDidMount() {
    this.props.logoutAuth();
  }

  handleEtapaUm = async data => {
    await this.setState({
      membros: [
        ...this.state.membros,
        {
          nome: data.membro1,
          setor: data.setor1
        },
        {
          nome: data.membro2,
          setor: data.setor2
        },
        {
          nome: data.membro3,
          setor: data.setor3
        },
        {
          nome: data.membro4,
          setor: data.setor4
        },
        {
          nome: data.membro5,
          setor: data.setor5
        }
      ],
      etapa: 2
    });
  };

  handleSubmit = () => {
    const data = {
      email: this.state.email,
      nome: this.state.equipe,
      senha: this.state.senha,
      avatar: this.state.avatar,
      membros: this.state.membros
    };
    this.props.addAuthRequest(data, this.props.history);
  };

  handleEtapaDois = async data => {
    await this.setState({
      equipe: data.equipe,
      email: data.email,
      senha: data.senha,
      etapa: 3
    });
  };

  handleChangeEtapa = etapa => {
    this.setState({
      etapa
    });
  };

  handleChangeAvatar = avatar => {
    this.setState({
      avatar
    });
  };

  render() {
    const { etapa } = this.state;
    return (
      <Fragment>
        <Container>
          <Header logado={false} />
          <Wrapper>
            <div>
              <h2>
                {etapa === 1
                  ? "Cadastrar Equipe"
                  : etapa === 2
                  ? "Dados da Equipe"
                  : "Avatar da Equipe"}
              </h2>
              <p>
                {etapa === 1
                  ? "As equipes devem ser formadas por no mínimo 3 e no máximo 5 participantes."
                  : etapa === 2
                  ? "Dê um nome para sua equipe, cadastre um e-mail de acesso (pode ser de qualquer um dos membros da equipe) e uma senha:"
                  : "Escolha um avatar para sua equipe:"}
              </p>
              <div className={etapa == 1 ? "etapa" : "etapa hidden"}>
                <Form schema={schemaE1} onSubmit={this.handleEtapaUm}>
                  <div className="row">
                    <div className="column first">
                      <Input
                        name="membro1"
                        label="Membro 1"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="column">
                      <Input
                        name="setor1"
                        label="Setor"
                        placeholder="Nome do setor"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="column first">
                      <Input
                        name="membro2"
                        label="Membro 2"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="column">
                      <Input
                        name="setor2"
                        label="Setor"
                        placeholder="Nome do setor"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="column first">
                      <Input
                        name="membro3"
                        label="Membro 3"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="column">
                      <Input
                        name="setor3"
                        label="Setor"
                        placeholder="Nome do setor"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="column first">
                      <Input
                        name="membro4"
                        label="Membro 4"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="column">
                      <Input
                        name="setor4"
                        label="Setor"
                        placeholder="Nome do setor"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="column first">
                      <Input
                        name="membro5"
                        label="Membro 5"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div className="column">
                      <Input
                        name="setor5"
                        label="Setor"
                        placeholder="Nome do setor"
                      />
                    </div>
                  </div>

                  <div className="row center">
                    <button type="submit" className="azul">
                      Continuar
                    </button>
                  </div>
                </Form>
              </div>
              <div className={etapa == 2 ? "etapa" : "etapa hidden"}>
                <Form schema={schemaE2} onSubmit={this.handleEtapaDois}>
                  <Input
                    name="equipe"
                    label="Nome da equipe"
                    placeholder="Digite aqui"
                  />
                  <Input
                    name="email"
                    label="E-mail da equipe"
                    placeholder="Digite aqui"
                  />
                  <Input
                    type="password"
                    name="senha"
                    label="Senha de acesso"
                    placeholder="Digite aqui"
                  />
                  <div className="row center actions">
                    <button
                      className="verde"
                      onClick={() => this.handleChangeEtapa(1)}
                    >
                      Voltar
                    </button>
                    <button type="submit" className="azul">
                      Continuar
                    </button>
                  </div>
                </Form>
              </div>
              <div className={etapa == 3 ? "etapa" : "etapa hidden"}>
                <Form onSubmit={() => {}}>
                  <div className="row center">
                    <button
                      className="avatar"
                      onClick={() => this.handleChangeAvatar(1)}
                    >
                      <span
                        className={this.state.avatar === 1 ? "selected" : ""}
                      >
                        <img className="check" src={check} alt="Check" />
                      </span>

                      <img src={Avatar1} alt="Tucano" />
                    </button>
                    <button
                      className="avatar"
                      onClick={() => this.handleChangeAvatar(2)}
                    >
                      <span
                        className={this.state.avatar === 2 ? "selected" : ""}
                      >
                        <img className="check" src={check} alt="Check" />
                      </span>

                      <img src={Avatar2} alt="Peixe" />
                    </button>
                    <button
                      className="avatar"
                      onClick={() => this.handleChangeAvatar(3)}
                    >
                      <span
                        className={this.state.avatar === 3 ? "selected" : ""}
                      >
                        <img className="check" src={check} alt="Check" />
                      </span>

                      <img src={Avatar3} alt="Urso" />
                    </button>
                    <button
                      className="avatar"
                      onClick={() => this.handleChangeAvatar(4)}
                    >
                      <span
                        className={this.state.avatar === 4 ? "selected" : ""}
                      >
                        <img className="check" src={check} alt="Check" />
                      </span>

                      <img src={Avatar4} alt="Rocket" />
                    </button>
                  </div>
                  <div className="row center actions">
                    <button
                      className="verde"
                      onClick={() => this.handleChangeEtapa(2)}
                    >
                      Voltar
                    </button>
                    <button
                      className="azul"
                      onClick={this.handleSubmit}
                      disabled={this.props.auth.loading ? true : false}
                    >
                      {this.props.auth.loading ? (
                        <i className="fa fa-spinner fa-pulse" />
                      ) : (
                        "Concluir e Jogar!"
                      )}
                    </button>
                  </div>
                  {this.props.auth.error && (
                    <div className="error">
                      <span>
                        <i class="fa fa-exclamation-circle" />
                        {this.props.auth.error}
                      </span>
                    </div>
                  )}
                </Form>
              </div>
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
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cadastro);
