import React, { Component } from "react";
import { connect } from "react-redux";

import { Avatar } from "./styles";

import Avatar1 from "../../assests/images/avatar/tucano.png";
import Avatar2 from "../../assests/images/avatar/peixe.png";
import Avatar3 from "../../assests/images/avatar/urso.png";
import Avatar4 from "../../assests/images/avatar/rocket.png";

class usuario extends Component {
  render() {
    let title = "";
    switch (this.props.fase) {
      case "fase1":
        title = "Fase 1";
        break;
      case "fase2":
        title = "Fase 2";
        break;
      case "fase3":
        title = "Fase 3";
        break;
      case "fase4":
        title = "Fase 4";
        break;
      default:
        title = "";
    }
    let avatar = "";
    switch (this.props.auth.data.avatar) {
      case "1":
        avatar = Avatar1;
        break;
      case "2":
        avatar = Avatar2;
        break;
      case "3":
        avatar = Avatar3;
        break;
      case "4":
        avatar = Avatar4;
        break;
      default:
        avatar = Avatar1;
    }
    return (
      <Avatar fase={this.props.fase}>
        <img src={avatar} alt="avatar" />
        <div>
          <h4>{this.props.auth.data.nome}</h4>
          <h5>{title}</h5>
        </div>
      </Avatar>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(usuario);
