import { IconName } from '../shared/icons/icons';

export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface NavItem {
  readonly id: SectionId;
  readonly icon: IconName;
  readonly inTopBar: boolean;
}

// Page order. The `icon` is only rendered in the bottom nav; top-bar destinations show text pills.
// Labels come from the i18n string table, keyed by `id`.
const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', icon: 'home', inTopBar: false },
  { id: 'about', icon: 'person', inTopBar: true },
  { id: 'experience', icon: 'work', inTopBar: true },
  { id: 'projects', icon: 'folder', inTopBar: true },
  { id: 'skills', icon: 'document', inTopBar: true },
  { id: 'contact', icon: 'mail', inTopBar: true },
];

export const TOP_BAR_ITEMS: readonly NavItem[] = NAV_ITEMS.filter((item) => item.inTopBar);

// Every scroll anchor on the home page, in document order (includes sections without a nav item).
export const PAGE_ORDER: readonly string[] = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'education',
  'contact',
];

// The bottom bar has its own order: Home first, then Projects (its own route) before Experience.
const BOTTOM_NAV_ORDER: readonly SectionId[] = ['home', 'projects', 'experience', 'contact'];
export const BOTTOM_NAV_ITEMS: readonly NavItem[] = BOTTOM_NAV_ORDER.flatMap((id) =>
  NAV_ITEMS.filter((item) => item.id === id),
);
