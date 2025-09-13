import { Component, signal } from '@angular/core';
import { MainContentComponent } from "./main-content/main-content.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'],
  imports: [MainContentComponent, RouterOutlet]
})
export class AppComponent {
  protected readonly title = signal('portfolio');
}