import { Project } from '../../project';
import { Translate } from '../translate';

export function testPlatform(t: Translate): Project {
  return {
    slug: 'power-quality-test-platform',
    title: t('Power-quality test platform', 'Plataforma de ensayos de calidad de energía'),
    summary: t(
      'Desktop platform for IEC 61000 compliance testing: an Angular + Electron interface driving a multithreaded C++ REST server that controls programmable power sources, DAQ devices and other electronic devices in real time over USB and LAN via SCPI.',
      'Plataforma de escritorio para ensayos de conformidad IEC 61000: una interfaz en Angular + Electron que maneja un servidor REST en C++ multihilo que controla fuentes de potencia programables, dispositivos DAQ y otros dispositivos electrónicos en tiempo real por USB y LAN mediante SCPI.',
    ),
    categories: ['web', 'embedded'],
    status: 'completed',
    featured: true,
    context: t('Industry work · 2023 – present', 'Trabajo en la industria · 2023 – presente'),
    origin: t('Industry work · PPST Argentina', 'Trabajo en la industria · PPST Argentina'),
    caption: t(
      'FIG. 01 — Interface, C++ REST server and instruments',
      'FIG. 01 — Interfaz, servidor REST en C++ e instrumentos',
    ),
    metrics: [
      { value: '5', label: t('IEC 61000 test types', 'tipos de ensayo IEC 61000') },
      { value: '2', label: t('legacy applications migrated', 'aplicaciones heredadas migradas') },
    ],
    highlight: 'USB · SCPI · REST · IEC 61000',
    stack: ['Angular', 'Electron', 'C++', 'Crow', 'RxJS', 'Chart.js'],
    image: null,
    hasCaseStudy: false,
    links: [],
  };
}
