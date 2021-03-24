import Button from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1 className="text-title">
        Desafio do Capítulo 3,<br/>
        Bootcamp DevSuperior
      </h1>
      <div className="text">
        <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
        <p>Favor observar as intruções passadas no capítulo sobre a elaboração deste projeto.</p>
        <p>
          Este design foi adaptado a partir de Ant Design System 
          for Figma, de Mateusz Wierzbicki: <span className="email">antforfigma@gmail.com</span> 
        </p>
      </div>
        <Link to="/search">
          <Button text="Começar" disabled={false}/>
        </Link>
    </div>
  </div>
);

export default Home