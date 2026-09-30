import { Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Skeleton } from '../skeleton/skeleton';

type TagSize = 'default' | 'small';
type TagAppearance = 'outlined' | 'tonal' | 'filled-soft';

@Component({
  selector: 'app-tag-list',
  imports: [MatChipsModule, Skeleton],
  styleUrl: './tag-list.scss',
  templateUrl: './tag-list.html',
  host: {
    '[class.tag-list--small]': "size() === 'small'",
    '[class.tag-list--outlined]': "appearance() === 'outlined'",
    '[class.tag-list--tonal]': "appearance() === 'tonal'",
    '[class.tag-list--filled-soft]': "appearance() === 'filled-soft'",
  },
})
export class TagList {
  readonly tags = input<readonly string[] | undefined>();
  readonly size = input<TagSize>('default');
  readonly appearance = input<TagAppearance>('outlined');
  readonly ariaLabel = input<string>();

  protected readonly placeholders = [0, 1, 2, 3, 4];
}
