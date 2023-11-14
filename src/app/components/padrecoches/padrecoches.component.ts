import { Component } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrls: ['./padrecoches.component.css']
})
export class PadrecochesComponent {

  public coches: Array<Coche>;

  constructor(){
    this.coches = [
      new Coche("Ford", "Focus", 300, 40, false),
      new Coche("Batmovil", "version 1", 600, 90, false),
      new Coche("Ferrari", "clasico", 240, 50, false)
    ]
  }

}
