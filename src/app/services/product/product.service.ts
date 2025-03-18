import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string[];
  differentiator: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 'crm',
      name: 'AetherCRM',
      description:
        'CRM con IA predictiva y análisis de comportamiento del cliente',
      specs: [
        'IA predictiva para análisis de comportamiento del cliente',
        'Integración con redes sociales y canales de comunicación unificados',
        'Automatización de campañas de marketing multicanal',
        'Panel de control con métricas en tiempo real',
      ],
      differentiator:
        '"Customer DNA": Perfilado avanzado con machine learning para predecir necesidades antes de que surjan.',
    },
    {
      id: 'erp',
      name: 'AetherERP',
      description:
        'ERP con sincronización en tiempo real entre todas las áreas',
      specs: [
        'Gestión financiera y contable automatizada',
        'Planificación de recursos humanos y nómina',
        'Control de inventarios y cadena de suministro integrado',
        'Módulos personalizables para diferentes industrias',
      ],
      differentiator:
        '"Quantum Sync": Sincronización en tiempo real entre todas las áreas de la empresa, incluso offline.',
    },
    {
      id: 'scm',
      name: 'AetherSCM',
      description: 'Optimización avanzada de la cadena de suministro',
      specs: [
        'Optimización de rutas de distribución con IA',
        'Monitoreo en tiempo real de inventarios y entregas',
        'Integración con proveedores y sistemas de logística externos',
        'Alertas predictivas para interrupciones en la cadena',
      ],
      differentiator:
        '"Smart Chain": Blockchain integrado para trazabilidad y seguridad en toda la cadena.',
    },
    {
      id: 'xdr',
      name: 'AetherXDR',
      description: 'Plataforma de detección y respuesta extendida',
      specs: [
        'Detección de amenazas en tiempo real en toda la red',
        'Respuesta automatizada a incidentes de seguridad',
        'Análisis forense avanzado',
        'Integración con firewalls y sistemas de identidad',
      ],
      differentiator:
        '"Quantum Shield": Encriptación cuántica para proteger datos sensibles.',
    },
    {
      id: 'bi',
      name: 'AetherBI',
      description: 'Plataforma de inteligencia de negocios con IA avanzada',
      specs: [
        'Dashboards personalizables con arrastrar y soltar',
        'Integración con múltiples fuentes de datos (SQL, NoSQL, APIs)',
        'Análisis predictivo y prescriptivo',
        'Informes automatizados con IA',
      ],
      differentiator:
        '"Insight Engine": Motor de IA que genera recomendaciones accionables.',
    },
    {
      id: 'hcm',
      name: 'AetherHCM',
      description: 'Gestión de talento y recursos humanos con IA',
      specs: [
        'Gestión de talento y reclutamiento',
        'Planificación de sucesión y desarrollo de carrera',
        'Análisis de engagement y satisfacción de empleados',
        'Integración con herramientas de productividad (Slack, Teams)',
      ],
      differentiator:
        '"Talent Pulse": Monitoreo continuo del bienestar y desempeño de los empleados.',
    },
    {
      id: 'iot',
      name: 'AetherIoT',
      description: 'Plataforma IoT con análisis de datos en tiempo real',
      specs: [
        'Gestión centralizada de dispositivos IoT',
        'Análisis de datos en tiempo real desde sensores',
        'Integración con sistemas de automatización industrial',
        'Alertas predictivas para mantenimiento preventivo',
      ],
      differentiator:
        '"Edge AI": Procesamiento de datos en el borde (edge computing) para menor latencia.',
    },
    {
      id: 'cx',
      name: 'AetherCX',
      description:
        'Plataforma de experiencia del cliente con personalización avanzada',
      specs: [
        'Encuestas y feedback en tiempo real',
        'Análisis de sentimiento en redes sociales',
        'Integración con CRM y sistemas de soporte',
        'Personalización de experiencias omnicanal',
      ],
      differentiator:
        '"Emotion AI": Detección de emociones en interacciones con clientes.',
    },
    {
      id: 'ai-studio',
      name: 'AetherAI Studio',
      description:
        'Plataforma de desarrollo de inteligencia artificial sin código',
      specs: [
        'Herramientas de machine learning sin código',
        'Integración con grandes volúmenes de datos',
        'Modelos preentrenados para diferentes industrias',
        'Despliegue rápido de soluciones de IA',
      ],
      differentiator:
        '"AutoML Quantum": Automatización avanzada de entrenamiento de modelos con optimización cuántica.',
    },
  ];

  getProducts() {
    return of(this.products).pipe(delay(50));
  }

  getProduct(id: string) {
    return of(this.products.find((p) => p.id === id)).pipe(delay(50));
  }
}
