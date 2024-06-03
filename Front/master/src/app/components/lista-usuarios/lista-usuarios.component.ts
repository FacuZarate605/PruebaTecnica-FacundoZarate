import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { selectUsuarios } from 'src/app/states/usuarios.selectors';
import { AppState } from 'src/app/states/app.state';
import { Store } from '@ngrx/store';
import { cargarUsuarios, agregarUsuario, editarUsuario, eliminarUsuario  } from 'src/app/states/usuarios.actions';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [MessageService]
})

export class ListaUsuariosComponent implements OnInit, OnDestroy {
  usuarios$: Observable<Usuario[]>;
  usuarioSeleccionado!: Usuario;
  displayDialog!: boolean;
  isEditing: boolean = false;
  nuevoUsuario: Usuario = { username: '', email: '' };
  private unsubscribe$ = new Subject<void>();

  constructor(private messageService: MessageService, private store: Store<AppState>) { 
    this.usuarios$ = this.store.select(selectUsuarios);
  }

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios());
    this.usuarios$.pipe(takeUntil(this.unsubscribe$)).subscribe(usuarios => {
      console.log('Usuarios actualizados:', usuarios);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onRowSelect(event: any) {
    this.usuarioSeleccionado = event.data;
    console.log(this.usuarioSeleccionado);
    this.displayDialog = true;
    this.nuevoUsuario = { ...this.usuarioSeleccionado }; 
  }

  showDialogToAdd() {
    this.displayDialog = true;
    this.isEditing = false;
    this.nuevoUsuario = { username: '', email: '' }; 
  }

  showDialogToEdit(usuario: Usuario) {
    this.displayDialog = true;
    this.isEditing = true;
    this.nuevoUsuario = { ...usuario }; 
  }

  agregarUsuario() {
    this.store.dispatch(agregarUsuario({ usuario: this.nuevoUsuario }));
    this.messageService.add({severity:'success', summary:'Usuario Agregado', detail:'El usuario ha sido agregado con éxito'});
    this.displayDialog = false;
  }

  editarUsuario() {
    this.store.dispatch(editarUsuario({ usuario: this.nuevoUsuario }));
    this.messageService.add({ severity: 'success', summary: 'Usuario Editado', detail: 'El usuario ha sido editado con éxito' });
    this.displayDialog = false;
  }

  eliminarUsuario(id: number) {
    this.store.dispatch(eliminarUsuario({ id }));
    this.messageService.add({ severity: 'success', summary: 'Usuario Eliminado', detail: 'El usuario ha sido eliminado con éxito' });
  }

  guardarUsuario() {
    if (this.isEditing) {
      this.editarUsuario();
    } else {
      this.agregarUsuario();
    }
  }

  cancelarEdicion() {
    this.displayDialog = false;
  }
}
