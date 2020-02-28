import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const sagas = [];

export const attachDynamic = (store) => {
  if (!store.attachSagas) {
    store.attachSagas = (config) => {
      let keys = Object.keys(config);
      let len = keys.length;
      while(len--) {
        const k = keys.shift();
        if (sagas.indexOf(k) < 0) {
          sagas.push(k);
          sagaMiddleware.run(config[k]);
        }
      }
    };
  }
};

export default sagaMiddleware;
