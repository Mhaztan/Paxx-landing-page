import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable input field component designed to integrate with Formik.
 * It displays a label, the input element, and validation error messages.
 *
 * @param {object} props - The component props.
 * @param {object} props.field - The Formik field object (contains name, value, onChange, onBlur).
 * @param {object} props.form - The Formik form object (contains touched, errors).
 * @param {string} props.label - The text for the input's label.
 * @param {string} [props.type='text'] - The type of the input element (e.g., 'text', 'email').
 * @param {string} [props.placeholder=''] - The placeholder text for the input.
 * @param {string} [props.className=''] - Additional CSS classes for the input container.
 */
export const InputField = ({ field, form: { touched, errors }, label, type = 'text', placeholder = '', className = '' }) => {
    const hasError = touched[field.name] && errors[field.name];

    return (
        <div className={`w-full ${className}`}>
            <label htmlFor={field.name} className="block text-sm font-medium text-bkg mb-1">
                {label}
            </label>
            <input
                id={field.name}
                type={type}
                placeholder={placeholder}
                {...field}
                className={`w-full px-3 py-2 bg-accent border rounded-md text-bkg focus:outline-none focus:ring-2 focus:ring-primary ${hasError ? 'border-red-500' : 'border-gray-600'
                    }`}
            />
            {hasError && (
                <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
            )}
        </div>
    );
};

// Define prop types for robust component usage.
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};