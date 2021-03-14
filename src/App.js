import React from 'react';
import './App.css';
import Todo from './components/Todo';
import SearchBar from './components/SearchBar';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo fetch from json</h1>
        <Todo />
      </div>
    </Provider>
  )
}

export default App;
