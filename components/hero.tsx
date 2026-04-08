import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { GoArrowDown } from "react-icons/go";
import { MdOutlineRocketLaunch } from 'react-icons/md';

const ButtonNav = ({ text, href, isPrimary }: { text: string, href: string, isPrimary: boolean }) => (
    <Link
        href={href}
        className={clsx("px-8 py-4 text-primary font-semibold transition-all duration-300 hover:scale-105 active:scale-95", isPrimary ?
            " bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50"
            :
            'border-2 border-primary rounded-lg font-semibold hover:bg-primary/10')}
    >
        {text}
    </Link>
)

const ButtonProvider = ({ icon, href }: { icon: ReactNode, href: string }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-110 hover:text-accent" aria-label="GitHub">
        {icon}
    </Link>
)

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
                {/* Greeting */}
                <div
                    className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30 animate-fade-in-down opacity-0"
                    style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                >
                    <MdOutlineRocketLaunch size={16} className="text-accent" />
                    <p className="text-accent text-sm font-medium">Khám phá vũ trụ mã hóa của tôi</p>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" >
                    Chào, tôi là Trần Công Minh
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                        Frontend Developer
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    Với 1 năm kinh nghiệm trong việc xây dựng các ứng dụng web tương tác tuyệt đẹp sử dụng React, Tailwind CSS và JavaScript hiện đại. Tôi yêu thích tạo ra các giao diện hoàn hảo và giải quyết các vấn đề phức tạp.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <ButtonNav text="Xem Dự Án Của Tôi" href="#projects" isPrimary={true} />
                    <ButtonNav text="Liên Hệ Tôi" href="#contact" isPrimary={false} />
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    <ButtonProvider icon={<FaFacebook size={20} />} href='https://web.facebook.com/profile.php?id=61583934473293&locale=vi_VN' />
                    <ButtonProvider icon={<FaGithub size={20} />} href='https://github.com/MinhTran2004' />
                    <ButtonProvider icon={<FiLinkedin size={20} />} href='https://www.linkedin.com/in/tr%E1%BA%A7n-c%C3%B4ng-minh-54a594400' />
                </div>

                {/* Scroll Indicator */}
                <div className="animate-float" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <p className="text-muted-foreground mb-2">Scroll to explore</p>
                    <GoArrowDown className="mx-auto text-primary animate-bounce" size={20} />
                </div>
            </div>
        </section>
    );
}
