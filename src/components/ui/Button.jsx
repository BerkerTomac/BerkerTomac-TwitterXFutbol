import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

export const Button = ({
    type = 'button', 
    onClick, 
    className = '', 
    disabled = false, 
    children, 
    variant = 'ui', // Default to 'ui'
    ...props 
  }) => {
    // Determine the appropriate base class
    const baseClass = variant === 'option' ? 'option-button' : 'ui-button';
  
    // Handle selected state for option buttons
    const selectedClass = props.selected ? 'selected' : '';
  
    // Combine classes
    const buttonClass = `${baseClass} ${className} ${selectedClass} ${disabled ? 'disabled' : ''}`.trim();
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClass}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  };
  
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['ui', 'option']),
  selected: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  variant: 'ui',
  selected: false
};
  
export default Button;