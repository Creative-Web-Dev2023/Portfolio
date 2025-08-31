import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';  
import { WhyMeComponent } from './why-me/why-me.component';
import{SkillsComponent} from './my-skills/skills.component';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [CommonModule, HeroComponent, WhyMeComponent, SkillsComponent, ProjectsComponent] // (hier später deine Sektionen rein)
 // (hier später deine Sektionen rein)
})
export class MainContentComponent {}
