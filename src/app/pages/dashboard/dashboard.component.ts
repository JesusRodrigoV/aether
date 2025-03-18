import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent {
  userName = 'Alex Johnson';
  userRole = 'Administrador';
  notificationCount = 3;
  timelineEvents = [
    { time: '08:00', event: 'Monitoreo iniciado' },
    { time: '10:15', event: 'Optimización de red' },
    { time: '12:30', event: 'Actualización IA' },
  ];

  automatedActions = [
    {
      icon: 'bx-gift',
      description: 'Oferta enviada a cliente #4523: 20% de descuento',
      status: 'Completado',
      statusIcon: 'bx-check-circle',
      statusClass: 'completed',
    },
    {
      icon: 'bx-wrench',
      description: 'Técnico asignado a falla en zona 5',
      status: 'En proceso',
      statusIcon: 'bx-time-five',
      statusClass: 'in-progress',
    },
    {
      icon: 'bx-chart',
      description: 'Análisis predictivo actualizado',
      status: 'Activo',
      statusIcon: 'bx-pulse',
      statusClass: 'active',
    },
  ];
}
