import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {

  @Input() comic!: Comic;
  
  @Output() seleccionarFavorito: EventEmitter<any> =
    new EventEmitter();

  @Output() eliminarComic: EventEmitter<any> =
    new EventEmitter();

  @Output() modificarComic: EventEmitter<any> =
    new EventEmitter();

  seleccionarFavoritoHijo(): void{
    this.seleccionarFavorito.emit( this.comic.nombre );
  }

  eliminarComicHijo(): void{
    this.eliminarComic.emit( this.comic );
  }

  modificarComicHijo(): void{
    this.modificarComic.emit( this.comic );
  }

}
