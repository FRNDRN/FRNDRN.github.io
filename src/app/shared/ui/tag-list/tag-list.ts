import { Component, input, InputSignal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Skeleton } from '../skeleton/skeleton';

type TagSize = 'default' | 'small';

@Component({
  selector: 'app-tag-list',
  imports: [MatChipsModule, Skeleton],
  styleUrl: './tag-list.scss',
  templateUrl: './tag-list.html',
  host: {
    '[class.tag-list--small]': "size() === 'small'",
  },
})
export class TagList {
  // Inputs
  public readonly tags: InputSignal<readonly string[] | undefined> = input<
    readonly string[] | undefined
  >();
  public readonly size: InputSignal<TagSize> = input<TagSize>('default');
  public readonly ariaLabel: InputSignal<string | undefined> = input<string>();

  // View state
  protected readonly placeholders: readonly number[] = [0, 1, 2, 3, 4];
}
