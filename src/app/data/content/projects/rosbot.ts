import { Project } from '../../project';
import { Translate } from '../translate';

export function rosbot(t: Translate): Project {
  return {
    slug: 'rosbot',
    title: 'ROSbot',
    summary: t(
      'Side project: an autonomous mobile robot on ROS 2, set up in a containerized development environment.',
      'Proyecto personal: un robot móvil autónomo sobre ROS 2, montado en un entorno de desarrollo containerizado.',
    ),
    categories: ['robotics'],
    status: 'in-progress',
    featured: false,
    context: t('Side project · 2026', 'Proyecto personal · 2026'),
    origin: t('Side project · 2026', 'Proyecto personal · 2026'),
    metrics: [],
    highlight: null,
    stack: ['ROS 2', 'Docker'],
    image: {
      src: '/images/projects/rosbot.svg',
      alt: t(
        'Render of the planned four-wheel chassis: rear drive motors, Ackermann steering, 2D lidar and camera.',
        'Render del chasis de cuatro ruedas planificado: motores traseros, dirección Ackermann, lidar 2D y cámara.',
      ),
    },
    caption: t(
      'FIG. 03 — Planned chassis: Ackermann steering, 2D lidar and camera',
      'FIG. 03 — Chasis planificado: dirección Ackermann, lidar 2D y cámara',
    ),
    hasCaseStudy: false,
    links: [],
  };
}
