import { Component } from '@angular/core';
import { SectionAnchor } from '../layout/section-anchor';
import { TraceDivider } from '../shared/ui/trace-divider/trace-divider';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-home',
  imports: [SectionAnchor, TraceDivider, Hero, About, Experience],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
