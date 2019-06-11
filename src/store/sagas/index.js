import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth";
import { loginAuth, addAuth, esqueciSenha } from "./auth";

import { Types as FasesTypes } from "../ducks/fases";
import { getFases, getQuestions, postQuestions, startFase } from "./fases";

import { Types as RankingTypes } from "../ducks/ranking";
import { getRanking } from "./ranking";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginAuth),
    takeLatest(AuthTypes.ADD_REQUEST, addAuth),
    takeLatest(AuthTypes.ESQUECI_REQUEST, esqueciSenha),
    takeLatest(FasesTypes.GET_FASES_REQUEST, getFases),
    takeLatest(FasesTypes.GET_QUEST_REQUEST, getQuestions),
    takeLatest(FasesTypes.POST_QUEST_REQUEST, postQuestions),
    takeLatest(FasesTypes.START_FASE_REQUEST, startFase),
    takeLatest(RankingTypes.GET_REQUEST, getRanking)
  ]);
}
