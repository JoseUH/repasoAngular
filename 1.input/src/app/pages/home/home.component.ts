import { Component } from '@angular/core';
import { MediaComponent } from '../../components/media/media.component';
import { Media } from '../../interfaces/media';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MediaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 public play :Media = {
  title: 'PlayStation',
  videogames: [
    {
      src: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3plw.png',
      alt: 'Chrono Trigger',
    },
    {
      src: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1y6a.png',
      alt: 'Suikoden 2',
    },
    {
      src: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3h5y.png',
      alt: 'Discworld 2',
    },
    {
      src: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4sc5.png',
      alt: 'Castlevania',
    },
    {
      src: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2h4m.png',
      alt: 'The Neverhood',
    },
  ],
 }
 public nintendo: Media= {
  title: "Nintendo 64",
    videogames: [{
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3nnx.png",
      alt: "Ocarina"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co21mm.png",
      alt: "Super Mario 64"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ae7.png",
      alt: "Harvest Moon"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co25jr.png",
      alt: "Perfect Dark"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yao.png",
      alt: "Banjo Tooie"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co25jr.png",
      alt: "Perfect Dark"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yao.png",
      alt: "Banjo Tooie"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co25jr.png",
      alt: "Perfect Dark"
    },
    {
      src: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yao.png",
      alt: "Banjo Tooie"
    }]
 }
}
