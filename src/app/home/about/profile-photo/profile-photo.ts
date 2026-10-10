import { Component, input, InputSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageAsset } from '../../../data/image-asset';

// M3 "cookie" shape: 9 lobes on a 380x380 viewBox, sampled as one closed path.
function cookiePath(): string {
  const center: number = 190;
  const baseRadius: number = 172;
  const amplitude: number = 0.055;
  const lobes: number = 9;
  const steps: number = 180;
  const points: string[] = [];
  for (let i: number = 0; i <= steps; i++) {
    const angle: number = (i / steps) * Math.PI * 2;
    const radius: number = baseRadius * (1 + amplitude * Math.cos(lobes * angle));
    const x: number = center + radius * Math.cos(angle);
    const y: number = center + radius * Math.sin(angle);
    points.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M${points.join('L')}Z`;
}

const COOKIE_PATH: string = cookiePath();

@Component({
  selector: 'app-profile-photo',
  imports: [MatIconModule],
  styleUrl: './profile-photo.scss',
  templateUrl: './profile-photo.html',
})
export class ProfilePhoto {
  // Inputs
  public readonly photo: InputSignal<ImageAsset | null> = input<ImageAsset | null>(null);

  // View state
  protected readonly path: string = COOKIE_PATH;
}
