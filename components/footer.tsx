'use client';

import { NAVBAR_FULL, SOCIAL_LINKS } from '@/types/constant';
import { CiMail, CiTwitter } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { MdOutlineRocketLaunch } from 'react-icons/md';

const ButtonSocial = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110"
            aria-label={label}
        >
            <Icon size={18} />
        </a>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                                <MdOutlineRocketLaunch size={20} />
                            </div>
                            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trần Công Minh</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Xây dựng những trải nghiệm web đẹp và tương tác với React và các công nghệ hiện đại.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        <h4 className="font-bold text-foreground mb-4">Liên Kết Nhanh</h4>
                        <ul className="space-y-2 text-sm">
                            {
                                NAVBAR_FULL.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        <h4 className="font-bold text-foreground mb-4">Kết Nối</h4>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((item) => (
                                <ButtonSocial key={item.label} icon={item.icon} href={item.href} label={item.label} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>© {currentYear} Trần Công Minh - Frontend Developer. Bảo lưu mọi quyền.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary transition-colors duration-300">
                                Chính Sách Bảo Mật
                            </a>
                            <a href="#" className="hover:text-primary transition-colors duration-300">
                                Điều Khoản Dịch Vụ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
