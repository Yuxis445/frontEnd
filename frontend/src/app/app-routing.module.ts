import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch: "full"},

  {path:"login",component: LoginComponent},
  {path:"cadastro",component: CadastroComponent},
  {path:"menu",component:MenuComponent},
  {path:"inicio",component: InicioComponent},
  {path:"sobre",component: SobreComponent},
  {path:"contato",component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
