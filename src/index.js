import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const attachDynamic = (store) => {
  const sagas = {};

  if (!store.attachSagas) {
    store.attachSagas = (config) => {
      let keys = Object.keys(config);
      let len = keys.length;
      while(len--) {
        const k = keys.shift();
        if (!sagas[k]) {
          sagas[k] = true;
          sagaMiddleware.run(config[k]);
        }
      }
    };
  }
};

export default sagaMiddleware;
