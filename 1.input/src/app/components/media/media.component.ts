import { Component, Input } from '@angular/core';
import { Media } from '../../interfaces/media';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
@Input() juegos! :Media
}
