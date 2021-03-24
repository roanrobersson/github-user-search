import React from 'react';
import './styles.scss';

type Props = {
  text: string;
  disabled: boolean;
}

const Button = ({ text, disabled }: Props) => {
  return (
    <button className="button" disabled={disabled}>{text}</button>
  );
}

export default Button;