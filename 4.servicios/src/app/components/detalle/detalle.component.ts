import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharactersInterface } from '../../interfaces/characters-interface';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss',
})
export class DetalleComponent {
  id!:number;
  character!:CharactersInterface;
  constructor(
    private servicio: ApiService,
    private rutaActivada: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe(params =>{
      // console.log(params);

    this.id =Number(params.get("id"))
    // console.log(Number(params.get("id")));


    })

    this.servicio.getCharactersById(this.id).subscribe((data:any)=>{
      // console.log(data);
      this.character = data

    })
  }
}
