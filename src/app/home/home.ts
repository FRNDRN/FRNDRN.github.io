import { Component, inject } from '@angular/core';
import { Portfolio } from '../data/portfolio';
import { SectionAnchor } from '../layout/section-anchor';
import { TraceDivider } from '../shared/ui/trace-divider/trace-divider';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { ProjectsSection } from './projects-section/projects-section';
import { Skills } from './skills/skills';
import { Education } from './education/education';
import { Now } from './now/now';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    SectionAnchor,
    TraceDivider,
    Hero,
    About,
    Experience,
    ProjectsSection,
    Skills,
    Education,
    Now,
    Contact,
  ],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly portfolio = inject(Portfolio);
}
