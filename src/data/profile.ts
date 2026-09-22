export type ExperienceEntry = {
  role: string;
  company: string;
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
    'Soy desarrollador Full Stack con experiencia en el ámbito tecnológico como técnico IoT y técnico informático. Apasionado por el desarrollo de aplicaciones y la programación, busco constantemente nuevas oportunidades para ampliar conocimientos y crecer profesionalmente. Me gusta trabajar en equipo, colaborar en entornos dinámicos y aportar valor mediante una actitud proactiva, capacidad de aprendizaje y compromiso con cada proyecto.',
  email: 'jpintadonav@gmail.com',
  linkedin: 'https://www.linkedin.com/in/javier-pintado-navarro-06811a2ab/',
  github: 'https://github.com/jpintado-viafirma',
  strava: 'https://strava.app.link/aOhraAjHD6b',
};

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Angular', 'Material UI', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Java'],
  },
  {
    title: 'Herramientas',
    skills: ['Git', 'Docker', 'Python', 'Scrum', 'Active Directory', 'Claude Code'],
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
    period: 'oct. 2024 - sept. 2025',
    duration: '1 año',
    location: 'Sevilla, Andalucía, España',
    workMode: 'Presencial',
    description:
      'Gestión y soporte remoto de sistemas IoT distribuidos, con instalación y configuración de contenedores Docker para plataformas de virtualización y orquestación de flujos. Desarrollo de scripts en Python para automatizar pruebas, procesar datos y personalizar el comportamiento de sensores. Configuración de dispositivos IoT mediante protocolos como MQTT para su integración en plataformas centralizadas.',
    tags: ['Docker', 'Python', 'MQTT', 'DHCP'],
  },
  {
    role: 'Desarrollador full stack',
    company: 'Eviden',
    period: 'mar. 2024 - jun. 2024',
    duration: '4 meses · Contrato de prácticas',
    location: 'Sevilla, Andalucía, España',
    workMode: 'Híbrido',
    description:
      'Participé en una formación intensiva de 4 semanas en Angular, Spring Boot y Git, seguida por un proyecto de 4 semanas en el que diseñamos y desarrollamos desde cero el prototipo funcional de una aplicación interna. Equipo de 6 personas con metodología Scrum, contribuyendo en todas las fases: desde la conceptualización hasta la demo final.',
    tags: ['Angular', 'Spring Boot', 'Git', 'Scrum'],
  },
  {
    role: 'Técnico informático',
    company: 'Casa Hospital San Juan de Dios',
    period: 'mar. 2022 - jun. 2022',
    duration: '4 meses · Contrato de prácticas',
    location: 'Bormujos, Andalucía, España',
    workMode: 'Presencial',
    description:
      'Reparación de equipos y gestión de incidencias en el hospital. Administración de permisos de usuario a través de Active Directory, asegurando un acceso adecuado y la gestión eficiente de las cuentas del personal médico y administrativo.',
    tags: ['Active Directory', 'Resolución de problemas'],
  },
];
