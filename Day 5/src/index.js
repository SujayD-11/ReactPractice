import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DemoComponent from './components/DemoComponent';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Logout from './components/Logout';

const routing = (
  <Router>

    <div style={{ textAlign: "center" }} >
      <h3>Routing implementation in React JS</h3>
      <hr />
      <Link to="/">Home</Link>  |
      <Link to="/DemoComponent">Demo Component</Link>  |
      <Link to="/Login">Login</Link>  |
      <Link to="/Logout">Logout</Link>  |
      <hr />
    </div>



    <Routes>
      <Route path="/" element={<App />} />

      <Route path="DemoComponent" element={ 
         <ProtectedRoute  returnUrl="/DemoComponent">
              <DemoComponent />
         </ProtectedRoute>  
       } />
      <Route path="/Login" element={ <Login />} />
      <Route path="/Logout" element={ <Logout />} />
    </Routes>

  </Router>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
