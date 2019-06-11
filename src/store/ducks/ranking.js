//TYPES

export const Types = {
  GET_REQUEST: "ranking/GET_REQUEST",
  GET_SUCCESS: "ranking/GET_SUCCESS",
  GET_FAILURE: "ranking/GET_FAILURE"
};

// REDUCER

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function ranking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, error: null };
      
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      };

    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

// ACTIONS

export const Creators = {
  getRankingRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getRankingSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getRankingFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  })
};
