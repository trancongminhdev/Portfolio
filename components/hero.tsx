'use client';

import { ArrowDown, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Greeting */}
                <div
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30 animate-fade-in-down opacity-0"
                    style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                >
                    <Rocket size={16} className="text-accent" />
                    <p className="text-accent text-sm font-medium">Khám phá vũ trụ mã hóa của tôi</p>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" >
                    Chào, tôi là Phi Hành Gia
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                        Nhà Phát Triển React
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    Với 1 năm kinh nghiệm trong việc xây dựng các ứng dụng web tương tác tuyệt đẹp sử dụng React, Tailwind CSS và JavaScript hiện đại. Tôi yêu thích tạo ra các giao diện hoàn hảo và giải quyết các vấn đề phức tạp.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Xem Dự Án Của Tôi
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Liên Hệ Tôi
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-110 hover:text-accent" aria-label="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-110 hover:text-accent" aria-label="LinkedIn">
                        <FiLinkedin size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-110 hover:text-accent" aria-label="Twitter">
                        <CiTwitter size={20} />
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="animate-float opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <p className="text-muted-foreground text-sm mb-2">Scroll to explore</p>
                    <ArrowDown className="mx-auto text-primary animate-bounce" size={20} />
                </div>
            </div>
        </section>
    );
}
