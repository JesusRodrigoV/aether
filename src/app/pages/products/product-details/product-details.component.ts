import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-product-details',
  imports: [AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private router = inject(Router);

  requestDemoAccess() {
    this.router.navigate(['/demo-access'], {
      queryParams: { productId: this.route.snapshot.params['id'] },
    });
  }
  contactSales() {
    this.router.navigate(['/contact-sales'], {
      queryParams: { productId: this.route.snapshot.params['id'] },
    });
  }
  product$ = this.productService.getProduct(this.route.snapshot.params['id']);
}
