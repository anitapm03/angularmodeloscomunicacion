import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { MenuComponent } from './components/menu/menu.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    DetalleproductoComponent,
    MenuComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    LibreriaComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
