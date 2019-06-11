import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import { Nav } from "./styles";
import close from "../../assests/images/close.svg";

class menu extends Component {
  handleLogout = async () => {
    await this.props.logoutAuth();
    this.props.history.push("/interligados");
  };

  render() {
    return (
      <Nav>
        <li>
          <Link to="/interligados/">Início</Link>
        </li>
        <li>
          <Link to="/interligados/fases">Fases</Link>
        </li>
        <li>
          <Link to="/interligados/premio">Prêmio</Link>
        </li>
        <li>
          <Link to="/interligados/ranking">Ranking</Link>
        </li>
        <li>
          <Link to="/interligados/regras">Regras</Link>
        </li>
        {this.props.auth.logado && (
          <li className="logout">
            <img src={close} alt="Finalizar" />
            <Link onClick={this.handleLogout}>Finalizar</Link>
          </li>
        )}
      </Nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(menu)
);
