import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-innovation',
  imports: [RouterLink],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InnovationComponent {}
