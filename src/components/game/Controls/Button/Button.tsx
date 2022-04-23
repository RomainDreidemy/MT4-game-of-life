import React from 'react';

interface IButtonProps {
  text: string
  onClick: () => void
}

const Button = ( { text, onClick }: IButtonProps) => (
  <button onClick={onClick}>
    {text}
  </button>
);

export default Button;
