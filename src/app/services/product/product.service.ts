import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 'crm',
      name: 'QuantumCRM',
      description: 'Sistema de gestión de clientes con IA predictiva',
      specs: ['Análisis en tiempo real', 'Integración 7G', 'Chatbot emocional'],
    },
    {
      id: 'erp',
      name: 'NexusERP',
      description:
        'Sistema integral de planificación de recursos empresariales',
      specs: [
        'Gestión financiera',
        'Control de inventario',
        'Automatización de procesos',
      ],
    },
    {
      id: 'analytics',
      name: 'DataVision Analytics',
      description: 'Plataforma avanzada de análisis de datos empresariales',
      specs: [
        'Visualización en tiempo real',
        'Machine Learning',
        'Reportes personalizados',
      ],
    },
    {
      id: 'hrms',
      name: 'TalentHub HRMS',
      description: 'Sistema de gestión de recursos humanos y talento',
      specs: [
        'Gestión de nómina',
        'Evaluación de desempeño',
        'Portal del empleado',
      ],
    },
    {
      id: 'ecommerce',
      name: 'SmartStore',
      description: 'Plataforma de comercio electrónico inteligente',
      specs: [
        'Carrito inteligente',
        'Pasarela de pagos',
        'Gestión de inventario',
      ],
    },
    {
      id: 'security',
      name: 'SecureShield',
      description: 'Sistema integral de seguridad y control de accesos',
      specs: ['Control biométrico', 'Monitoreo 24/7', 'Alertas en tiempo real'],
    },
  ];

  getProducts() {
    return of(this.products).pipe(delay(50));
  }

  getProduct(id: string) {
    return of(this.products.find((p) => p.id === id)).pipe(delay(50));
  }
}
