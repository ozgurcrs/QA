import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './layout/layout'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


//https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple