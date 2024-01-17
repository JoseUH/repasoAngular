import { Component, EventEmitter, Output } from '@angular/core';
import { Contactos } from '../../interfaces/contactos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-contacto.component.html',
  styleUrl: './nuevo-contacto.component.scss'
})
export class NuevoContactoComponent {
  @Output() nuevoContacto = new EventEmitter();

// vamos a poner los campos que vamos a utilizar en el formulario
contacto: Contactos ={
  name:"",
  email:"",
  telefon:"",
  isAlive:true
}
enviarNuevoContacto(){
console.log(this.contacto);
this.nuevoContacto.emit({...this.contacto})
}
}
