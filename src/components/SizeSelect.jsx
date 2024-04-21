'use client';
import './sizeSelect.css';
import { SIZES } from '@/constants';
import React, { useState } from 'react';

const SizeSelect = (props) => {
    const [focused, setFocused] = useState(false);
    const {
        sizeName,
        sizeLabel,
        sizeErrorMessage,
        pattern,
        required,
        handleChange,
        id,
    } = props;

    const handleFocus = () => {
        setFocused(true);
    };
    return (
        <div className='flex-1 flex gap-1 flex-col'>
            <label htmlFor={sizeName}>{sizeLabel}</label>
            <select
                id={sizeName}
                onChange={handleChange}
                onBlur={handleFocus}
                onFocus={() =>
                    sizeName === 'confirmPassword' && setFocused(true)
                }
                focused={focused.toString()}
                name={sizeName}
                pattern={pattern}
                required={required}
            >
                {SIZES.map((size) => (
                    <>
                        <option
                            key={size.id}
                            value={size.value}
                        >
                            {size.label}
                        </option>
                    </>
                ))}
            </select>
            <span>{sizeErrorMessage}</span>
        </div>
    );
};

export default SizeSelect;
