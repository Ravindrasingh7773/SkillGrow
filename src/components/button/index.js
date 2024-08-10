import React from 'react';
import styles from './style.module.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button 
      type={type} 
      className={`${styles.btn} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
