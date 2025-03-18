import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemoAccessService } from '@app/services/demo-access';
import { ProductNamePipe } from '@app/pipes/product-name.pipe';

@Component({
  selector: 'app-demo-access',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductNamePipe],
  templateUrl: './demo-access.component.html',
  styleUrl: './demo-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DemoAccessComponent {
  private betaService = inject(DemoAccessService);
  private route = inject(ActivatedRoute);

  accessCode = '';
  message = '';
  isError = false;
  isLoading = false;
  productId = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.productId = params['productId'] || '';
    });
  }

  async onSubmit() {
    if (!this.accessCode) return;

    this.isLoading = true;
    this.message = '';
    this.isError = false;

    try {
      const isValid = await this.betaService.validateCode(this.accessCode);

      if (isValid) {
        this.message = '✅ Acceso concedido!';
        this.downloadAccessFile();
      } else {
        this.isError = true;
        this.message = '❌ Código inválido. Verifica e intenta nuevamente.';
      }
    } catch (error) {
      this.isError = true;
      this.message = '! Error de conexión. Intenta más tarde.';
    } finally {
      this.isLoading = false;
    }
  }

  private downloadAccessFile() {
    const content = `Prueba CRM comienza a partir de ahora.\n\nBienvenido a la experiencia de gestión empresarial con nuestro CRM de última generación. Explora sus funciones y descubre cómo puede ayudarte.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Acceso_CRM.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  }
}
