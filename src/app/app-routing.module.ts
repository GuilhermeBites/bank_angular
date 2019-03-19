import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LoginClientesComponent } from './login-clientes/login-clientes.component';
import { HomeBankingComponent } from './home-banking/home-banking.component';


const routes: Routes = [
  { path: '', component: HomeBankingComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'login-clientes', component: LoginClientesComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
