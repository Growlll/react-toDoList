import React from 'react';

const Button = ({onClick, value, activeTab}) => {
  return (
    <button type='button'
            className={`btn ${value.toLowerCase() === activeTab ? ' btn-info' : ' btn-outline-secondary'}`}
            onClick={onClick}>
      {value}
    </button>
  )
}

export default Button;
