import { ProjectCategory } from '../../data/project';
import { Locale } from './locale';

interface SectionCopy {
  readonly overline: string;
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
    readonly overline: string;
    readonly viewProjects: string;
    readonly downloadCv: string;
    readonly linkedin: string;
    readonly github: string;
    readonly email: string;
  };
  readonly scope: {
    readonly caption: string;
  };
  readonly sections: {
    readonly about: SectionCopy;
    readonly experience: SectionCopy;
    readonly projects: SectionCopy & { readonly subtitle: string };
    readonly skills: SectionCopy;
    readonly education: SectionCopy;
    readonly now: SectionCopy;
    readonly contact: SectionCopy & { readonly lead: string };
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
    readonly nextTitle: string;
    readonly nextNote: string;
    readonly stackAria: string;
    readonly pageTitle: string;
    readonly backHome: string;
    readonly pageSubtitle: string;
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
    overline: '// electronics × software',
    viewProjects: 'View projects',
    downloadCv: 'Download CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  scope: {
    caption: 'From silicon to interface — the path every project of mine follows.',
  },
  sections: {
    about: { overline: 'about', title: 'Engineer across the whole stack' },
    experience: { overline: 'experience', title: 'Where I have shipped' },
    projects: {
      overline: 'projects',
      title: 'Selected work',
      subtitle: 'A few things I have designed, built and measured end to end.',
    },
    skills: { overline: 'skills', title: 'Tools I reach for' },
    education: { overline: 'education', title: 'Studies and writing' },
    now: { overline: 'now', title: "What I'm working on" },
    contact: {
      overline: 'contact',
      title: "Let's build something",
      lead: 'Open to hardware-adjacent software work and collaborations. The fastest way to reach me is email.',
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
    nextTitle: 'Next project',
    nextNote: 'each project is one data file — the grid grows by itself',
    stackAria: 'Tech stack',
    pageTitle: 'Projects',
    backHome: '← Home',
    pageSubtitle: 'Everything I have built, filterable by discipline.',
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
    overline: '// electrónica × software',
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  scope: {
    caption: 'Del silicio a la interfaz — el camino que sigue cada proyecto mío.',
  },
  sections: {
    about: { overline: 'perfil', title: 'Ingeniería de punta a punta' },
    experience: { overline: 'experiencia', title: 'Dónde estuve construyendo' },
    projects: {
      overline: 'proyectos',
      title: 'Trabajo seleccionado',
      subtitle: 'Algunas cosas que diseñé, construí y medí de principio a fin.',
    },
    skills: { overline: 'skills', title: 'Herramientas que uso' },
    education: { overline: 'educación', title: 'Estudios y publicaciones' },
    now: { overline: 'now', title: 'En qué estoy trabajando' },
    contact: {
      overline: 'contacto',
      title: 'Construyamos algo',
      lead: 'Disponible para software cercano al hardware y colaboraciones. La vía más rápida es el email.',
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
    nextTitle: 'Próximo proyecto',
    nextNote: 'cada proyecto es un archivo de datos — la grilla crece sola',
    stackAria: 'Stack técnico',
    pageTitle: 'Proyectos',
    backHome: '← Inicio',
    pageSubtitle: 'Todo lo que construí, filtrable por disciplina.',
  },
  contact: {
    downloadCvPdf: 'Descargar CV (PDF)',
  },
  footer: {
    builtWith: 'hecho con',
  },
};

export const UI_STRINGS: Record<Locale, UiStrings> = { en: EN, es: ES };
