import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoAccessService } from '@app/services/demo-access';
import { ProductNamePipe } from '@app/pipes/product-name.pipe';

@Component({
  selector: 'app-demo-access',
  imports: [FormsModule, CommonModule, ProductNamePipe],
  templateUrl: './demo-access.component.html',
  styleUrl: './demo-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DemoAccessComponent {
  private betaService = inject(DemoAccessService);
  private router = inject(Router);
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
        this.message = '✅ Acceso concedido! Redirigiendo al dashboard...';
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      } else {
        this.isError = true;
        this.message = '❌ Código inválido. Verifica e intenta nuevamente.';
      }
    } catch (error) {
      this.isError = true;
      this.message = '⚠️ Error de conexión. Intenta más tarde.';
    } finally {
      this.isLoading = false;
    }
  }
}
