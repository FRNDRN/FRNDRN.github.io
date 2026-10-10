import { Project } from '../../project';
import { Translate } from '../translate';

export function wildlifeMonitoring(t: Translate): Project {
  return {
    slug: 'wildlife-monitoring',
    title: t('Intelligent Wildlife Monitoring System', 'Sistema inteligente de monitoreo de fauna'),
    summary: t(
      'A field station that detects motion in any direction, turns to it, photographs day and night, and catalogs every capture by species. A custom PCB, a Raspberry Pi + Arduino Nano core, a PyQt control app and transfer-learning classifiers.',
      'Una estación de campo que detecta movimiento en cualquier dirección, gira hacia él, fotografía de día y de noche y cataloga cada captura por especie. Una PCB a medida, un núcleo con Raspberry Pi + Arduino Nano, una app de control en PyQt y clasificadores por transfer learning.',
    ),
    categories: ['embedded', 'machine-learning'],
    status: 'completed',
    featured: false,
    context: t('Final degree project · 2023', 'Proyecto final de carrera · 2023'),
    origin: t(
      'Final degree project · National Technological University',
      'Proyecto final de carrera · Universidad Tecnológica Nacional',
    ),
    metrics: [
      { value: '15 m', label: t('motion detection range', 'alcance de detección') },
      { value: '6', label: t('species classified', 'especies clasificadas') },
    ],
    highlight: 'Raspberry Pi · Arduino Nano · PCB · PyQt',
    stack: [
      'Raspberry Pi',
      'Arduino Nano',
      'PCB design',
      'KiCad',
      'Python',
      'PyQt',
      'VGG16 / VGG19',
    ],
    image: {
      src: '/images/projects/wildlife-camera-trap.svg',
      alt: t(
        'Render of the camera trap on a pole: solar panel, PIR sensor head picking up the heat of a deer and a rotating camera enclosure with infrared LEDs on a side bracket.',
        'Render de la cámara trampa sobre un poste: panel solar, cabezal de sensores PIR que capta el calor de un ciervo y gabinete giratorio de la cámara con LEDs infrarrojos sobre un soporte lateral.',
      ),
    },
    caption: null,
    hasCaseStudy: false,
    links: [
      { label: t('Report', 'Informe'), url: 'https://ria.utn.edu.ar/handle/20.500.12272/8159' },
    ],
  };
}
