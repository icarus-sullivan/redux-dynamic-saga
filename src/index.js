import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const sagas = {};

export const attachDynamic = (store) => {
  if (!store.attachSagas) {
    store.attachSagas = (config) => {
      let keys = Object.keys(config);
      let len = keys.length;
      while(len--) {
        var k = keys.shift();
        var v = config[k];
        if (!sagas[k]) {
          sagas[k] = 1;
          sagaMiddleware.run(v);
        }
      }
    };
  }
};

export default sagaMiddleware;
