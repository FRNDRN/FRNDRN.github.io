import { Component, input } from '@angular/core';
import { Skeleton } from '../../shared/ui/skeleton/skeleton';

@Component({
  selector: 'app-footer',
  imports: [Skeleton],
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  readonly name = input<string | undefined>();

  protected readonly year = new Date().getFullYear();
}
