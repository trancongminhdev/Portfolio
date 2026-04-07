'use client';

import { useInView } from '@/hooks/use-in-view';
import { ExternalLink, Rocket } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Ứng Dụng Quản Lý Nhiệm Vụ',
        description: 'Ứng dụng quản lý nhiệm vụ đầy đủ tính năng được xây dựng bằng React và Firebase. Các tính năng bao gồm cập nhật theo thời gian thực, chức năng kéo và thả, và xác thực người dùng.',
        tech: ['React', 'Tailwind CSS', 'Firebase', 'React DnD'],
        link: '#',
        github: '#',
        color: 'from-purple-500/20 to-pink-500/20',
    },
    {
        title: 'Cửa Hàng Thương Mại Điện Tử',
        description: 'Nền tảng thương mại điện tử hiện đại với lọc sản phẩm, quản lý giỏ hàng và luồng thanh toán. Được tích hợp với các hệ thống xử lý thanh toán và quản lý kho hàng.',
        tech: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
        link: '#',
        github: '#',
        color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
        title: 'Bảng Điều Khiển Thời Tiết',
        description: 'Ứng dụng thời tiết tương tác hiển thị dữ liệu thời tiết theo thời gian thực, dự báo và thông tin dựa trên vị trí với các hình ảnh hóa dữ liệu đẹp.',
        tech: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
        link: '#',
        github: '#',
        color: 'from-green-500/20 to-emerald-500/20',
    },
];

export function Projects() {
    const { ref, isInView } = useInView();

    return (
        <section id="projects" ref={ref} className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`mb-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <Rocket className="text-accent" size={40} />
                        Các Dự Án Nổi Bật
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className={`group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 ${isInView ? 'animate-scale-in opacity-100' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50 group-hover:from-primary/10 transition-colors duration-300"></div>
                                <div className="text-center z-10">
                                    <p className="text-sm text-foreground/60 font-semibold">Project Preview</p>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                                    >
                                        <ExternalLink size={16} />
                                        Visit
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 flex-1 px-3 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
                                    >
                                        <FaGithub size={16} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className={`text-center mt-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <a
                        href="#"
                        className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Xem Tất Cả Dự Án
                    </a>
                </div>
            </div>
        </section>
    );
}
