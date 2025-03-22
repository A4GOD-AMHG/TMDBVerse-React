import React from 'react';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/A4GOD-AMHG',
            icon: '/github-white.svg'
        },
        {
            name: 'Facebook',
            href: 'https://facebook.com/alexismanuel.hurtadogarcia',
            icon: '/facebook-white.svg'
        },
        {
            name: 'X (Twitter)',
            href: 'https://x.com/alexis_mhg',
            icon: '/x-white.svg'
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com/alexismanuel.hurtadogarcia',
            icon: '/instagram-white.svg'
        },
        {
            name: 'LinkedIn',
            href: 'https://cu.linkedin.com/in/alexis-mhg',
            icon: '/linkedin-white.svg'
        }
    ];


    return (
        <footer className="bg-primary border-t border-white w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-100 text-sm md:text-md text-center md:text-left">
                        © {new Date().getFullYear()} The Movie DB Zone. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">                        {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-100 hover:text-white transition-colors duration-300"
                        >
                            <span className="sr-only">{link.name}</span>
                            <img className="h-8 w-8" src={link.icon} />
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;