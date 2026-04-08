'use client';

import { useInView } from '@/hooks/use-in-view';
import { ABOUT_ME } from '@/types/constant';
import { MdOutlineRocketLaunch } from "react-icons/md";

export function About() {
    const { ref, isInView } = useInView();

    return (
        <section id="about" ref={ref} className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className={`mb-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <MdOutlineRocketLaunch className="text-primary" size={40} />
                        Về Tôi
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Text Content */}
                    <div className={`space-y-6 ${isInView ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Tôi là một Frontend Developer đầy năng động và đam mê tạo các ứng dụng web thân thiện với người dùng. Hành trình của tôi vào lĩnh vực phát triển web bắt đầu từ sự tò mò về cách các trang web hoạt động, và nó đã phát triển thành một niềm đam mê chân thành để tạo ra những trải nghiệm kỹ thuật số đẹp tuyệt vời.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Trong năm qua, tôi đã làm việc trên nhiều dự án khác nhau giúp tôi phát triển các kỹ năng vững chắc trong React, JavaScript và CSS hiện đại. Tôi đặc biệt quan tâm đến tối ưu hóa hiệu suất, khả năng tiếp cận và tạo ra các giao diện người dùng trực quan.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Khi không viết mã, bạn sẽ thấy tôi học các công nghệ mới, đóng góp cho các dự án mã nguồn mở, hoặc khám phá những xu hướng phát triển web mới nhất trên GitHub.
                        </p>
                    </div>

                    {/* Stats/Info Cards */}
                    <div className={`space-y-4 ${isInView ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
                        {ABOUT_ME.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                                    style={{ transitionDelay: `${i * 0.1}s` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <Icon className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
