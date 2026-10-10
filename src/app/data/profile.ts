import { ImageAsset } from './image-asset';
import { Stat } from './stat';

export interface ProfileLinks {
  readonly email: string;
  readonly linkedin: string;
  readonly github: string;
  readonly cv: string | null;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly tagline: string;
  readonly about: readonly string[];
  readonly stats: readonly Stat[];
  readonly photo: ImageAsset | null;
  readonly links: ProfileLinks;
}
