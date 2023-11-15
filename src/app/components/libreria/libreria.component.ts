import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ServiceComics } from 'src/app/services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
  //devemos utilizar providers dentro del component
  //para poder inyectar nuestro servicio
  providers: [ServiceComics]
})
export class LibreriaComponent implements OnInit{
  public comics!: Array<Comic>;
  public mensaje!: string;

  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  @ViewChild("cajadesc") cajaDescRef!: ElementRef;


  //en los constructores normalmente solo se usa la inyeccion
  //no los objetos que recibe, las acciones se suelen hacer
  //dentro de ngOnInit
  constructor(private _service: ServiceComics){

  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
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
