import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Remove imports for lazy-loaded components

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Update the routes to lazy load the modules
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'edit', loadChildren: () => import('./pages/edit-page/edit-page.module').then(m => m.EditPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about-me-page/about-me-page.module').then(m => m.AboutMePageModule) },
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }