import Hero from '@/components/Hero';
import Image from 'next/image';
import Teams from '../components/Teams';
import Court from '@/components/Court';
import Connected from '@/components/Connected';
import Feature from '@/components/Feature';

export default function Home() {
    return (
        <div className='flex flex-col gap-4'>
            <Hero />
            <Court />
            <Teams />
            <Feature />
        </div>
    );
}
