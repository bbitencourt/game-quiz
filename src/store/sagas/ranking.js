import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as RankingActions } from "../ducks/ranking";

export function* getRanking() {
  try {
    const { data } = yield call(api.get, `/ranking`);
    if (data.success) {
      yield put(RankingActions.getRankingSuccess(data.data));
    } else {
      yield put(RankingActions.getRankingFailure(data.error));
    }
  } catch (err) {
    yield put(
      RankingActions.getRankingFailure("Ops! algo deu errado, tente novamente")
    );
  }
}
