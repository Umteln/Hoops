import Image from 'next/image';
import { PiParkBold } from 'react-icons/pi';

const Park = ({ backgroundImage, title, subtitle, peopleJoined }) => {
    return (
        <div
            className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
        >
            <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
                <div className='flexCenter gap-4'>
                    <div className='rounded-full bg-green-50 p-4'>
                        <PiParkBold
                            width={28}
                            height={28}
                            color='#ffff'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='bold-18 text-white'>{title}</h4>
                        <p className='regular-14 text-white'>{subtitle}</p>
                    </div>
                </div>

                <div className='flexCenter gap-6'>
                    <p className='bold-16 md:bold-20 text-white'>
                        {peopleJoined}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Court = () => {
    return (
        <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
            <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
                <Park
                    backgroundImage='bg-bg-img-1'
                    title='Putuk Truno Camp'
                    subtitle='Prigen, Pasuruan'
                    peopleJoined='50+ Joined'
                />
                <Park
                    backgroundImage='bg-bg-img-2'
                    title='Mountain View Camp'
                    subtitle='Somewhere in the Wilderness'
                    peopleJoined='50+ Joined'
                />
            </div>

            <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
                <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
                    <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
                        <strong>Revitalizing Our Community</strong>
                    </h2>
                    <p className='regular-14 xl:regular-16 mt-5 text-white'>
                        Check out a few of the parks around our beautiful
                        community that we've been able to bring back to life.
                        Enriching neighborhoods and giving families a place to
                        enjoy being outside.
                    </p>
                    <Image
                        src='./quote.svg'
                        alt='quote'
                        width={186}
                        height={219}
                        className='quote'
                    />
                </div>
            </div>
        </section>
    );
};

export default Court;
