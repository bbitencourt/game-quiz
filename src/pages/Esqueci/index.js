import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import * as yup from "yup";

import { Container, Wrapper } from "./styles";
import Header from "../../components/header";
import stars from "../../assests/images/el-stars.png";
import planets from "../../assests/images/el-planets.png";
import astronautas from "../../assests/images/el-astronautas.png";
import Unimed30 from "../../assests/images/unimed-30anos.png";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("E-mail obrigatório")
});

class Esqueci extends Component {
  handleSubmit = async data => {
    await this.props.esqueciRequest(data, this.props.history);
  };
  render() {
    return (
      <Fragment>
        <Container>
          <Header logado={false} />
          <Wrapper>
            <h2>Esqueci minha senha</h2>
            <p>Digite o e-mail da sua equipe que enviaremos uma nova senha.</p>
            <Form schema={schema} onSubmit={this.handleSubmit}>
              <Input
                name="email"
                label="E-mail da Equipe"
                placeholder="Digite aqui"
              />
              {!!this.props.auth.error && (
                <span className="error">{this.props.auth.error}</span>
              )}
              <div className="row">
                <button
                  type="submit"
                  className="azul"
                  disabled={this.props.auth.loading ? true : false}
                >
                  {this.props.auth.loading ? (
                    <i className="fa fa-spinner fa-pulse" />
                  ) : (
                    "Enviar"
                  )}
                </button>
                <Link to="/interligados/login">
                  <button className="verde">Voltar</button>
                </Link>
              </div>
            </Form>
          </Wrapper>
          <img className="unimed" src={Unimed30} alt="Unimed 30 anos" />
          <img className="stars" src={stars} alt="estrelas" />
          <img className="planets" src={planets} alt="Planetas" />
          <img className="astronautas" src={astronautas} alt="Astronautas" />
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
)(Esqueci);
