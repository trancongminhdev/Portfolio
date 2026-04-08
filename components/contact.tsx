'use client';

import { useInView } from '@/hooks/use-in-view';
import { SOCIAL_LINKS } from '@/types/constant';
import Link from 'next/link';
import { useState } from 'react';
import { BsSend } from "react-icons/bs";
import { FiExternalLink } from 'react-icons/fi';
import { MdOutlineRocketLaunch } from 'react-icons/md';

export function Contact() {
    const { ref, isInView } = useInView();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };



    return (
        <section id="contact" ref={ref} className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className={`mb-12 text-center ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 inline-flex items-center gap-3">
                        <BsSend className="text-accent" size={40} />
                        Liên Hệ Với Tôi
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                        Tôi luôn sẵn sàng tiếp nhận những cơ hội mới và các dự án thú vị. Hãy liên hệ với tôi!
                    </p>
                </div>

                {/* Contact Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className={`${isInView ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Tên Của Bạn</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                                    placeholder="Tên của bạn"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Tin Nhắn</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                                    placeholder="Tin nhắn của bạn..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="cursor-pointer w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <BsSend size={18} />
                                {submitted ? 'Đã Gửi! ✓' : 'Gửi Tin Nhắn'}
                            </button>
                        </form>
                    </div>

                    {/* Social Links & Info */}
                    <div className={`${isInView ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
                        <div className="space-y-6">
                            <div className="p-6 bg-background border border-border rounded-xl">
                                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <MdOutlineRocketLaunch className="text-primary" size={24} />
                                    Kết Nối Với Tôi
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Tôi luôn vui lòng trò chuyện về phát triển web, React hoặc những cơ hội tiềm năng. Đừng ngần ngại liên hệ với tôi!
                                </p>
                                <div className="space-y-3">
                                    {SOCIAL_LINKS.map((link, i) => {
                                        const Icon = link.icon;
                                        return (
                                            <Link
                                                key={i}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-3 bg-muted hover:bg-muted/80 rounded-lg transition-all duration-300 group"
                                            >
                                                <Icon className={`w-5 h-5 transition-colors duration-300 ${link.color}`} />
                                                <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{link.label}</span>
                                                <FiExternalLink className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
                                <h3 className="text-lg font-bold text-foreground mb-2">Đang Tìm Một Nhà Phát Triển?</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Tôi tích cực tìm kiếm các cơ hội để đóng góp cho các dự án sáng tạo và phát triển kỹ năng của mình trong một môi trường cộng tác.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
