'use client';

import { NAVBAR } from '@/types/constant';
import { useEffect, useState } from 'react';
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdOutlineRocketLaunch } from 'react-icons/md';
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Detect active section
            for (const section of NAVBAR) {
                const element = document.getElementById(section.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section.href);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const isScrolled = scrollY > 50;

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg animate-fade-in-down"
                            style={{ animationDelay: '0.1s' }}>
                            <MdOutlineRocketLaunch size={20} />
                        </div>
                        <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-down"
                            style={{ animationDelay: '0.15s' }}>
                            Trần Công Minh
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {NAVBAR.map((item, i) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.href)}
                                className={`cursor-pointer capitalize text-sm font-medium transition-all duration-300 animate-fade-in-down opacity-0 relative py-2 ${activeSection === item.href
                                    ? 'text-primary font-semibold'
                                    : 'text-foreground hover:text-primary'
                                    }`}
                                style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards' }}
                            >
                                {item.name}
                                {activeSection === item.href && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                                )}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium animate-fade-in-down opacity-0 hover:scale-105"
                            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
                        >
                            Liên Hệ
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden pb-4 border-t border-border/50 animate-fade-in-up">
                        {['about', 'projects', 'skills'].map((item, i) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`block w-full text-left px-4 py-3 capitalize text-sm font-medium transition-colors rounded-lg ${activeSection === item
                                    ? 'bg-primary/20 text-primary'
                                    : 'text-foreground hover:bg-muted'
                                    }`}
                                style={{ animationDelay: `${i * 0.05}s` }}
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer block w-full text-center px-4 py-3 mt-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                        >
                            Liên Hệ
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}
