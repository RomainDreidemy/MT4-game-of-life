import React from 'react';
import {IButtonProps} from "../../../../interfaces/button.interface";

const Button = ( { text, onClick, isDisabled = false }: IButtonProps) => (
  <button onClick={onClick} disabled={isDisabled}>
    {text}
  </button>
);

export default Button;
