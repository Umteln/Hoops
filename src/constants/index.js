import { GoSponsorTiers } from 'react-icons/go';
import { FaStore } from 'react-icons/fa';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { MdOutlineContactSupport } from 'react-icons/md';
// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'signup', label: 'Team Sign Up' },
    { href: '/', key: 'sponsor', label: 'Sponsor' },
    { href: '/', key: 'vendor ', label: 'Vendor ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// FEATURES SECTION
export const FEATURES = [
    {
        title: 'Sponsor',
        icon: GoSponsorTiers,
        variant: 'green',
        description:
            'Choose from various tiers of sponsorship towards the parks and tournament. ',
        link: '/',
        label: 'Sign up to Sponsor',
    },
    {
        title: 'Vendor',
        icon: FaStore,
        variant: 'green',
        description:
            'Are you a business or small vendor wanting to get involved? Become a vendor',
        link: '/',
        label: 'Sign up to be a Vendor',
    },
    {
        title: 'Volunteer',
        icon: MdOutlineVolunteerActivism,
        variant: 'green',
        description:
            'Get involved and give back to the community by working with us.',
        link: '/',
        label: 'Sign up to Volunteer',
    },
    {
        title: 'Have Questions?',
        icon: MdOutlineContactSupport,
        variant: 'orange',
        description: 'Still want to support? Contact us',
        link: '/',
        label: 'Contact Us',
    },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: ['About ', 'Sponsor', 'Vendor', 'Volunteer', 'Contact Us'],
    },
    {
        title: 'Our Community',
        links: ['PAL', 'City of Nacogdoches'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Admin Officer', value: '123-456-7890' },
        { label: 'Email Officer', value: 'pal@fake.com' },
    ],
};

export const SOCIALS = {
    title: 'Social',
    links: ['/facebook.svg', '/instagram.svg'],
};
