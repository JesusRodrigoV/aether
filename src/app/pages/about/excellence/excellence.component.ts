import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-excellence',
  imports: [RouterLink],
  templateUrl: './excellence.component.html',
  styleUrl: './excellence.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExcellenceComponent {}
