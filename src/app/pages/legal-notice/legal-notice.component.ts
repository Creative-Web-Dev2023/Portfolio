import { Component } from '@angular/core';
import { HeroLogoComponent } from '../../shared/hero-logo/hero-logo.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeroLogoComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {

}
