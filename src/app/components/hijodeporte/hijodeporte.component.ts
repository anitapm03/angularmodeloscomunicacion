import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent {
  @Input() sport!: string;
  
  //debemos declarar el método que recibimos desde el parent
  //se pone el nombre enviado entre los parentesis
  @Output() seleccionarFavoritoPadre: EventEmitter<any> =
    new EventEmitter();

  //creamos un metodo en el component hijo para poder
  //realizar la llamada del component Padre
  seleccionarFavoritoHijo(): void{
    //este metodo llamará al padre
    this.seleccionarFavoritoPadre.emit( this.sport );
  }

}
