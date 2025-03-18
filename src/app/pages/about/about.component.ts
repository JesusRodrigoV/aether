import { NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import ContactSalesComponent from '../contact-sales/contact-sales.component';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, RouterLink, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
