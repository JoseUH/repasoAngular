import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gestion",
    component:GestionComponent
  },
  {
    path:"characters",
    component:CharactersComponent
  },
  {
    path:"characters/:id",
    component:DetalleComponent
  },


];
