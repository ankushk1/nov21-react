import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import ReactRouter from './ReactRouter';
import { Provider } from 'react-redux';
import reduxStore from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <ReactRouter/>
      {/* <Provider store={reduxStore}>
      </Provider> */}
    </BrowserRouter>
    {/* <App /> */}
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
