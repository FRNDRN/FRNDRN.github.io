import { EducationItem } from '../education';
import { Translate } from './translate';

export function educationContent(t: Translate): readonly EducationItem[] {
  return [
    {
      id: 'electronics-engineering',
      kind: 'degree',
      meta: t('2017 — 2023 · 6-year degree', '2017 — 2023 · carrera de 6 años'),
      title: t('Electronics Engineering', 'Ingeniería Electrónica'),
      institution: t(
        'Universidad Tecnológica Nacional (National Technological University), Facultad Regional Paraná, Argentina',
        'Universidad Tecnológica Nacional, Facultad Regional Paraná, Argentina',
      ),
      link: null,
    },
    {
      id: 'wildlife-report',
      kind: 'publication',
      meta: t(
        'Final degree report · university repository (RIA)',
        'Informe final de carrera · repositorio universitario (RIA)',
      ),
      title: t(
        'Intelligent Wildlife Monitoring System',
        'Sistema inteligente de monitoreo de fauna',
      ),
      institution: null,
      link: {
        label: t('Read the report', 'Leer el informe'),
        url: 'https://ria.utn.edu.ar/handle/20.500.12272/8159',
      },
    },
  ];
}
