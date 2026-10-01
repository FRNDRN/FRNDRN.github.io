import { Locale } from '../shared/i18n/locale';
import { EducationItem } from './education';
import { Experience } from './experience';
import { NowItem } from './now-item';
import { Profile } from './profile';
import { Project } from './project';
import { SkillGroup } from './skill';

export interface PortfolioContent {
  readonly profile: Profile;
  readonly experiences: readonly Experience[];
  readonly projects: readonly Project[];
  readonly skills: readonly SkillGroup[];
  readonly education: readonly EducationItem[];
  readonly now: readonly NowItem[];
}

// Fictional placeholder content. Everything here is invented; only the shapes are final.
export function buildPortfolio(locale: Locale): PortfolioContent {
  const t = (en: string, es: string): string => (locale === 'es' ? es : en);

  const profile: Profile = {
    name: 'Sam Rivera',
    role: t('Embedded & Web Engineer', 'Ingeniería embebida y web'),
    location: t('Berlin, Germany', 'Berlín, Alemania'),
    tagline: t(
      'I build software that talks to hardware — from firmware and signal paths up to the interfaces people actually use.',
      'Construyo software que habla con el hardware — del firmware y las señales hasta las interfaces que la gente realmente usa.',
    ),
    about: [
      t(
        'I work across the boundary between electronics and software, where a design decision on one side quietly reshapes the other.',
        'Trabajo en la frontera entre la electrónica y el software, donde una decisión de diseño de un lado cambia en silencio el otro.',
      ),
      t(
        'Most of my work starts at a bench with an instrument and ends in a browser, and I like owning that whole path.',
        'La mayoría de mi trabajo empieza en una mesada con un instrumento y termina en un navegador, y me gusta ser dueño de todo ese camino.',
      ),
    ],
    stats: [
      { value: '6+', label: t('years shipping', 'años entregando') },
      { value: '30+', label: t('boards bring-up', 'placas puestas en marcha') },
      { value: '4', label: t('domains', 'dominios') },
    ],
    links: {
      email: 'hello@example.com',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
  };

  const experiences: readonly Experience[] = [
    {
      id: 'exp-lab',
      role: t('Systems Engineer', 'Ingeniería de sistemas'),
      organization: t('a test-and-measurement company', 'una empresa de test y medición'),
      team: t('Instruments team', 'Equipo de instrumentos'),
      location: t('Berlin, Germany', 'Berlín, Alemania'),
      start: '2023-03',
      highlights: [
        t(
          'Built a desktop platform that drives programmable sources and lab instruments over USB.',
          'Construí una plataforma de escritorio que maneja fuentes programables e instrumentos de laboratorio por USB.',
        ),
        t(
          'Reworked instrument command sequencing so long test runs stopped stalling.',
          'Rehíce la secuencia de comandos de los instrumentos para que las corridas largas dejaran de trabarse.',
        ),
        t(
          'Owned the reporting pipeline, from editable templates to exported documents.',
          'Fui dueño del sistema de reportes, de las plantillas editables a los documentos exportados.',
        ),
      ],
      moreHighlights: [
        t(
          'Designed forward and backward compatible data migrations.',
          'Diseñé migraciones de datos compatibles hacia adelante y hacia atrás.',
        ),
        t(
          'Added compile-time feature flags per instrument family.',
          'Agregué feature flags de compilación por familia de instrumentos.',
        ),
      ],
      stack: ['Angular', 'TypeScript', 'C++', 'CMake', 'SCPI'],
    },
    {
      id: 'exp-robotics',
      role: t('Firmware Developer', 'Desarrollo de firmware'),
      organization: t('a robotics scale-up', 'una scale-up de robótica'),
      location: t('Remote', 'Remoto'),
      start: '2021-01',
      end: '2023-02',
      highlights: [
        t(
          'Wrote motor-control and sensor firmware for a fleet of indoor robots.',
          'Escribí firmware de control de motores y sensores para una flota de robots de interior.',
        ),
        t(
          'Shipped an over-the-air update path that cut field visits sharply.',
          'Entregué un camino de actualización OTA que redujo mucho las visitas a campo.',
        ),
      ],
      stack: ['C', 'FreeRTOS', 'Python', 'ROS', 'Protobuf'],
    },
  ];

  const projects: readonly Project[] = [
    {
      slug: 'sensor-hub',
      title: t('Modular sensor hub', 'Hub de sensores modular'),
      summary: t(
        'A stackable board that reads a dozen sensors and streams calibrated data over one cable.',
        'Una placa apilable que lee una docena de sensores y transmite datos calibrados por un solo cable.',
      ),
      categories: ['embedded', 'robotics'],
      status: 'completed',
      featured: true,
      context: t('Personal project · 2024', 'Proyecto personal · 2024'),
      origin: t('Personal project · 2024', 'Proyecto personal · 2024'),
      metrics: [
        { value: '12', label: t('sensors', 'sensores') },
        { value: '1 kHz', label: t('sample rate', 'muestreo') },
        { value: '<2 ms', label: t('latency', 'latencia') },
      ],
      highlight: t('I²C · SPI · USB-CDC', 'I²C · SPI · USB-CDC'),
      stack: ['C++', 'STM32', 'FreeRTOS', 'Protobuf'],
      hasCaseStudy: true,
      links: [
        { label: t('Code', 'Código'), url: 'https://github.com/' },
        { label: t('Schematics', 'Esquemáticos'), url: 'https://example.com/' },
      ],
    },
    {
      slug: 'fleet-dashboard',
      title: t('Fleet dashboard', 'Panel de flota'),
      summary: t(
        'A live dashboard that tracks dozens of robots and replays any run second by second.',
        'Un panel en vivo que sigue decenas de robots y reproduce cualquier corrida segundo a segundo.',
      ),
      categories: ['web'],
      status: 'completed',
      featured: false,
      context: t('Team project · 2023', 'Proyecto en equipo · 2023'),
      origin: t('Team project · 2023', 'Proyecto en equipo · 2023'),
      metrics: [
        { value: '40+', label: t('robots', 'robots') },
        { value: '60 fps', label: t('replay', 'reproducción') },
      ],
      highlight: t('signals · zoneless · SSR', 'signals · zoneless · SSR'),
      stack: ['Angular', 'RxJS', 'D3', 'WebSocket'],
      hasCaseStudy: false,
      links: [{ label: t('Code', 'Código'), url: 'https://github.com/' }],
    },
    {
      slug: 'gesture-model',
      title: t('On-device gesture model', 'Modelo de gestos en el dispositivo'),
      summary: t(
        'A tiny model that recognises hand gestures from an accelerometer without leaving the chip.',
        'Un modelo diminuto que reconoce gestos de la mano desde un acelerómetro sin salir del chip.',
      ),
      categories: ['machine-learning', 'embedded'],
      status: 'in-progress',
      featured: false,
      context: t('Personal project · 2025', 'Proyecto personal · 2025'),
      origin: t('Personal project · 2025', 'Proyecto personal · 2025'),
      metrics: [
        { value: '94%', label: t('accuracy', 'precisión') },
        { value: '48 kB', label: t('model size', 'tamaño') },
      ],
      highlight: t('TinyML · quantized', 'TinyML · cuantizado'),
      stack: ['Python', 'TensorFlow Lite', 'C'],
      hasCaseStudy: false,
      links: [{ label: t('Notes', 'Notas'), url: 'https://example.com/' }],
    },
    {
      slug: 'line-follower',
      title: t('Line-follower rover', 'Rover sigue-líneas'),
      summary: t(
        'A small rover that maps a track on the fly and tunes its own controller between laps.',
        'Un rover chico que mapea la pista al vuelo y ajusta su propio controlador entre vueltas.',
      ),
      categories: ['robotics'],
      status: 'completed',
      featured: false,
      context: t('Personal project · 2022', 'Proyecto personal · 2022'),
      origin: t('Personal project · 2022', 'Proyecto personal · 2022'),
      metrics: [
        { value: '2.1 m/s', label: t('top speed', 'velocidad') },
        { value: 'PID', label: t('controller', 'controlador') },
      ],
      highlight: t('closed-loop control', 'control en lazo cerrado'),
      stack: ['C', 'Arduino', 'MATLAB'],
      hasCaseStudy: false,
      links: [{ label: t('Code', 'Código'), url: 'https://github.com/' }],
    },
    {
      slug: 'scpi-console',
      title: t('SCPI console', 'Consola SCPI'),
      summary: t(
        'A browser console that speaks to bench instruments and logs every exchange.',
        'Una consola de navegador que habla con instrumentos de banco y registra cada intercambio.',
      ),
      categories: ['web', 'embedded'],
      status: 'completed',
      featured: false,
      context: t('Personal project · 2023', 'Proyecto personal · 2023'),
      origin: t('Personal project · 2023', 'Proyecto personal · 2023'),
      metrics: [
        { value: '5', label: t('instruments', 'instrumentos') },
        { value: 'USB', label: t('transport', 'transporte') },
      ],
      highlight: t('WebUSB · SCPI', 'WebUSB · SCPI'),
      stack: ['Angular', 'WebUSB', 'TypeScript'],
      hasCaseStudy: false,
      links: [{ label: t('Code', 'Código'), url: 'https://github.com/' }],
    },
    {
      slug: 'power-logger',
      title: t('Power logger', 'Registrador de consumo'),
      summary: t(
        'A pocket logger that captures current draw and plots a whole day of it in the browser.',
        'Un registrador de bolsillo que captura el consumo de corriente y grafica un día entero en el navegador.',
      ),
      categories: ['embedded', 'web'],
      status: 'in-progress',
      featured: false,
      context: t('Personal project · 2025', 'Proyecto personal · 2025'),
      origin: t('Personal project · 2025', 'Proyecto personal · 2025'),
      metrics: [
        { value: '10 µA', label: t('resolution', 'resolución') },
        { value: '24 h', label: t('logging', 'registro') },
      ],
      highlight: t('INA228 · CSV export', 'INA228 · exporta CSV'),
      stack: ['C++', 'ESP32', 'Angular'],
      hasCaseStudy: false,
      links: [{ label: t('Code', 'Código'), url: 'https://github.com/' }],
    },
  ];

  const skills: readonly SkillGroup[] = [
    {
      id: 'hardware',
      title: t('Hardware', 'Hardware'),
      subtitle: t('boards, buses and bring-up', 'placas, buses y puesta en marcha'),
      glyph: 'HW',
      tone: 'primary',
      items: ['STM32', 'ESP32', 'KiCad', 'I²C', 'SPI', 'UART', t('Oscilloscope', 'Osciloscopio')],
      highlightedItems: [t('Logic analyzer', 'Analizador lógico'), 'DMM'],
    },
    {
      id: 'software',
      title: t('Software', 'Software'),
      subtitle: t('from firmware to frontend', 'del firmware al frontend'),
      glyph: '</>',
      tone: 'tertiary',
      items: ['C', 'C++', 'TypeScript', 'Angular', 'Python', 'FreeRTOS', 'CMake'],
    },
    {
      id: 'tooling',
      title: t('Tooling', 'Herramientas'),
      tone: 'outlined',
      items: ['Git', 'Linux', 'Docker', 'GitHub Actions', 'Vitest'],
    },
    {
      id: 'methods',
      title: t('Methods', 'Métodos'),
      tone: 'outlined',
      items: [t('Testing', 'Testing'), t('Code review', 'Code review'), t('Docs', 'Documentación')],
      highlightedItems: [t('Signal integrity', 'Integridad de señal')],
    },
  ];

  const education: readonly EducationItem[] = [
    {
      id: 'edu-degree',
      kind: 'degree',
      meta: t('2015 — 2020 · 5-year degree', '2015 — 2020 · carrera de 5 años'),
      title: t('BSc in Electronics Engineering', 'Ingeniería Electrónica'),
      institution: t('Riverside Institute of Technology', 'Instituto Tecnológico Riverside'),
    },
    {
      id: 'edu-paper',
      kind: 'publication',
      meta: t('2021 · conference paper', '2021 · paper de conferencia'),
      title: t('Low-power sensor fusion at the edge', 'Fusión de sensores de bajo consumo en el borde'),
      link: { label: t('Read', 'Leer'), url: 'https://example.com/' },
    },
  ];

  const now: readonly NowItem[] = [
    {
      title: t('Shrinking a model', 'Achicando un modelo'),
      description: t(
        'Getting a gesture model under 50 kB so it runs on a microcontroller.',
        'Llevando un modelo de gestos por debajo de 50 kB para que corra en un microcontrolador.',
      ),
    },
    {
      title: t('Reading on RF', 'Leyendo sobre RF'),
      description: t(
        'Working through antenna matching so my next board stops dropping packets.',
        'Estudiando matching de antenas para que mi próxima placa deje de perder paquetes.',
      ),
    },
    {
      title: t('Writing it down', 'Documentando'),
      description: t(
        'Turning bench notes into short posts other engineers can follow.',
        'Convirtiendo notas de banco en posts cortos que otros ingenieros puedan seguir.',
      ),
    },
  ];

  return { profile, experiences, projects, skills, education, now };
}
