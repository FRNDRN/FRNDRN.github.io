import { Stat } from './stat';

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly tagline: string;
  readonly about: readonly string[];
  readonly stats: readonly Stat[];
  readonly photo?: { readonly src: string; readonly alt: string };
  readonly links: {
    readonly email: string;
    readonly linkedin: string;
    readonly github: string;
    readonly cv?: string;
  };
}
