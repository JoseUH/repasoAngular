import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CharactersInterface } from '../../interfaces/characters-interface';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss',
})
export class GestionComponent {
  constructor(private servicio: ApiService) {}
  public character: any = {
    status: '',
    name: '',
    image: '',
  };
  addCharacter() {
    this.servicio.postCharacter(this.character).subscribe();
    alert("character creado")

  }
}
