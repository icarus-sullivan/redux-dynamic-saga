![npm downloads total](https://img.shields.io/npm/dt/redux-dynamic-saga.svg) ![npm version](https://img.shields.io/npm/v/redux-dynamic-saga.svg) ![npm license](https://img.shields.io/npm/l/redux-dynamic-saga.svg)

# redux-dynamic-saga
A redux middleware that allows dynamic saga injection at runtime.

### Installation
```
npm install --save redux-dynamic-saga
```
or
```
yarn add redux-dynamic-saga
```

### Usage
Middleware:
```javascript
import { applyMiddleware, compose } from 'redux';
import sagaMiddleware, { attachDynamic } from 'redux-dynamic-saga';

const store = createStore(
  () => ({}), // root reducer
  {}, // initial state
  applyMiddleware(sagaMiddleware),
);

attachDynamic(store);

return store;
```

Dynamic Saga:
```javascript
import store from 'store/location/index'
import { put, takeLatest } from 'redux-saga/effects';

function* handleGreeting() {
  yield put({ type: 'GREETING', payload: 'hi' });
}

function* saga() {
  yield takeLatest('HELLO', hanldeGreeting);
}

store.attachSagas({
  unique: saga
});
```

### Changelog

**0.0.1**
- Initial published version
    