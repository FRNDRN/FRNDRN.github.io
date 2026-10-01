import { IconName } from '../shared/icons/icons';

export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface NavItem {
  readonly id: SectionId;
  readonly icon: IconName;
  readonly inTopBar: boolean;
  readonly inBottomNav: boolean;
}

// Page order. The `icon` is only rendered in the bottom nav; top-bar destinations show text pills.
// Labels come from the i18n string table, keyed by `id`.
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', icon: 'home', inTopBar: false, inBottomNav: true },
  { id: 'about', icon: 'person', inTopBar: true, inBottomNav: false },
  { id: 'experience', icon: 'work', inTopBar: true, inBottomNav: true },
  { id: 'projects', icon: 'folder', inTopBar: true, inBottomNav: true },
  { id: 'skills', icon: 'document', inTopBar: true, inBottomNav: false },
  { id: 'contact', icon: 'mail', inTopBar: true, inBottomNav: true },
];

export const TOP_BAR_ITEMS: readonly NavItem[] = NAV_ITEMS.filter((item) => item.inTopBar);

// Explicit order for the bottom bar: Home first, then Projects (its own route) before Experience.
const BOTTOM_NAV_ORDER: readonly SectionId[] = ['home', 'projects', 'experience', 'contact'];
export const BOTTOM_NAV_ITEMS: readonly NavItem[] = BOTTOM_NAV_ORDER.flatMap((id) =>
  NAV_ITEMS.filter((item) => item.id === id),
);
