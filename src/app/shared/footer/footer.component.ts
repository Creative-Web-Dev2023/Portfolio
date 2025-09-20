import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeroLogoComponent } from "../hero-logo/hero-logo.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, HeroLogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
}
