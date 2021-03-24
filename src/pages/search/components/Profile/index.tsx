import Button from 'core/components/Button';
import React from 'react';
import './styles.scss';

const Profile = () => {

 return (
  <div className="profile-container">
    <div className="avatar-container">
      <img className="avatar" src="https://avatars.githubusercontent.com/u/31264496?v=4" width="290" alt=""/>
      <a href="https://github.com/roanrobersson">
        <Button text="Ver perfil" />
      </a>
    </div>
    <div className="info-container">
      <div className="info-profile">
        <div className="info-profile-item">
          Repositórios públicos: 62
        </div>
        <div className="info-profile-item">
          Seguidores: 127
        </div>
        <div className="info-profile-item">
          Seguindo: 416
        </div>
      </div>
      <div className="info-personal">
          <h1 className="info-personal-title">Informações</h1>
          <div className="info-personal-field">
            <span className="field-name">Empresa: </span> 
            <span className="field-text">@ZupIT</span>
          </div>
          <div className="info-personal-field">
            <span className="field-name">Website/Blog: </span> 
            <span className="field-text">https://thewashington.dev</span>
          </div>
          <div className="info-personal-field">
            <span className="field-name">Localidade: </span> 
            <span className="field-text">Uberlândia</span>
          </div>
          <div className="info-personal-field">
            <span className="field-name">Membro desde: </span> 
            <span className="field-text">19/10/2013</span>
          </div>
      </div>
    </div>
  </div>
 )
};

export default Profile; 