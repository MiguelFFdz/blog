import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HabilidadesComponent} from './habilidades/habilidades.component';
import {EstudiosComponent} from './estudios/estudios.component';
import {ExperienciaComponent} from './experiencia/experiencia.component';
import {BlogComponent} from './blog/blog.component';
import {ContactarComponent} from './contactar/contactar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactar', component: ContactarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
