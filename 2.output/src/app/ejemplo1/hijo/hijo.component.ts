import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {
  // primero tengo que decirle al mi padre que mi hijo esta lista para mandar un mensaje
  @Output() mensaje = new EventEmitter();

saludarAlPadre(){
  this.mensaje.emit("Estoy mandando un mensaje a mi padre")

}
}
