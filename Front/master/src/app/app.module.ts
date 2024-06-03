import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { TableModule } from 'primeng/table'; 
import { DialogModule } from 'primeng/dialog';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component'; 
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { UsuariosService } from './shared/services/usuarios.service';
import { MessageService } from 'primeng/api';
import { PrimengModule } from './components/primeng/primeng.module';
import { usuariosReducer } from './states/usuarios.reducer';
import { UsuariosEffects } from './states/usuarios.effects';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ usuarios: usuariosReducer }),
    EffectsModule.forRoot([UsuariosEffects]),
    TableModule, 
    DialogModule,
    ButtonModule,
    MessageModule,
    HttpClientModule,
    PrimengModule 
  ],
  providers: [MessageService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
