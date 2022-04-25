import React from 'react';

interface IButtonProps {
  text: string
  onClick: () => void
  isDisabled?: boolean
}

const Button = ( { text, onClick, isDisabled = false }: IButtonProps) => (
  <button onClick={onClick} disabled={isDisabled}>
    {text}
  </button>
);

export default Button;
