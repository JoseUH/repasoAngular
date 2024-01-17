import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"gallery/:id",
    component:DetailCardComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"not-found",
    component:NotFoundComponent
  },
  {
    path:"**",
    redirectTo:"/not-found"
  }
];
