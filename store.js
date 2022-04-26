import { createStore, applyMiddleware } from 'redux';
import LoginReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const SagaMiddleware = createSagaMiddleware();
const storeGetUser = createStore(LoginReducer, applyMiddleware(SagaMiddleware));
SagaMiddleware.run(rootSaga);

export default storeGetUser;