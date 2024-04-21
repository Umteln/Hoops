import React from 'react';
import FormInput from './FormInput';
import { SIZES } from '@/constants';
import SizeSelect from './SizeSelect';

const playerInformation = [
    {
        id: 1,
        inputName: 'playerOne',
        placeholder: '',
        type: 'text',
        inputLabel: 'Player One Name',
        selectName: 'playerOneSize',
        inputErrorMessage:
            'Name must be between 3-20 characters, no special characters',
        pattern: '^[A-Za-z0-9]{3,16}$',
        required: true,
    },
];

const Player = (props) => {
    const { nameValue, sizeValue } = props;

    return (
        <div className='flex items-center gap-1'>
            <div className='flex-1'>
                <FormInput
                    value={nameValue}
                    {...props}
                />
            </div>
            <div className='flex-1'>
                <SizeSelect
                    value={sizeValue}
                    {...props}
                />
            </div>
        </div>
    );
};

export default Player;
