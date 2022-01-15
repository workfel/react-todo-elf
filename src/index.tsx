import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import TodoContext from './infrastructure/todo.context.provider';
import { TodoRepositoryElf } from './repository/todo.repository';

ReactDOM.render(
  <React.StrictMode>
    <TodoContext.Provider value={{ repository: new TodoRepositoryElf() }}>
      <App/>
    </TodoContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
