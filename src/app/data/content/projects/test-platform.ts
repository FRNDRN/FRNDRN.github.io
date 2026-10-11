import { Project } from '../../project';
import { Translate } from '../translate';

export function testPlatform(t: Translate): Project {
  return {
    slug: 'power-quality-test-platform',
    title: t('Power-quality test platform', 'Plataforma de ensayos de calidad de energía'),
    summary: t(
      'Test suite for EMC and power-quality compliance testing: an Angular + Electron interface driving a multithreaded C++ REST server that controls programmable power sources, DAQ devices and other electronic devices in real time over USB and LAN via SCPI.',
      'Suite de testeo para ensayos de conformidad EMC y de calidad de energía: una interfaz en Angular + Electron que maneja un servidor REST en C++ multihilo que controla fuentes de potencia programables, dispositivos DAQ y otros dispositivos electrónicos en tiempo real por USB y LAN mediante SCPI.',
    ),
    categories: ['web', 'embedded'],
    status: 'completed',
    featured: true,
    context: t('Industry work · 2023 – present', 'Trabajo en la industria · 2023 – presente'),
    origin: t('Industry work · PPST Argentina', 'Trabajo en la industria · PPST Argentina'),
    caption: t(
      'FIG. 01 — Desktop app, C++ REST server and test equipment',
      'FIG. 01 — App de escritorio, servidor REST en C++ y equipos de ensayo',
    ),
    metrics: [
      { value: '6', label: t('IEC 61000 test types', 'tipos de ensayo IEC 61000') },
      { value: '2', label: t('legacy applications migrated', 'aplicaciones heredadas migradas') },
    ],
    highlight: 'USB · SCPI · REST · IEC 61000',
    stack: ['Angular', 'Electron', 'C++', 'Crow', 'RxJS', 'Chart.js'],
    image: {
      src: '/images/projects/test-platform.svg',
      alt: t(
        'Architecture diagram: an Angular + Electron desktop app talks over REST to a multithreaded C++ server that drives power sources, transfer switches, harmonics and flicker analyzers and DAQ devices over USB and LAN.',
        'Diagrama de arquitectura: una app de escritorio en Angular + Electron se comunica por REST con un servidor C++ multihilo que controla fuentes de potencia, conmutadores de transferencia, analizadores de armónicos y flicker y dispositivos DAQ por USB y LAN.',
      ),
    },
    hasCaseStudy: false,
    links: [],
  };
}
