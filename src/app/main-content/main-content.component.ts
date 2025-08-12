import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';  

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [ HeroComponent] // (hier später deine Sektionen rein)
})
export class MainContentComponent {}
