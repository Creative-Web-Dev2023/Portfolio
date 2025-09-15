import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, MenuComponent, PrivacyPolicyComponent],
})
export class AppComponent {
  protected readonly title = signal('portfolio');
}
