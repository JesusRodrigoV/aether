import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoAccessService {
  private validCodes = [
    'BOLTELECOM-7G-2024',
    'QUANTUM-ACCESS-2024',
    'NEXUS-BETA-001',
  ];

  validateCode(code: string) {
    return of(this.validCodes.includes(code.toUpperCase()))
      .pipe(delay(500))
      .toPromise();
  }
}
