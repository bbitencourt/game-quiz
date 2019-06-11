import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as FasesActions } from "../ducks/fases";

export function* getFases(action) {
  try {
    const usuario = action.payload.user;

    const endPoint = usuario ? `/fases/${usuario}` : `/fases`;

    const { data } = yield call(api.get, endPoint);

    if (data.success) {
      yield put(FasesActions.getFasesSuccess(data.data));
    } else {
      yield put(FasesActions.getFasesFailure(data.error));
    }
  } catch (err) {
    yield put(
      FasesActions.getFasesFailure("Ops! algo deu errado, tente novamente")
    );
  }
}

export function* getQuestions(action) {
  try {
    const history = action.payload.history;
    const { usuario, token, fase } = action.payload.data;

    const { data } = yield call(api.get, `/fases/${fase}/${usuario}`, token);

    if (data.success) {
      yield put(FasesActions.getQuestSuccess(data.data));
      history.push("/interligados/fase");
    } else {
      yield put(FasesActions.getQuestFailure(data.error));
    }
  } catch (err) {
    yield put(
      FasesActions.getQuestFailure("Ops! algo deu errado, tente novamente")
    );
  }
}

export function* postQuestions(action) {
  try {
    const token = action.payload.token;
    const { equipe_id, pergunta_id, pergunta_opcao_id } = action.payload.data;
    const postQuest = {
      equipe_id,
      pergunta_id,
      pergunta_opcao_id
    };

    const { data } = yield call(api.post, `/resposta`, postQuest, token);

    if (data.success) {
      const successData = action.payload.data;
      yield put(FasesActions.postQuestSuccess(successData));
    } else {
      yield put(FasesActions.postQuestFailure(data.error));
    }
  } catch (err) {
    yield put(
      FasesActions.postQuestFailure("Ops! algo deu errado, tente novamente")
    );
  }
}

export function* startFase(action) {
  try {
    const token = action.payload.token;
    const postQuest = action.payload.data;
    const { data } = yield call(api.post, `/fases/inicio`, postQuest, token);

    if (data.success) {
      yield put(FasesActions.startFaseSuccess());
    } else {
      yield put(FasesActions.startFaseFailure(data.error));
    }
  } catch (err) {
    yield put(
      FasesActions.startFaseFailure("Ops! algo deu errado, tente novamente")
    );
  }
}
