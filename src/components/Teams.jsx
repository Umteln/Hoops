import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Teams = () => {
    return (
        <section className='flexCenter flex-col'>
            <div className='padding-container max-container w-full pb-24'>
                <Image
                    src='/swoosh.png'
                    alt='basketball'
                    width={50}
                    height={50}
                />
                <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
                    Are you ready to play ball?
                </p>
                <div className='flex flex-wrap  gap-5'>
                    <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
                        Register Your Team
                    </h2>
                    <div className='flex flex-col gap-3'>
                        <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
                            Only with the hilink application you will no longer
                            get lost and get lost again, because we already
                            support offline maps when there is no internet
                            connection in the field. Invite your friends,
                            relatives and friends to have fun in the wilderness
                            through the valley and reach the top of the mountain
                        </p>
                        <Link
                            href='/sign-up'
                            className='flex items-center cursor-pointer gap-2 underline hover:text-green-50 bold-16'
                        >
                            Register Team
                            <FaLongArrowAltRight size={25} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flexCenter max-container relative w-full'>
                <Image
                    src='/hoop.jpg'
                    alt='basketball hoop'
                    width={1440}
                    height={580}
                    className='w-full object-cover object-center xl:rounded-5xl'
                />

                <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
                    <Image
                        src='/meter.svg'
                        alt='meter'
                        width={16}
                        height={158}
                        className='h-full w-auto'
                    />
                    <div className='flexBetween flex-col'>
                        <div className='flex w-full flex-col'>
                            <div className='flexBetween w-full'>
                                <p className='regular-16 text-gray-20'>Teams</p>
                                <p className='bold-16 text-green-50 px-2'>
                                    Available
                                </p>
                            </div>
                            <p className='bold-20 mt-2'>8 Teams</p>
                        </div>

                        <div className='flex w-full flex-col'>
                            <p className='regular-16 text-gray-20'>
                                Ready To Play
                            </p>
                            <h4 className='bold-20 mt-2 whitespace-nowrap'>
                                2 Teams
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teams;
