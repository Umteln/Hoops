import Image from 'next/image';
import Button from './Button';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
            <div className='hero-flyer' />

            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
                    <span>
                        <Image
                            src='/swoosh.png'
                            alt='basketball'
                            width={50}
                            height={50}
                            className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
                        />
                    </span>
                    PAL Presents
                </p>
                <h1 className='bold-40 lg:bold-64'>
                    Community Heroes Tournament
                </h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
                    We want to be on each of your journeys seeking the
                    satisfaction of seeing the incorruptible beauty of nature.
                    We can help you on an adventure around the world in just one
                    app
                </p>

                <div className='flex flex-col w-full gap-3 sm:flex-row mt-6'>
                    <div>
                        <Button
                            type='button'
                            title='Become a Sponsor'
                            variant='btn_green'
                        />
                    </div>
                    <div>
                        <Link
                            href='/signup'
                            className='flex items-center cursor-pointer gap-2 underline hover:text-green-50 bold-16 py-4'
                        >
                            Team Registration
                            <FaLongArrowAltRight size={25} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='relative flex flex-1 items-start'>
                <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'>What</p>
                            <IoMdClose
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className='bold-16 text-white'>4 vs 4 Matches</p>
                    </div>

                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>
                                When
                            </p>
                            <p className='bold-16 text-white'>August 31,2024</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>
                                Where
                            </p>
                            <p className='bold-16 text-white'>
                                McMichael Middle School
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
