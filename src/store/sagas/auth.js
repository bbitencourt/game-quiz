import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as AuthActions } from "../ducks/auth";

export function* loginAuth(action) {
  try {
    const history = action.payload.history;
    const postAuth = action.payload.data;
    const { data } = yield call(api.post, `/auth`, postAuth);

    if (data.success) {
      yield put(AuthActions.loginSuccess(data.data));
      history.push("/interligados/fases");
    } else {
      yield put(AuthActions.loginFailure(data.error));
    }
  } catch (err) {
    yield put(
      AuthActions.loginFailure("Ops! algo deu errado, tente novamente")
    );
  }
}
export function* addAuth(action) {
  try {
    const history = action.payload.history;
    const postAuth = action.payload.data;
    const { data } = yield call(api.post, `/cadastro`, postAuth);

    if (data.success) {
      yield put(AuthActions.addAuthSuccess());
      history.push("/interligados/login");
    } else {
      yield put(AuthActions.addAuthFailure(data.error));
    }
  } catch (err) {
    yield put(
      AuthActions.addAuthFailure("Ops! algo deu errado, tente novamente")
    );
  }
}
export function* esqueciSenha(action) {
  try {
    const history = action.payload.history;
    const postAuth = action.payload.data;
    const { data } = yield call(api.post, `/auth/esqueci`, postAuth);

    if (data.success) {
      yield put(AuthActions.esqueciSuccess());
      history.push("/interligados/login");
    } else {
      yield put(AuthActions.esqueciFailure(data.error));
    }
  } catch (err) {
    yield put(
      AuthActions.esqueciFailure("Ops! algo deu errado, tente novamente")
    );
  }
}
