import { Component } from '@angular/core';
import { MenuBarComponent } from '../shared/nav/menu-bar/menu-bar.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [MenuBarComponent] // (hier später deine Sektionen rein)
})
export class MainContentComponent {}
