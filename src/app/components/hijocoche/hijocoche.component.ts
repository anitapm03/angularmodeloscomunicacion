import { Component, Input } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent {

  @Input() car!: Coche;
  public mensaje!: string;

  constructor(){
    //cuando recibimos elementos input no 
    //podemos usarlos dentro del constructor

    //this.car = new Coche("Mini", "Cooper", 200, 30, false);
  }

  //tendremos un metodo que devuelve t/f si
  //el coche está apagado o encendido
  comporobarEstado(): boolean {
    if (this.car.estado == false ){
      this.mensaje = "El coche está apagado.";
      this.car.velocidad = 0;
      return false;
    }else {
      this.mensaje = "El coche está en marcha."
      return true;
    }
  }

  //tendrems un metodo para encender el coche
  encenderCoche(): void{
    this.car.estado =  !this.car.estado;
    this.comporobarEstado();
  }

  //tendremos otro para acelerar
  acelerarCoche(): void{

    if (this.comporobarEstado() == false){
      alert("El coche está apagado")
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }
}
