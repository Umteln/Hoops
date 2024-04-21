'use  client';
import { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {
        label,
        errorMessage,
        handleChange,
        id,
        name,
        type,
        placeholder,
        required,
        pattern,
    } = props;

    const handleFocus = () => {
        setFocused(true);
    };
    return (
        <div className='formInput'>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleFocus}
                onFocus={() => name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
                pattern={pattern}
                required={required}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;
