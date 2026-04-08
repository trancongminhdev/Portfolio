export interface IProject {
    id: number,
    image: string,
    title: string,
    color: string,
    description: string,
    tech: string[],
    linkDemo: string,
    linkGithub: string
}

export interface ISkill {
    id: number,
    category: string,
    skills: string[]
}

export interface IProgessSkill {
    skill: string,
    level: number
}