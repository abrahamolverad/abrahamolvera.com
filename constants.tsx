import React, { SVGProps } from 'react';
import { Topic, Venture } from './types';

// Icons using SVG directly for performance and no external deps
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const Icons = {
  Instagram: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  TikTok: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
  ),
  Globe: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
  ),
  TrendingUp: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
  ),
  BrainCircuit: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 3 2.5 2.5 0 0 0 .5 2.97 2.5 2.5 0 0 0 0 3.96 2.5 2.5 0 0 0 1.32 3 2.5 2.5 0 0 0 1.98 3 2.5 2.5 0 0 0 4.96-.46"></path><path d="M12 4.5V16a2 2 0 0 0 2 2h1.5"></path><path d="M15 13a2.5 2.5 0 0 1 1.5 4.5"></path><path d="M16 8a2.5 2.5 0 0 1 4 1"></path></svg>
  ),
  Briefcase: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  Send: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  Sparkles: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
  ),
  Menu: ({size, ...props}: IconProps) => (
     <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  ),
  X: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  Mic: ({size, ...props}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || "24"} height={size || "24"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
  )
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/soyabraham.ia',
  tiktok: 'https://tiktok.com/@soyabraham.ia',
  linkedin: '#', // Placeholder
};

export const VENTURES: Venture[] = [
  {
    id: 'rok-ai',
    name: 'Rok-ai',
    description: 'Podcast sobre el futuro de la humanidad, la inteligencia artificial y la evolución digital.',
    role: 'Host & Fundador',
    status: 'In Progress',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'the-aignc',
    name: 'The AIgnc',
    description: 'Agencia especializada en implementación de IA, automatización y soluciones tecnológicas para empresas globales.',
    role: 'CEO',
    status: 'Active',
    color: 'from-blue-500 to-cyan-500',
    link: '#',
  },
  {
    id: 'avant-media',
    name: 'Avant Media',
    description: 'Casa productora de medios digitales de alto impacto para marcas personales y corporativas.',
    role: 'Cofundador',
    status: 'Active',
    color: 'from-orange-500 to-red-500',
    link: '#',
  }
];

export const TOPICS: Topic[] = [
  {
    id: 'dubai',
    title: 'Vida en Dubai',
    description: 'Guía estratégica para reubicarse, vivir y entender la cultura de negocios en los Emiratos Árabes Unidos.',
    icon: <Icons.Globe />,
  },
  {
    id: 'invest',
    title: 'Inversiones',
    description: 'Estrategias de inversión en mercados emergentes, criptoactivos y bienes raíces internacionales.',
    icon: <Icons.TrendingUp />,
  },
  {
    id: 'ai',
    title: 'Aprende IA',
    description: 'Dominio de herramientas de IA generativa para potenciar tu productividad y creatividad.',
    icon: <Icons.BrainCircuit />,
  },
  {
    id: 'career',
    title: 'Carrera',
    description: 'Mentoria para escalar tu carrera profesional en un mundo impulsado por la tecnología.',
    icon: <Icons.Briefcase />,
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Eres la IA personal de Abraham Olvera. Tu objetivo es actuar como un asistente virtual en su sitio web personal 'abrahamolvera.com'.
Responde siempre en español. Sé conciso, inspirador, profesional y minimallista en tus respuestas.

Sobre Abraham Olvera:
- Es un emprendedor experto en Inteligencia Artificial.
- Vive en Dubai y ayuda a personas a reubicarse allí.
- Tiene una marca personal fuerte en Instagram y TikTok (@soyabraham.ia).
- Temas clave: Inversiones, IA, Futuro, Dubai, Desarrollo de Carrera.
- Proyectos: 
    1. Rok-ai (Podcast en progreso).
    2. The AIgnc (Agencia de IA).
    3. Avant Media (Media).

Si te preguntan sobre reubicarse a Dubai: Da consejos prácticos y menciona que Abraham ofrece asesoría.
Si te preguntan sobre inversiones: Habla de mentalidad a largo plazo y tecnología.
Si te preguntan sobre IA: Explica cómo la IA es una herramienta potenciadora, no un reemplazo.

Tono: Visionario, directo, amable.
No des consejos financieros legales, solo educativos.
`;