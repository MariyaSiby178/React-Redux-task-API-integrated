import * as Type from "../../Type/Type";
const initialState = {
  details: [],
  obj: null,
  editObj: null,
};

const ReducerSaga = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case Type.GET_REQUEST:
      return {
        ...state,
        obj: null,
      };
    case Type.GET_SUCCESS:
      return {
        ...state,
        details: action.payload,
        obj: null,
      };
    case Type.GET_FAILED:
      return {
        ...state,
      };
    case Type.POST_REQUEST:
      return {
        ...state,
      };
    case Type.POST_SUCCESS:
      return {
        ...state,
        details: [...state.details, action.payload],
        obj: action.payload,
      };
    case Type.POST_FAILED:
      return {
        ...state,
      };
    case Type.GET_ID_REQUEST:
      return {
        ...state,
      };
    case Type.GET_ID_SUCCESS:
      return {
        ...state,
        editObj: action.payload,
      };
    case Type.GET_ID_FAILED:
      return {
        ...state,
      };
    case Type.DELETE_REQUEST:
      return {
        ...state,
        obj: null,
      };
    case Type.DELETE_SUCCESS:
      return {
        ...state,
        details: state.details.filter((item) => item.id !== action.payload),
        obj: null,
      };
    case Type.DELETE_FAILED:
      return {
        ...state,
      };
    case Type.PUT_REQUEST:
      return {
        ...state,
      };
    case Type.PUT_SUCCESS:
      return {
        ...state,
        details: state.details.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case Type.PUT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default ReducerSaga;
