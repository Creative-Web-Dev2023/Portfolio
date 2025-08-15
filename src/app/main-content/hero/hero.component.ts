import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  // Steuert, ob das Menü geöffnet ist
  menuOpen: boolean = false;
  // Wird aufgerufen, wenn das Menü umgeschaltet wird (z.B. Checkbox)
  onMenuToggle(ev: Event) {
    // Prüft, ob das Menü geöffnet (checked) ist
    const checked = (ev.target as HTMLInputElement).checked;
    // Fügt der Body-Klasse 'no-scroll' hinzu oder entfernt sie, um Scrollen zu verhindern/erlauben
    document.body.classList.toggle('no-scroll', checked);
  }

  // Wird beim Navigieren aufgerufen, um das Menü zu schließen
  onNavigate() {
    // Holt das Menü-Checkbox-Element
    const box = document.getElementById( 'menuToggle' ) as HTMLInputElement | null;
    // Setzt die Checkbox auf nicht ausgewählt (Menü schließen)
    if (box) box.checked = false;
    // Entfernt die 'no-scroll'-Klasse vom Body
    document.body.classList.remove('no-scroll');
  }

  // Schließt das Menü (setzt menuOpen auf false)
  public closeMenu(): void {
    this.menuOpen = false;
  }

  // Hört auf Escape-Taste und schließt das Menü, wenn es offen ist
  @HostListener('document:keydown.escape')
  onEsc() {
    // Holt das Menü-Checkbox-Element
    const box = document.getElementById('menuToggle') as HTMLInputElement | null;
    // Wenn das Menü offen ist, schließe es und entferne 'no-scroll'
    if (box && box.checked) {
      box.checked = false;
      document.body.classList.remove('no-scroll');
    }
  }
}
