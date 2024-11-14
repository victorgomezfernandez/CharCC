import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import MenuBar from './components/menu_bar/MenuBar';
import WeaponSelect from './components/weapon_select/WeaponSelect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
