import { Component, HostListener } from '@angular/core';
import { HeroLogoComponent } from '../../shared/hero-logo/hero-logo.component';

@Component({ 
  selector: 'app-hero',
  standalone: true,
  imports: [HeroLogoComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  // Steuert, ob das Menü geöffnet ist
  menuOpen: boolean = false;
  currentLang: 'de' | 'en' = 'de';

  // Öffnet/schließt das Menü
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Menü umschalten
    document.body.classList.toggle('no-scroll', this.menuOpen); // Scrollen verhindern, wenn Menü offen
  }

  // Schließt das Menü (z.B. beim Klick auf einen Link)
  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll'); // Scrollen wieder erlauben
  }
 setLanguage(lang: 'de' | 'en'): void {
    this.currentLang = lang;
    // Hier könntest du später Angular i18n oder ngx-translate einbinden
  }
  // Escape schließt das Menü
  @HostListener('document:keydown.escape')
  onEsc() { // Escape-Taste gedrückt
    if (this.menuOpen) { // Wenn das Menü offen ist
      this.closeMenu();  // Menü schließen
    }
  }
}
