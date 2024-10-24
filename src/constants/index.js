import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bahta, cancoul, customer1, customer2, customer3, doggo, moonlight, sankar} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const toys = [
    {
        thumbnail: cancoul,
        bigToy: cancoul,
    },
    {
        thumbnail: sankar,
        bigToy: sankar,
    },
    {
        thumbnail: bahta,
        bigToy: bahta,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: cancoul,
        name: "Cancoul",
        price: "$34.99",
    },
    {
        imgURL: sankar,
        name: "Sankar",
        price: "$34.99",
    },
    {
        imgURL: moonlight,
        name: "Moonlight",
        price: "$34.99",
    },
    {
        imgURL: doggo,
        name: "Miney",
        price: "$44.99",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Mohamed Aziz',
        rating: 5,
        feedback: "Adopting my Cuddle Companion was heartwarming! The process was easy, and my new plushie feels so special. I love giving a toy with a story a forever home!"
    },
    {
        imgURL: customer2,
        customerName: 'Mave Trabelsi',
        rating: 4.5,
        feedback: "I adopted a plushie for my daughter, and we’re thrilled! The unique stories behind each toy make it a meaningful gift. Highly recommend!"
    },
    {
        imgURL: customer3,
        customerName: 'Yomna Jaafar',
        rating: 5,
        feedback: "I’m so happy with my new plushie! The quality and attention to detail are exceptional. I love that each toy has its own story."
    }

];


export const footerLinks = [
    {
        title: "Categories",
        links: [
            { name: "Small Buddies", link: "/" },
            { name: "Mid-Size Buds", link: "/" },
            { name: "Big Cuddles", link: "/" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@myrayoo.com", link: "mailto:customer@myrayoo.com" },
            { name: "+123 123 1234", link: "tel:+123 123 1234" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];