import { Profile } from '../profile';
import { Translate } from './translate';

export function profileContent(t: Translate): Profile {
  return {
    name: 'Franco Andrian',
    role: t(
      'Electronics Engineer · Software & Firmware Engineer',
      'Ingeniero en Electrónica · Ingeniero de Software y Firmware',
    ),
    location: t('Paraná, Argentina', 'Paraná, Argentina'),
    tagline: t(
      'Electronics engineer building real-time test platforms: Angular interfaces and a multithreaded C++ REST server that control power sources and instruments, backed by hands-on hardware work with custom PCBs and single-board computers.',
      'Ingeniero en electrónica que construye plataformas de ensayo en tiempo real: interfaces en Angular y un servidor REST en C++ multihilo que controlan fuentes de potencia e instrumentos, con experiencia práctica en hardware, PCBs a medida y computadoras de placa única.',
    ),
    about: [
      t(
        "I'm an Electronics Engineer at PPST Argentina, working for Pacific Power Source. Since its first version I've built a platform for IEC 61000 power-quality compliance testing: an Angular + Electron interface over a multithreaded C++ REST server that controls programmable power sources and other electronic devices over USB and LAN via SCPI.",
        'Soy ingeniero en electrónica en PPST Argentina, trabajando para Pacific Power Source. Desde su primera versión construyo una plataforma para ensayos de conformidad de calidad de energía IEC 61000: una interfaz en Angular + Electron sobre un servidor REST en C++ multihilo que controla fuentes de potencia programables y otros dispositivos electrónicos por USB y LAN mediante SCPI.',
      ),
      t(
        'Before that, my final degree project, a 360° wildlife camera trap, brought together a custom PCB, a Raspberry Pi + Arduino core and a PyQt control app.',
        'Antes, mi proyecto final de carrera, una cámara trampa de 360° para monitoreo de fauna, combinó una PCB a medida, un núcleo con Raspberry Pi + Arduino y una app de control en PyQt.',
      ),
    ],
    stats: [
      {
        value: '3+ yrs',
        label: t(
          'in industry, building test platforms',
          'en la industria, construyendo plataformas de ensayo',
        ),
      },
      {
        value: '6-year',
        label: t('Electronics Engineering degree', 'carrera de Ingeniería Electrónica'),
      },
      { value: 'ES · EN', label: t('Spanish native, English B2', 'español nativo, inglés B2') },
    ],
    photo: {
      src: '/images/profile.webp',
      alt: t('Portrait of Franco Andrian', 'Retrato de Franco Andrian'),
    },
    links: {
      email: 'francoarielandrian@gmail.com',
      linkedin: 'https://www.linkedin.com/in/francoandrian',
      github: 'https://github.com/FRNDRN?tab=repositories',
      cv: null,
    },
  };
}
