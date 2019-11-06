import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Array from './components/Array';
import array from './reducers/array';

const store = createStore(
  array,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const rootEl = document.getElementById('root');

const addEntry = () => {
  return {
    type: 'ADD', 
    payload: {
      id: Math.floor(Math.random() * 20000), 
      name: Math.floor(Math.random() * 20000)
    }
  };
}

const render = () => {
  ReactDOM.render(
    <Array
      value={store.getState()}
      onAdd={() => store.dispatch(addEntry())}
      onUpdate={(data) => store.dispatch({ type: 'UPDATE', payload: data })}
    />,
    rootEl,
  );
};
render();
store.subscribe(render);
