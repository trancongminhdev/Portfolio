'use client';

import { useInView } from '@/hooks/use-in-view';
import { PROGESS_SKILL, SKILLS } from '@/types/constant';
import { IProgessSkill, ISkill } from '@/types/interface';
import { MdOutlineRocketLaunch } from 'react-icons/md';

interface Props {
    skill: ISkill,
    isInView: boolean
}

const SkillCategory: React.FC<Props> = ({ skill, isInView }) => (
    <div
        key={skill.id}
        className={`${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
        style={{ animationDelay: `${skill.id * 0.1}s`, animationFillMode: 'forwards' }}
    >
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            {skill.category}
        </h3>
        <div className="flex flex-wrap gap-3">
            {skill.skills.map((skill, skillIndex) => (
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
)

interface ProgessSkillProps {
    progessSkill: IProgessSkill
    isInView: boolean
}

const ProgessSkil: React.FC<ProgessSkillProps> = ({ progessSkill, isInView }) => (
    <div key={progessSkill.skill} className="space-y-2">
        <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">{progessSkill.skill}</span>
            <span className="text-sm text-muted-foreground">{progessSkill.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                style={{
                    width: isInView ? `${progessSkill.level}%` : '0%',
                }}
            ></div>
        </div>
    </div>
)

export function Skills() {
    const { ref, isInView } = useInView();

    return (
        <section id="skills" ref={ref} className="py-20 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className={`mb-12 ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <MdOutlineRocketLaunch className="text-accent" size={40} />
                        Kỹ Năng & Chuyên Môn
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {SKILLS.map((item) => (
                        <SkillCategory key={item.id} skill={item} isInView={isInView} />
                    ))}
                </div>

                {/* Proficiency Chart */}
                <div className={`mt-12 p-8 bg-background border border-border rounded-xl ${isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <h3 className="text-xl font-bold text-foreground mb-6">Mức Độ Thành Thạo</h3>
                    <div className="space-y-4">
                        {PROGESS_SKILL.map((item) => (
                            <ProgessSkil key={item.skill} progessSkill={item} isInView={isInView} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
