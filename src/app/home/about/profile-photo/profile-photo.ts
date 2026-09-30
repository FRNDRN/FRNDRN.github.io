import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Photo {
  readonly src: string;
  readonly alt: string;
}

// M3 "cookie" shape: 9 lobes on a 380x380 viewBox, sampled as one closed path.
function cookiePath(): string {
  const center = 190;
  const baseRadius = 172;
  const amplitude = 0.055;
  const lobes = 9;
  const steps = 180;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const radius = baseRadius * (1 + amplitude * Math.cos(lobes * angle));
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    points.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${points.join('L')}Z`;
}

const COOKIE_PATH = cookiePath();

@Component({
  selector: 'app-profile-photo',
  imports: [MatIconModule],
  styleUrl: './profile-photo.scss',
  templateUrl: './profile-photo.html',
})
export class ProfilePhoto {
  readonly photo = input<Photo | undefined>();

  protected readonly path = COOKIE_PATH;
}
