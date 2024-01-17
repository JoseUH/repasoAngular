import { Component, Input } from '@angular/core';
import { Contactos } from '../../interfaces/contactos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
@Input() listado!: Contactos[];
}
