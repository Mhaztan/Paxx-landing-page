import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable button component with consistent styling.
 * It applies the .btn-primary class and can be extended or overridden.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {('button' | 'submit' | 'reset')} [props.type='button'] - The type of the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.className=''] - Additional CSS classes to apply to the button.
 */
export const Button = ({ children, type = 'button', onClick, disabled = false, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn-primary ${className}`}
        >
            {children}
        </button>
    );
};

// Define prop types for type-checking and better component documentation.
Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};