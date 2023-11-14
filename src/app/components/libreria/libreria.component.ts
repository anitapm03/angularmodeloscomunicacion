import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  public comics: Array<Comic>;
  public mensaje!: string;

  @ViewChild("cajanombre") cajaNombreRef: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef: ElementRef;
  @ViewChild("cajadesc") cajaDescRef: ElementRef;

  constructor(){
    this.cajaNombreRef = new ElementRef("");
    this.cajaImagenRef = new ElementRef("");
    this.cajaDescRef = new ElementRef("");

    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ]; 
    
  }

  seleccionarFavorito( event: any): void{
    this.mensaje = "Has seleccionado como favorito: " + event;
  }

  eliminarComic( event: any): void{
    //let comic = event;
    this.comics = this.comics.filter(comic => comic != event);
  }

  nuevoComic(): void{

    var nombre = this.cajaNombreRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;
    var descripcion = this.cajaDescRef.nativeElement.value;

    this.comics.push(new Comic(nombre, imagen, descripcion) );

  }

  modificarComic( event:any ): void{
    event.nombre = this.cajaNombreRef.nativeElement.value;
    event.imagen = this.cajaImagenRef.nativeElement.value;
    event.descripcion = this.cajaDescRef.nativeElement.value;
  }
}
