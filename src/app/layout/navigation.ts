import { IconName } from '../shared/icons/icons';

export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface NavItem {
  readonly id: SectionId;
  readonly label: string;
  readonly icon: IconName;
  readonly inTopBar: boolean;
  readonly inBottomNav: boolean;
}

// Page order. The `icon` is only rendered in the bottom nav; top-bar destinations show text pills.
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home', inTopBar: false, inBottomNav: true },
  { id: 'about', label: 'About', icon: 'person', inTopBar: true, inBottomNav: false },
  { id: 'experience', label: 'Experience', icon: 'work', inTopBar: true, inBottomNav: true },
  { id: 'projects', label: 'Projects', icon: 'folder', inTopBar: true, inBottomNav: true },
  { id: 'skills', label: 'Skills', icon: 'document', inTopBar: true, inBottomNav: false },
  { id: 'contact', label: 'Contact', icon: 'mail', inTopBar: true, inBottomNav: true },
];

export const TOP_BAR_ITEMS: readonly NavItem[] = NAV_ITEMS.filter((item) => item.inTopBar);

// Explicit order for the bottom bar: Home first, then Projects (its own route) before Experience.
const BOTTOM_NAV_ORDER: readonly SectionId[] = ['home', 'projects', 'experience', 'contact'];
export const BOTTOM_NAV_ITEMS: readonly NavItem[] = BOTTOM_NAV_ORDER.flatMap((id) =>
  NAV_ITEMS.filter((item) => item.id === id),
);
