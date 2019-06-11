import update from "immutability-helper";

//TYPES

export const Types = {
  GET_FASES_REQUEST: "fases/GET_FASES_REQUEST",
  GET_FASES_SUCCESS: "fases/GET_FASES_SUCCESS",
  GET_FASES_FAILURE: "fases/GET_FASES_FAILURE",
  GET_QUEST_REQUEST: "fases/GET_QUEST_REQUEST",
  GET_QUEST_SUCCESS: "fases/GET_QUEST_SUCCESS",
  GET_QUEST_FAILURE: "fases/GET_QUEST_FAILURE",
  POST_QUEST_REQUEST: "fases/POST_QUEST_REQUEST",
  POST_QUEST_SUCCESS: "fases/POST_QUEST_SUCCESS",
  POST_QUEST_FAILURE: "fases/POST_QUEST_FAILURE",
  START_FASE_REQUEST: "fases/START_FASE_REQUEST",
  START_FASE_SUCCESS: "fases/START_FASE_SUCCESS",
  START_FASE_FAILURE: "fases/START_FASE_FAILURE"
};

// REDUCER

const INITIAL_STATE = {
  loading: false,
  fases: [],
  error: null,
  loadingFase: null,
  startFase: false,
  loadingQuest: false,
  respondido: false,
  fase: {
    perguntas: []
  }
};

export default function fases(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_FASES_REQUEST:
      return { ...state, loading: true, error: null };

    case Types.GET_FASES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fases: action.payload.data
      };

    case Types.GET_FASES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.GET_QUEST_REQUEST:
      return { ...state, loadingFase: true, error: null, startFase: false };

    case Types.GET_QUEST_SUCCESS:
      return {
        ...state,
        loadingFase: false,
        error: null,
        fase: action.payload.data
      };

    case Types.GET_QUEST_FAILURE:
      return { ...state, loadingFase: false, error: action.payload.error };

    case Types.POST_QUEST_REQUEST:
      return { ...state, loadingQuest: true, respondido: false, error: null };

    case Types.POST_QUEST_SUCCESS:
      return {
        ...state,
        loadingQuest: false,
        respondido: true,
        error: null,
        fase: {
          ...state.fase,
          perguntas: update(state.fase.perguntas, {
            [action.payload.data.indexArray]: {
              usuResposta: { $set: action.payload.data.pergunta_opcao_id }
            }
          })
        }
      };

    case Types.POST_QUEST_FAILURE:
      return {
        ...state,
        loadingQuest: false,
        respondido: false,
        error: action.payload.error
      };

    case Types.START_FASE_REQUEST:
      return { ...state, loadingFase: true, error: null };

    case Types.START_FASE_SUCCESS:
      return {
        ...state,
        loadingFase: false,
        error: null,
        startFase: true
      };

    case Types.START_FASE_FAILURE:
      return { ...state, loadingFase: false, error: action.payload.error };

    default:
      return state;
  }
}

// ACTIONS

export const Creators = {
  getFasesRequest: (user, history) => ({
    type: Types.GET_FASES_REQUEST,
    payload: { user, history }
  }),

  getFasesSuccess: data => ({
    type: Types.GET_FASES_SUCCESS,
    payload: { data }
  }),

  getFasesFailure: error => ({
    type: Types.GET_FASES_FAILURE,
    payload: { error }
  }),

  getQuestRequest: (data, history) => ({
    type: Types.GET_QUEST_REQUEST,
    payload: { data, history }
  }),

  getQuestSuccess: data => ({
    type: Types.GET_QUEST_SUCCESS,
    payload: { data }
  }),

  getQuestFailure: error => ({
    type: Types.GET_QUEST_FAILURE,
    payload: { error }
  }),

  postQuestRequest: (data, token) => ({
    type: Types.POST_QUEST_REQUEST,
    payload: { data, token }
  }),

  postQuestSuccess: data => ({
    type: Types.POST_QUEST_SUCCESS,
    payload: { data }
  }),

  postQuestFailure: error => ({
    type: Types.POST_QUEST_FAILURE,
    payload: { error }
  }),

  startFaseRequest: (data, token) => ({
    type: Types.START_FASE_REQUEST,
    payload: { data, token }
  }),

  startFaseSuccess: () => ({
    type: Types.START_FASE_SUCCESS
  }),

  startFaseFailure: error => ({
    type: Types.START_FASE_FAILURE,
    payload: { error }
  })
};
