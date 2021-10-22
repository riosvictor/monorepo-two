import React from 'react';
import InputStyled from './style'

function Input(props) {
  return <InputStyled {...props} data-testid="custom-input"/>;
}
 
export default Input;