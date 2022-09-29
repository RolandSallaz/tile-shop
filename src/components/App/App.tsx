import React from 'react';
import './App.css';
import { Main } from '../Main/Main';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a className='header__logo' href='#'>Goga shop</a>
        <div className='header__rightside-menu'>
           <button className='header__rightside-menu_button'>Какая то кнопка</button>
           <button className='header__rightside-menu_button'>Какая то кнопка</button>
           <button className='header__rightside-menu_button'>Какая то кнопка</button>
        </div>
      </header>
      <Main/>
      <footer className='footer'>
        <p className='footer__contacts'> Наши контакты: +793129319319 Адресс: пуджовская 8</p>
      </footer>
    </div>
  );
}

export default App;
