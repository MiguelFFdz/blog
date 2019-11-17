import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { BlogComponent } from './blog/blog.component';
import { ContactarComponent } from './contactar/contactar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ArraySortPipe } from './pipes/arraySort.pipe';
import { ArraySortDescPipe } from './pipes/arraySortDesc.pipe';
import {APP_BASE_HREF} from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    EstudiosComponent,
    BlogComponent,
    ContactarComponent,
    ArraySortPipe,
    ArraySortDescPipe,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgbModule
  ],
  providers: [
    Title,
    AngularFirestoreModule,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
