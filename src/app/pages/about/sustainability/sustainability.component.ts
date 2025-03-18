import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sustainability',
  imports: [RouterLink],
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SustainabilityComponent {}
