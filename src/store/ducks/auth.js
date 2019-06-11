//TYPES

export const Types = {
  LOGIN_REQUEST: "auth/LOGIN_REQUEST",
  LOGIN_SUCCESS: "auth/LOGIN_SUCCESS",
  LOGIN_FAILURE: "auth/LOGIN_FAILURE",
  LOGOUT_REQUEST: "auth/LOGOUT_REQUEST",
  ADD_REQUEST: "auth/ADD_REQUEST",
  ADD_SUCCESS: "auth/ADD_SUCCESS",
  ADD_FAILURE: "auth/ADD_FAILURE",
  ESQUECI_REQUEST: "auth/ESQUECI_REQUEST",
  ESQUECI_SUCCESS: "auth/ESQUECI_SUCCESS",
  ESQUECI_FAILURE: "auth/ESQUECI_FAILURE"
};

// REDUCER

const INITIAL_STATE = {
  loading: false,
  data: {},
  error: null,
  logado: false,
  novaSenha: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        logado: true,
        novaSenha: false,
        data: action.payload.data
      };

    case Types.LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.LOGOUT_REQUEST:
      return INITIAL_STATE;

    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };

    case Types.ESQUECI_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ESQUECI_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        novaSenha: true
      };
    case Types.ESQUECI_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        novaSenha: false
      };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

// ACTIONS

export const Creators = {
  loginRequest: (data, history) => ({
    type: Types.LOGIN_REQUEST,
    payload: { data, history }
  }),

  loginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data }
  }),

  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  }),

  logoutAuth: () => ({
    type: Types.LOGOUT_REQUEST
  }),

  addAuthRequest: (data, history) => ({
    type: Types.ADD_REQUEST,
    payload: { data, history }
  }),

  addAuthSuccess: () => ({
    type: Types.ADD_SUCCESS
  }),

  addAuthFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  esqueciRequest: (data, history) => ({
    type: Types.ESQUECI_REQUEST,
    payload: { data, history }
  }),

  esqueciSuccess: () => ({
    type: Types.ESQUECI_SUCCESS
  }),

  esqueciFailure: error => ({
    type: Types.ESQUECI_FAILURE,
    payload: { error }
  })
};
