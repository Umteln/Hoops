'use client';

import React, { useState } from 'react';
import FormInput from './FormInput';
import Player from './Player';
import {
    CONTACT_INPUTS,
    PLAYER__INPUTS,
    TEAM_JERSEYS,
} from '../constants/index';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useTeamsContext } from '@/context/TeamsContext';
import Image from 'next/image';

const TeamForm = () => {
    const teamFee = 70.0;
    const { values, setValues, heroes } = useTeamsContext();
    const [style, setStyle] = useState();
    const [paid, setPaid] = useState(false);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onPaymentApproval = (data) => {
        console.log('PayPal Data:', data);
        const payload = {
            data: {
                ...values,
                paymentId: data.paymentId,
                totalOrderAmount: teamFee,
            },
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (
        <div className='flex items-center justify-center h-full w-full bg-red-100 '>
            <form className='bg-white py-0 px-[60px] rounded-lg my-6'>
                <h1 className='bold-32 my-4'>Register</h1>
                <div className='flex flex-col md:flex-row gap-8 '>
                    {/* CONTACT INFO */}
                    <div className='flex-1'>
                        <h2 className='font-semibold text-[20px] my-4'>
                            Contact Information
                        </h2>
                        {CONTACT_INPUTS.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                handleChange={handleChange}
                            />
                        ))}
                    </div>
                    {/* TEAM / JERSERY */}
                    <div className='flex-1'>
                        <h2 className='font-semibold text-[20px] my-4'>
                            Team Information
                        </h2>
                        <div className='flex flex-col '>
                            <label>Select a Team</label>
                            <select
                                id='jerseyStyle'
                                name='jerseyStyle'
                                onChange={(e) => {
                                    handleChange(e);
                                    setStyle(e.target.value);
                                }}
                                required
                            >
                                {heroes.map((hero) => (
                                    <option
                                        key={hero.hero}
                                        value={hero.jersey}
                                    >
                                        Team {hero.hero}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            {style && (
                                <p>
                                    {' '}
                                    {TEAM_JERSEYS.filter(
                                        (tj) => tj.style === style
                                    ).map((j) => (
                                        <Image
                                            key={j.id}
                                            src={j.image}
                                            alt={j.style}
                                            width={300}
                                            height={300}
                                        />
                                    ))}{' '}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold text-[20px] my-4'>
                        Players Information
                    </h2>
                    {PLAYER__INPUTS.map((player, index) => (
                        <Player
                            key={index}
                            {...player}
                            nameValue={values[player.name]}
                            sizeValue={values[player.sizeName]}
                            handleChange={handleChange}
                        />
                    ))}
                </div>

                <div className='my-4'>
                    <p>Total: $70.00</p>
                    <PayPalButtons
                        onApprove={onPaymentApproval}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: teamFee,
                                            currency_code: 'USD',
                                        },
                                    },
                                ],
                            });
                        }}
                        style={{ layout: 'horizontal' }}
                    />
                </div>
            </form>
        </div>
    );
};

export default TeamForm;
