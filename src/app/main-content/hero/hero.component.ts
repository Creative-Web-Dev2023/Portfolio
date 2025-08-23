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

  // Öffnet/schließt das Menü
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  // Schließt das Menü (z.B. beim Klick auf einen Link)
  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  // Escape schließt das Menü
  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }
}
