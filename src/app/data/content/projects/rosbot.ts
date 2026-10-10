import { Project } from '../../project';
import { Translate } from '../translate';

export function rosbot(t: Translate): Project {
  return {
    slug: 'rosbot',
    title: 'ROSbot',
    summary: t(
      'Side project: an autonomous mobile robot on ROS 2, set up in a containerized development environment. Notes and results will be added as it grows.',
      'Proyecto personal: un robot móvil autónomo sobre ROS 2, montado en un entorno de desarrollo containerizado. Se irán agregando notas y resultados a medida que avance.',
    ),
    categories: ['robotics'],
    status: 'in-progress',
    featured: false,
    context: t('Side project · 2026', 'Proyecto personal · 2026'),
    origin: t('Side project · 2026', 'Proyecto personal · 2026'),
    metrics: [],
    highlight: null,
    stack: ['ROS 2', 'Docker'],
    image: null,
    caption: null,
    hasCaseStudy: false,
    links: [],
  };
}
