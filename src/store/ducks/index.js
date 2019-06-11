import { combineReducers } from "redux";
import auth from "./auth";
import fases from "./fases";
import ranking from "./ranking";

export default combineReducers({
  auth,
  fases,
  ranking
});
