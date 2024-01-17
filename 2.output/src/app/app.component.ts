import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './ejemplo1/padre/padre.component';
import { AgendaComponent } from './ejemplo2/agenda/agenda.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PadreComponent,AgendaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '1.components';
}
