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
//JERSEY STYLES
export const TEAM_JERSEYS = [
    { id: 1, style: 'style_one', image: '/jerseyStyles/style_one.png' },
    { id: 2, style: 'style_two', image: '/jerseyStyles/style_two.png' },
    { id: 3, style: 'style_three', image: '/jerseyStyles/style_three.png' },
    { id: 4, style: 'style_four', image: '/jerseyStyles/style_four.png' },
    { id: 5, style: 'style_five', image: '/jerseyStyles/style_five.png' },
    { id: 6, style: 'style_six', image: '/jerseyStyles/style_six.png' },
    { id: 7, style: 'style_seven', image: '/jerseyStyles/style_seven.png' },
    { id: 8, style: 'style_eight', image: '/jerseyStyles/style_eight.png' },
    { id: 9, style: 'style_nine', image: '/jerseyStyles/style_nine.png' },
    { id: 10, style: 'style_ten', image: '/jerseyStyles/style_ten.png' },
];
// SIZES
export const SIZES = [
    {
        id: '1a',
        value: '',
        label: 'Select a size',
    },
    {
        id: '2b',
        value: 'sm',
        label: 'Small',
    },
    {
        id: '3c',
        value: 'md',
        label: 'Medium',
    },
    {
        id: '4d',
        value: 'lg',
        label: 'Large',
    },
    {
        id: '5e',
        value: 'xlg',
        label: 'X-Large',
    },
    {
        id: 6,
        value: 'xxlg',
        label: 'XX-Large',
    },
];

export const blankNewTeamForm = {
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    sponsor: '',
    teamHero: '',
    jerseyStyle: '',
    playerOneName: '',
    playerTwoName: '',
    playerThreeName: '',
    playerFourName: '',
    playerOneSize: '',
    playerTwoSize: '',
    playerThreeSize: '',
    playerFourSize: '',
};

//PLAYER FORM INFO
export const PLAYER__INPUTS = [
    {
        id: 1,
        type: 'text',
        placeholder: 'Enter Player Name',
        name: 'playerOneName',
        sizeName: 'playerOneSize',
        label: 'Player One Name',
        sizeLabel: 'Player One Size',
        errorMessage:
            'Name must be between 3-20 characters, no special characters',
        sizeErrorMessage: 'Select a size',
        pattern: '^[A-Za-z0-9]{2,16}$',
        required: true,
    },
    {
        id: 2,
        type: 'text',
        placeholder: 'Enter Player Name',
        name: 'playerTwoName',
        sizeName: 'playerTwoSize',
        label: 'Player Two Name',
        sizeLabel: 'Player Two Size',
        sizeErrorMessage: 'Select a size',
        errorMessage:
            'Name must be between 3-20 characters, no special characters',
        pattern: '^[A-Za-z0-9]{2,16}$',
        required: true,
    },
    {
        id: 3,
        type: 'text',
        placeholder: 'Enter Player Name',
        name: 'playerThreeName',
        sizeName: 'playerThreeSize',
        label: 'Player Three Name',
        sizeLabel: 'Player Three Size',
        sizeErrorMessage: 'Select a size',
        errorMessage:
            'Name must be between 3-20 characters, no special characters',
        pattern: '^[A-Za-z0-9]{2,16}$',
        required: true,
    },
    {
        id: 4,
        type: 'text',
        placeholder: 'Enter Player Name',
        name: 'playerFourName',
        sizeName: 'playerFourSize',
        label: 'Player Four Name',
        sizeLabel: 'Player Four Size',
        sizeErrorMessage: 'Select a size',
        errorMessage:
            'Name must be between 3-20 characters, no special characters',
        pattern: '^[A-Za-z0-9]{2,16}$',
        required: true,
    },
];

//CONTACT FORM INFO
export const CONTACT_INPUTS = [
    {
        id: 1,
        name: 'contactFirstName',
        type: 'text',
        placeholder: 'John',
        label: 'First Name',
        errorMessage:
            'Name must be between 3-20 characters, no special characters',
        pattern: '^[A-Za-z0-9]{3,16}$',
        required: true,
    },
    {
        id: 2,
        name: 'contactLastName',
        type: 'text',
        placeholder: 'Doe',
        label: 'Last Name',
        errorMessage:
            'Name must be between 3-20 characters, no special characters',
        pattern: '^[A-Za-z0-9]{3,16}$',
        required: true,
    },
    {
        id: 3,
        name: 'contactEmail',
        type: 'email',
        placeholder: 'johndoe@google.com',
        label: 'Email',
        errorMessage: 'Enter a valid email address',
        required: true,
    },
    {
        id: 4,
        name: 'sponsor',
        type: 'text',
        placeholder: 'Sponsor Name - sponsor email',
        label: 'Sponsor',
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
