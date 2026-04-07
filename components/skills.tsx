'use client';

import { useInView } from '@/hooks/use-in-view';
import { Rocket } from 'lucide-react';

const skillCategories = [
    {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    },
    {
        category: 'Công Cụ & Thư Viện',
        skills: ['Git', 'Figma', 'Redux', 'React Query', 'Jest', 'Webpack'],
    },
    {
        category: 'Kỹ Năng Mềm',
        skills: ['Giải Quyết Vấn Đề', 'Giao Tiếp', 'Cộng Tác Nhóm', 'Quản Lý Thời Gian', 'Khả Ứng Phó', 'Chú Ý Chi Tiết'],
    },
    {
        category: 'Đang Học',
        skills: ['Node.js', 'GraphQL', 'Testing', 'Hiệu Năng Web', 'Khả Năng Tiếp Cận', 'Web3'],
    },
];

export function Skills() {
    const { ref, isInView } = useInView();

    return (
        <section id="skills" ref={ref} className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className={`mb-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <Rocket className="text-accent" size={40} />
                        Kỹ Năng & Chuyên Môn
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={catIndex}
                            className={`${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
                            style={{ animationDelay: `${catIndex * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="px-4 py-2 bg-background border border-border rounded-full text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-default group"
                                        style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proficiency Chart */}
                <div className={`mt-12 p-8 bg-background border border-border rounded-xl ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <h3 className="text-xl font-bold text-foreground mb-6">Mức Độ Thành Thạo</h3>
                    <div className="space-y-4">
                        {[
                            { skill: 'React', level: 85 },
                            { skill: 'JavaScript/TypeScript', level: 80 },
                            { skill: 'Tailwind CSS', level: 90 },
                            { skill: 'Next.js', level: 75 },
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-foreground">{item.skill}</span>
                                    <span className="text-sm text-muted-foreground">{item.level}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: isInView ? `${item.level}%` : '0%',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
