import { Routes } from '@angular/router';

export const routes: Routes = [
  // HOME (MainContent)
  { path: '', loadComponent: () => import('./main-content/main-content.component').then(m => m.MainContentComponent) },

  // Why me
  { path: 'why-me', loadComponent: () => import('./main-content/why-me/why-me.component').then(m => m.WhyMeComponent) },

  // Skills
  { path: 'skills', loadComponent: () => import('./main-content/my-skills/my-skills.component').then(m => m.SkillsComponent) },

  // Projects
  { path: 'projects', loadComponent: () => import('./main-content/projects/projects.component').then(m => m.ProjectsComponent) },

  // Contact
  { path: 'contact', loadComponent: () => import('./main-content/contact/contact.component').then(m => m.ContactComponent) },

  { path: '**', redirectTo: '' }
];
