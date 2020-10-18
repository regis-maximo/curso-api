import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoCreateComponent } from './escola/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './escola/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './escola/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './escola/aluno-update/aluno-update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'aluno-create', component: AlunoCreateComponent },
  { path: 'aluno-read', component: AlunoReadComponent },
  { path: 'aluno-update/:id', component: AlunoUpdateComponent },
  { path: 'aluno-delete/:id', component: AlunoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
