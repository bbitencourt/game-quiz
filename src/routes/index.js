import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Fases from "../pages/Fases";
import Premio from "../pages/Premio";
import Ranking from "../pages/Ranking";
import Regras from "../pages/Regras";
import Fase from "../pages/Fase";
import Esqueci from "../pages/Esqueci";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/interligados" exact component={Main} />
        <Route path="/interligados/cadastro" exact component={Cadastro} />
        <Route path="/interligados/login" exact component={Login} />
        <Route path="/interligados/fases" exact component={Fases} />
        <Route path="/interligados/premio" exact component={Premio} />
        <Route path="/interligados/ranking" exact component={Ranking} />
        <Route path="/interligados/regras" exact component={Regras} />
        <Route path="/interligados/fase" exact component={Fase} />
        <Route path="/interligados/esqueci" exact component={Esqueci} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
