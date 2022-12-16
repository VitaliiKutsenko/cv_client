import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './indexReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './saga/index';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const configureStore = preloadState => {
  return createStore(rootReducer, preloadState, enhancer);
};

export const store = configureStore({});

sagaMiddleware.run(rootSaga);
