import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent {

  public deportes: Array<string>;
  public mensaje!: string;

  //metodo para recibir datos desde el hijo:
  seleccionarFavoritoPadre( event:any ): void{
    this.mensaje = "Has seleccionado " + event ;
  }

  constructor(){
    this.deportes = ["Petanca", "Pingpong", "Esquí", "Skateboarding", "Tenis"];
  }
}
