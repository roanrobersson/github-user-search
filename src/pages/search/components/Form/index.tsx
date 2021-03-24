import Button from 'core/components/Button';
import React from 'react';
import './styles.scss';

const Form = () => {
 return (
   <div className="form-container">
     <h1 className="form-title">Encontre um perfil Github</h1>
      <input 
        className="form-input" 
        type="text" 
        placeholder="Usuário Github"
        maxLength={45}
      />
      <Button text="Encontrar"/>
   </div>
 )
};

export default Form;