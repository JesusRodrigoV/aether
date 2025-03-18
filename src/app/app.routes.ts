import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'QuantumCore - Inicio',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component'),
    title: 'QuantumCore - Productos',
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./pages/products/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent,
      ),
    title: 'QuantumCore - Detalles',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    title: 'QuantumCore - Dashboard',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
    title: 'QuantumCore - Nosotros',
  },
  {
    path: 'innovation',
    loadComponent: () =>
      import('./pages/about/innovation/innovation.component'),
  },
  {
    path: 'excellence',
    loadComponent: () =>
      import('./pages/about/excellence/excellence.component'),
  },
  {
    path: 'sustainability',
    loadComponent: () =>
      import('./pages/about/sustainability/sustainability.component'),
  },
  {
    path: 'contact-sales',
    loadComponent: () =>
      import('./pages/contact-sales/contact-sales.component'),
  },
  {
    path: 'demo-access',
    loadComponent: () => import('./pages/demo-access/demo-access.component'),
    title: 'QuantumCore - Acceso de demostración',
  },
  { path: '**', redirectTo: '' },
];
