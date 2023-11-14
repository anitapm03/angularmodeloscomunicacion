import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { DetalleproductoComponent } from "./components/detalleproducto/detalleproducto.component";
import { PadrecochesComponent } from "./components/padrecoches/padrecoches.component";
//import { HijococheComponent } from "./components/hijocoche/hijocoche.component";
import { PadredeportesComponent } from "./components/padredeportes/padredeportes.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    { path: "", component: ListaproductosComponent },
    { path: "detalle/:nombre/:precio/:imagen", component: DetalleproductoComponent },
    { path: "coches", component: PadrecochesComponent},
    { path: "deportes", component: PadredeportesComponent}
    //{ path: "detalle/:producto", component: DetalleproductoComponent }
]   

export const appRoutingProvider: any[]=[];

export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);