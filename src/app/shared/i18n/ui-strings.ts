import { ProjectCategory } from '../../data/project';
import { Locale } from './locale';

interface SectionCopy {
  readonly title: string;
}

export interface UiStrings {
  readonly common: {
    readonly skipToContent: string;
    readonly opensInNewTab: string;
    readonly home: string;
  };
  readonly nav: {
    readonly home: string;
    readonly about: string;
    readonly experience: string;
    readonly projects: string;
    readonly skills: string;
    readonly contact: string;
    readonly sectionsAria: string;
    readonly primaryAria: string;
  };
  readonly theme: {
    readonly prefix: string;
    readonly switchTo: string;
    readonly system: string;
    readonly light: string;
    readonly dark: string;
  };
  readonly language: {
    readonly prefix: string;
    readonly switchTo: string;
    readonly english: string;
    readonly spanish: string;
  };
  readonly hero: {
    readonly sectionAria: string;
    readonly viewProjects: string;
    readonly downloadCv: string;
    readonly linkedin: string;
    readonly github: string;
    readonly email: string;
  };
  readonly sections: {
    readonly about: SectionCopy;
    readonly experience: SectionCopy;
    readonly projects: SectionCopy & { readonly subtitle: string };
    readonly skills: SectionCopy;
    readonly education: SectionCopy;
    readonly contact: SectionCopy;
  };
  readonly experience: {
    readonly current: string;
    readonly showAll: string;
    readonly showLess: string;
    readonly present: string;
    readonly stackAria: string;
  };
  readonly projects: {
    readonly featured: string;
    readonly inProgress: string;
    readonly readCaseStudy: string;
    readonly seeAll: string;
    readonly filterAria: string;
    readonly all: string;
    readonly categories: Record<ProjectCategory, string>;
    readonly stackAria: string;
    readonly backHome: string;
  };
  readonly contact: {
    readonly downloadCvPdf: string;
  };
  readonly footer: {
    readonly builtWith: string;
  };
}

const EN: UiStrings = {
  common: {
    skipToContent: 'Skip to content',
    opensInNewTab: '(opens in a new tab)',
    home: 'Home',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    sectionsAria: 'Sections',
    primaryAria: 'Primary',
  },
  theme: {
    prefix: 'Theme:',
    switchTo: 'Switch to',
    system: 'system',
    light: 'light',
    dark: 'dark',
  },
  language: {
    prefix: 'Language:',
    switchTo: 'Switch to',
    english: 'English',
    spanish: 'Spanish',
  },
  hero: {
    sectionAria: 'Introduction',
    viewProjects: 'View projects',
    downloadCv: 'Download CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  sections: {
    about: { title: 'About' },
    experience: { title: 'Experience' },
    projects: {
      title: 'Projects',
      subtitle: 'Hardware, firmware and software projects.',
    },
    skills: { title: 'Skills' },
    education: { title: 'Education & publications' },
    contact: {
      title: 'Get in touch',
    },
  },
  experience: {
    current: 'Current',
    showAll: 'Show all responsibilities',
    showLess: 'Show less',
    present: 'Present',
    stackAria: 'Tech stack',
  },
  projects: {
    featured: 'Featured',
    inProgress: 'In progress',
    readCaseStudy: 'Read case study',
    seeAll: 'See all projects',
    filterAria: 'Filter projects',
    all: 'All',
    categories: {
      embedded: 'Embedded',
      web: 'Web',
      'machine-learning': 'Machine Learning',
      robotics: 'Robotics',
    },
    stackAria: 'Tech stack',
    backHome: '← Home',
  },
  contact: {
    downloadCvPdf: 'Download CV (PDF)',
  },
  footer: {
    builtWith: 'built with',
  },
};

const ES: UiStrings = {
  common: {
    skipToContent: 'Saltar al contenido',
    opensInNewTab: '(se abre en una pestaña nueva)',
    home: 'Inicio',
  },
  nav: {
    home: 'Inicio',
    about: 'Perfil',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Skills',
    contact: 'Contacto',
    sectionsAria: 'Secciones',
    primaryAria: 'Principal',
  },
  theme: {
    prefix: 'Tema:',
    switchTo: 'Cambiar a',
    system: 'sistema',
    light: 'claro',
    dark: 'oscuro',
  },
  language: {
    prefix: 'Idioma:',
    switchTo: 'Cambiar a',
    english: 'inglés',
    spanish: 'español',
  },
  hero: {
    sectionAria: 'Introducción',
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  sections: {
    about: { title: 'Perfil' },
    experience: { title: 'Experiencia' },
    projects: {
      title: 'Proyectos',
      subtitle: 'Proyectos de hardware, firmware y software.',
    },
    skills: { title: 'Skills' },
    education: { title: 'Educación y publicaciones' },
    contact: {
      title: 'Contacto',
    },
  },
  experience: {
    current: 'Actual',
    showAll: 'Ver todas las responsabilidades',
    showLess: 'Ver menos',
    present: 'Actualidad',
    stackAria: 'Stack técnico',
  },
  projects: {
    featured: 'Destacado',
    inProgress: 'En curso',
    readCaseStudy: 'Ver el caso',
    seeAll: 'Ver todos los proyectos',
    filterAria: 'Filtrar proyectos',
    all: 'Todos',
    categories: {
      embedded: 'Embebidos',
      web: 'Web',
      'machine-learning': 'Machine Learning',
      robotics: 'Robótica',
    },
    stackAria: 'Stack técnico',
    backHome: '← Inicio',
  },
  contact: {
    downloadCvPdf: 'Descargar CV (PDF)',
  },
  footer: {
    builtWith: 'hecho con',
  },
};

export const UI_STRINGS: Record<Locale, UiStrings> = { en: EN, es: ES };
