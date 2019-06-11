import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { Header, Logo } from "./styles";
import Avatar from "../../components/usuario";
import Menu from "../../components/menu";
import Interligados from "../../assests/images/interligados.png";

class header extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          {this.props.auth.logado ? (
            <Avatar fase={this.props.fase} />
          ) : !this.props.main ? (
            <Logo>
              <img src={Interligados} alt="Interligados" />
            </Logo>
          ) : (
            <Logo />
          )}

          <Menu />
        </Header>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(header);
