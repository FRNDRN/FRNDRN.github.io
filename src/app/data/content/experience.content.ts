import { Experience } from '../experience';
import { Translate } from './translate';

export function experienceContent(t: Translate): readonly Experience[] {
  return [
    {
      id: 'power-electronics-2023',
      role: t('Software & Firmware Engineer', 'Ingeniero de Software y Firmware'),
      organization: 'PPST Argentina',
      logo: 'ppst',
      team: 'Pacific Power Source',
      location: t('Santa Fe, Argentina', 'Santa Fe, Argentina'),
      start: '2023-07',
      end: null,
      summary: t(
        'Joined as the project started and built, from its first version, a desktop platform for IEC 61000 power-quality compliance testing, used by labs in the US, Europe and China across energy, defense, naval and telecom. An Angular + Electron interface drives a multithreaded C++ REST server that controls programmable power sources and other electronic devices over USB and LAN via SCPI.',
        'Me sumé cuando el proyecto arrancaba y construí, desde su primera versión, una plataforma de escritorio para ensayos de conformidad de calidad de energía IEC 61000, usada por laboratorios de EE. UU., Europa y China en energía, defensa, naval y telecomunicaciones. Una interfaz en Angular + Electron maneja un servidor REST en C++ multihilo que controla fuentes de potencia programables y otros dispositivos electrónicos por USB y LAN mediante SCPI.',
      ),
      highlights: [
        t(
          'Implemented five IEC 61000 test types end to end, from reading the standard to lab validation: 4-11 and 4-34 (voltage dips and interruptions), 4-14 (fluctuations), 4-27 (unbalance) and 4-28 (frequency variation). This included integrating the voltage-dip generator that 4-11, 4-27 and 4-34 rely on, from its USB communication to its full calibration.',
          'Implementé cinco tipos de ensayo IEC 61000 de punta a punta, desde la lectura de la norma hasta la validación en laboratorio: 4-11 y 4-34 (huecos e interrupciones de tensión), 4-14 (fluctuaciones), 4-27 (desequilibrio) y 4-28 (variación de frecuencia). Esto incluyó integrar el generador de huecos de tensión en el que se apoyan 4-11, 4-27 y 4-34, desde su comunicación USB hasta su calibración completa.',
        ),
        t(
          'Made an unreliable legacy instrument dependable by redesigning how the software communicates with it: tests no longer stall or need manual intervention, and they now meet the timing the standards require.',
          'Logré que un instrumento heredado poco confiable funcionara de forma estable rediseñando cómo el software se comunica con él: los ensayos ya no se detienen ni requieren intervención manual, y ahora cumplen los tiempos que exigen las normas.',
        ),
        t(
          'Migrated two complete legacy C# test applications end to end and integrated them into the new platform, adding features they lacked and applying stricter criteria than the standards require.',
          'Migré de punta a punta dos aplicaciones de ensayo heredadas en C# completas y las integré en la nueva plataforma, sumando funciones que no tenían y aplicando criterios más estrictos que los que exigen las normas.',
        ),
      ],
      moreHighlights: [
        t(
          'Built the report system: editable templates and generation to DOCX, PDF and RTF.',
          'Construí el sistema de reportes: plantillas editables y generación a DOCX, PDF y RTF.',
        ),
        t(
          'Designed forward and backward compatible data migrations and compile-time feature flags per test and device family.',
          'Diseñé migraciones de datos compatibles hacia adelante y hacia atrás y feature flags en tiempo de compilación por ensayo y familia de equipos.',
        ),
        t(
          'Integrated USB data-acquisition devices into the platform, with real-time plots of voltage, current and harmonics per phase.',
          'Integré dispositivos de adquisición de datos USB a la plataforma, con gráficos en tiempo real de tensión, corriente y armónicos por fase.',
        ),
        t(
          'Own several areas end to end in a small team, working with testers and engineers in the US, Germany and China.',
          'Llevo varias áreas de punta a punta en un equipo chico, trabajando con testers e ingenieros de EE. UU., Alemania y China.',
        ),
      ],
      stack: [
        'Angular',
        'RxJS',
        'Angular Material',
        'Chart.js',
        'Electron',
        'C++',
        'Crow',
        'SCPI',
        'MCC DAQ',
        'libusb',
        'Boost',
        'Conan',
        'CMake',
      ],
    },
    {
      id: 'internship-2022',
      role: t('Electronics Engineering Intern', 'Pasante de Ingeniería Electrónica'),
      organization: 'VZ Ingeniería',
      logo: null,
      team: null,
      location: t('Paraná, Argentina', 'Paraná, Argentina'),
      start: '2022-03',
      end: '2022-08',
      summary: null,
      highlights: [
        t(
          'Wrote PIC firmware in C and assembly for an autonomous waste-sorting bin prototype, reading sensors and driving actuators.',
          'Escribí el firmware PIC en C y ensamblador para el prototipo de un cesto autónomo que separa residuos, con lectura de sensores y control de actuadores.',
        ),
        t(
          'Designed its schematics and routed the PCB in Altium Designer, documented it with a BOM and flowcharts, and assembled, soldered and tested the prototype through bring-up.',
          'Diseñé sus esquemáticos y ruteé la PCB en Altium Designer, lo documenté con BOM y diagramas de flujo, y armé, soldé y probé el prototipo hasta su puesta en marcha.',
        ),
        t(
          'Scoped an electric thermostat installation for a client: how it works, the wiring needed and its cost.',
          'Definí para un cliente la instalación de un termostato eléctrico: su funcionamiento, el cableado necesario y su costo.',
        ),
      ],
      moreHighlights: [],
      stack: ['PIC', 'MPLAB', 'C', 'Assembly', 'Altium Designer'],
    },
  ];
}
