import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducer";
import rootSaga from "./Saga";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
saga.run(rootSaga);
