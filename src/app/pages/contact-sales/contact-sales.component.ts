import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-sales',
  standalone: true,
  imports: [
    CommonModule, // Necesario para *ngIf
    ReactiveFormsModule, // Necesario para formGroup
    FormsModule,
  ],
  templateUrl: './contact-sales.component.html',
  styleUrl: './contact-sales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactSalesComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submitted = true;
    }
  }
}
