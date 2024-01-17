import { Component } from '@angular/core';
import { Contactos } from '../../interfaces/contactos';
import { ContactoComponent } from '../contacto/contacto.component';
import { NuevoContactoComponent } from '../nuevo-contacto/nuevo-contacto.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [ContactoComponent, NuevoContactoComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  listado: Contactos[] = [
    {
      name: 'pepe',
      telefon: '12345',
      email: 'pepe@gmail.com',
      isAlive: true,
    },
    {
      name: 'bonifacio',
      telefon: '12345',
      email: 'bonifacio@gmail.com',
      isAlive: false,
    },
    {
      name: 'luis',
      telefon: '12345',
      email: 'luis@gmail.com',
      isAlive: true,
    },
  ];
  addContact(contact: Contactos) {
    // console.log(contact);
    this.listado = [...this.listado, contact];
  }
}
