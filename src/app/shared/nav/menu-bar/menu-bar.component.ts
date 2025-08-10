import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',           // 👈 muss genauso heißen wie im HTML
  standalone: true,                   // 👈 wichtig
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  imports: []                      
})
export class MenuBarComponent {}

