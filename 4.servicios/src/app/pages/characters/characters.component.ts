import { Component } from '@angular/core';
import { CharactersInterface } from '../../interfaces/characters-interface';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  public charactersList: CharactersInterface[] = [];

  constructor(private servicio: ApiService) {
    // console.log('esto es el constructor');
  }

  ngOnInit(): void {
    // console.log('essto es el inicio');

    this.servicio.getCharacters().subscribe((data: any) => {
      // console.log(data);
      this.charactersList = data;
    });
  }
}
