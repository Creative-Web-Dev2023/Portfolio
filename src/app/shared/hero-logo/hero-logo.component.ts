import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-logo',
  standalone: true,
  templateUrl: './hero-logo.component.html',
  styleUrls: ['./hero-logo.component.scss'],
})
export class HeroLogoComponent {
  @Input() name: string = 'G.Ströbl';
  @Input() subtitle: string = 'developer';
}
