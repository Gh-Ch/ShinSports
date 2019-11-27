import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addCategory', component: AddCategoryComponent},
  {path: 'addPlayer', component: AddPlayerComponent},
  {path: 'addTeam', component: AddTeamComponent}
];

export const ROUTING = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
