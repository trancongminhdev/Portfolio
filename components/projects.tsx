'use client';

import { useInView } from '@/hooks/use-in-view';
import { PROJECTS } from '@/types/constant';
import { IProject } from '@/types/interface';
import Link from 'next/link';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import CardProject from './cardProject';

export function Projects() {
    const { ref, isInView } = useInView();

    return (
        <section id="projects" ref={ref} className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`mb-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <MdOutlineRocketLaunch className="text-accent" size={40} />
                        Các Dự Án Nổi Bật
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project: IProject) => (
                        <CardProject key={project.id} project={project} isInView={isInView} />
                    ))}
                </div>

                {/* View More */}
                <div className={`text-center mt-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <Link
                        href="#"
                        className="inline-block px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        Xem Tất Cả Dự Án
                    </Link>
                </div>
            </div>
        </section>
    );
}
