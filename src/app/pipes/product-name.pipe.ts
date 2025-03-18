import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productName', standalone: true })
export class ProductNamePipe implements PipeTransform {
  transform(productId: string): string {
    const productNames: { [key: string]: string } = {
      crm: 'QuantumCRM',
      erp: 'NexusERP',
      scm: 'AetherSCM',
    };
    return productNames[productId] || 'Producto Especial';
  }
}
