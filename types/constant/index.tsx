import { CiStar } from "react-icons/ci"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { LuSatellite } from "react-icons/lu"
import { MdEmail, MdOutlineRocketLaunch } from "react-icons/md"
import { IProject } from "../interface"

export const NAVBAR = [
    {
        id: 1,
        name: "About",
        href: "about",
    },
    {
        id: 2,
        name: "Projects",
        href: "projects",
    },
    {
        id: 3,
        name: "Skills",
        href: "skills",
    }
]

export const NAVBAR_FULL = [{
    id: 1,
    name: "About",
    href: "#about",
},
{
    id: 2,
    name: "Projects",
    href: "#projects",
},
{
    id: 3,
    name: "Skills",
    href: "#skills",
},
{
    id: 4,
    name: "Contact",
    href: "#contact",
}]

export const ABOUT_ME = [
    { icon: MdOutlineRocketLaunch, title: 'Học Nhanh', desc: 'Tôi nhanh chóng tiếp thu các công nghệ và khái niệm mới' },
    { icon: LuSatellite, title: 'Giải Quyết Vấn Đề', desc: 'Tôi thích giải quyết các vấn đề kỹ thuật phức tạp' },
    { icon: CiStar, title: 'Tư Duy Sáng Tạo', desc: 'Tôi mang những ý tưởng sáng tạo đến mỗi dự án' },
]

export const PROJECTS: IProject[] = [
    {
        id: 1,
        title: 'Ứng Dụng Quản Lý Nhiệm Vụ',
        description: 'Ứng dụng quản lý nhiệm vụ đầy đủ tính năng được xây dựng bằng React và Firebase. Các tính năng bao gồm cập nhật theo thời gian thực, chức năng kéo và thả, và xác thực người dùng.',
        tech: ['React', 'Tailwind CSS', 'Firebase', 'React DnD'],
        linkDemo: '#',
        linkGithub: '#',
        color: 'from-purple-500/20 to-pink-500/20',
        image: ''
    },
    {
        id: 2,
        title: 'Cửa Hàng Thương Mại Điện Tử',
        description: 'Nền tảng thương mại điện tử hiện đại với lọc sản phẩm, quản lý giỏ hàng và luồng thanh toán. Được tích hợp với các hệ thống xử lý thanh toán và quản lý kho hàng.',
        tech: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
        linkDemo: '#',
        linkGithub: '#',
        color: 'from-cyan-500/20 to-blue-500/20',
        image: ''
    },
    {
        id: 3,
        title: 'Bảng Điều Khiển Thời Tiết',
        description: 'Ứng dụng thời tiết tương tác hiển thị dữ liệu thời tiết theo thời gian thực, dự báo và thông tin dựa trên vị trí với các hình ảnh hóa dữ liệu đẹp.',
        tech: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
        linkDemo: '#',
        linkGithub: '#',
        color: 'from-green-500/20 to-emerald-500/20',
        image: ''
    },
];

export const SKILLS = [
    {
        id: 1,
        category: 'Frontend',
        skills: ['ReactJS', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    },
    {
        id: 2,
        category: 'Công Cụ & Thư Viện',
        skills: ['Git', 'Figma', 'Redux', 'Docker', 'React Query', 'Tailwind CSS'],
    },
    {
        id: 3,
        category: 'Kỹ Năng Mềm',
        skills: ['Giải Quyết Vấn Đề', 'Giao Tiếp', 'Cộng Tác Nhóm', 'Quản Lý Thời Gian', 'Khả Ứng Phó', 'Chú Ý Chi Tiết'],
    },
    {
        id: 4,
        category: 'Đang Học',
        skills: ['Node.js', 'GraphQL', 'Testing', 'Hiệu Năng Web', 'Khả Năng Tiếp Cận', 'Web3'],
    },
];

export const PROGESS_SKILL = [
    { skill: 'React', level: 85 },
    { skill: 'JavaScript/TypeScript', level: 80 },
    { skill: 'Tailwind CSS', level: 90 },
    { skill: 'Next.js', level: 75 },
]

export const SOCIAL_LINKS = [
    { icon: MdEmail, label: 'Email', href: 'mailto:trancongminh.dev@gmail.com', color: 'hover:text-red-500' },
    { icon: FaFacebook, label: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61583934473293&locale=vi_VN', color: 'hover:text-sky-500' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/MinhTran2004', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tr%E1%BA%A7n-c%C3%B4ng-minh-54a594400/', color: 'hover:text-blue-500' },
];