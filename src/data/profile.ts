export type ExperienceEntry = {
  role: string;
  company: string;
  logoUrl?: string;
  period: string;
  duration: string;
  location: string;
  workMode: string;
  description: string;
  bullets?: string[];
  tags: string[];
};

export type ProjectEntry = {
  name: string;
  period: string;
  description: string;
  tags: string[];
  github: string;
};

export type HobbyEntry = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export const profile = {
  name: 'Javier Pintado Navarro',
  headline: 'Desarrollador Full-Stack en Viafirma',
  location: 'Camas, Andalucía, España',
  about:
    'Empecé mi camino en la tecnología como técnico IoT e informático, hasta que la pasión por construir aplicaciones me llevó al desarrollo Full Stack: hoy trabajo sobre todo en frontend con React, aunque también toco backend con Java. Fuera del código, siete años compitiendo en remo de alto rendimiento me enseñaron una disciplina que aplico igual al trabajo en equipo: aprender rápido, cuidar cada detalle y no conformarme con que algo simplemente funcione.',
  email: 'jpintadonav@gmail.com',
  linkedin: 'https://www.linkedin.com/in/javier-pintado-navarro-06811a2ab/',
  github: 'https://github.com/jpintado-viafirma',
};

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Angular', 'Material UI', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Java', 'Django', 'Python'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'Docker', 'Scrum', 'Active Directory', 'Claude Code'],
  },
];

export const hobbies: HobbyEntry[] = [
  {
    title: 'Remo de alto rendimiento',
    description:
      '7 años compitiendo en el Club Náutico Sevilla, llegando a formar parte del equipo de alto rendimiento y proclamándome varias veces campeón de Andalucía. De ahí viene gran parte de mi disciplina y constancia.',
  },
  {
    title: 'Running',
    description:
      'Sigo entrenando y compitiendo fuera del agua: corrí la media maratón de El Puerto de Santa María en 2026, con la maratón completa como objetivo a largo plazo.',
    cta: { label: 'Ver actividad en Strava', href: 'https://strava.app.link/zoB6vMhHD6b' },
  },
  {
    title: 'Gimnasio y nutrición',
    description:
      'Entreno con regularidad, lo que me ha llevado a formarme por mi cuenta en nutrición deportiva.',
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'EduVibe',
    period: 'Trabajo Fin de Grado · CFGS DAW · 2024',
    description:
      'Plataforma educativa web para la gestión de clases, tareas y comunicación entre profesores y estudiantes, con roles diferenciados y despliegue containerizado.',
    tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Docker'],
    github: 'https://github.com/javipintado3/Plataforma-Educativa-Interactiva---EduVibe',
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: 'Desarrollador full stack',
    company: 'Viafirma',
    logoUrl: 'https://www.google.com/s2/favicons?domain=viafirma.com&sz=128',
    period: 'sept. 2025 - actualidad',
    duration: '1 año 1 mes',
    location: 'Tomares, Andalucía, España',
    workMode: 'Presencial',
    description:
      'Responsable de nuevas funcionalidades y de la migración a React del panel de gestión de identidad y firma electrónica de Viafirma.',
    bullets: [
      'Lideré la migración completa del panel de administración de identidad y firma electrónica, de Vaadin a React (Hooks, SWR, Material UI), desarrollando desde cero los módulos de usuarios, grupos, certificados digitales, autoridades de certificación y autenticación multifactor.',
      'Diseñé la integración del frontend con la nueva API v2 del producto, sustituyendo la comunicación heredada con el backend.',
      'Colaboré en el sistema de autenticación corporativo, trabajando tanto en su interfaz en React como en su backend en Java (Spring Boot), en los flujos de login, verificación en dos pasos y gestión de sesiones.',
      'Desarrollé en React el sistema de notificaciones de la empresa.',
      'Impulsé la modernización a TypeScript de aplicaciones internas existentes.',
      'Incorporé Claude Code como herramienta avanzada de trabajo, diseñando skills y flujos propios para automatizar tareas de desarrollo, revisión de código y despliegues.',
    ],
    tags: ['React.js', 'TypeScript', 'Spring Boot', 'Material UI'],
  },
  {
    role: 'Desarrollador / IoT Technician',
    company: 'Cibernos',
    logoUrl: 'https://www.google.com/s2/favicons?domain=cibernos.com&sz=128',
    period: 'oct. 2024 - sept. 2025',
    duration: '1 año',
    location: 'Sevilla, Andalucía, España',
    workMode: 'Presencial',
    description:
      'Soporte y gestión remota de una red de dispositivos IoT distribuidos, combinando automatización en Python con despliegues en contenedores.',
    bullets: [
      'Di soporte remoto a una red distribuida de dispositivos IoT, diagnosticando y resolviendo incidencias de conectividad y funcionamiento en producción.',
      'Instalé y configuré contenedores Docker para desplegar plataformas de virtualización y orquestación de flujos de datos.',
      'Automaticé pruebas y el procesado de datos con scripts en Python, adaptando también el comportamiento de los sensores a cada despliegue.',
      'Integré dispositivos IoT en plataformas centralizadas de monitorización mediante el protocolo MQTT.',
      'Administré la asignación de red de los dispositivos conectados mediante DHCP.',
    ],
    tags: ['Docker', 'Python', 'MQTT', 'DHCP'],
  },
  {
    role: 'Desarrollador full stack',
    company: 'Eviden',
    logoUrl: 'https://www.google.com/s2/favicons?domain=eviden.com&sz=128',
    period: 'mar. 2024 - jun. 2024',
    duration: '4 meses · Contrato de prácticas',
    location: 'Sevilla, Andalucía, España',
    workMode: 'Híbrido',
    description:
      'Formación intensiva en Angular, Spring Boot y Git, seguida del desarrollo en equipo del prototipo funcional de una aplicación interna.',
    bullets: [
      'Completé 4 semanas de formación intensiva en Angular, Spring Boot y Git como preparación técnica previa al proyecto.',
      'Formé parte de un equipo de 6 personas que diseñó y construyó desde cero el prototipo funcional de una aplicación interna, con metodología Scrum.',
      'Desarrollé funcionalidades tanto en el frontend, con Angular, como en el backend, con Spring Boot.',
      'Participé en todas las fases del proyecto, desde la conceptualización y el diseño hasta las pruebas y la demo final.',
    ],
    tags: ['Angular', 'Spring Boot', 'Git', 'Scrum'],
  },
  {
    role: 'Técnico informático',
    company: 'Casa Hospital San Juan de Dios',
    logoUrl: '/logos/san-juan-de-dios.svg',
    period: 'mar. 2022 - jun. 2022',
    duration: '4 meses · Contrato de prácticas',
    location: 'Bormujos, Andalucía, España',
    workMode: 'Presencial',
    description:
      'Soporte técnico y gestión de incidencias en el hospital, con administración de accesos de usuario a través de Active Directory.',
    bullets: [
      'Diagnostiqué y reparé equipos informáticos, resolviendo incidencias de hardware y software del personal médico y administrativo.',
      'Administré permisos y cuentas de usuario mediante Active Directory, garantizando un acceso adecuado a los recursos según cada perfil.',
      'Di soporte técnico presencial a los distintos departamentos, priorizando las incidencias críticas en un entorno asistencial.',
    ],
    tags: ['Active Directory', 'Resolución de problemas'],
  },
];
