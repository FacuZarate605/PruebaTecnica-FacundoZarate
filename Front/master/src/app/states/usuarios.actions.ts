import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/shared/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosFailure = createAction(
  '[Usuarios] Cargar Usuarios Failure',
  props<{ error: any }>()
);

export const agregarUsuario = createAction(
  '[Usuarios] Agregar Usuario',
  props<{ usuario: Usuario }>()
);

export const agregarUsuarioSuccess = createAction(
  '[Usuarios] Agregar Usuario Success',
  props<{ usuario: Usuario }>()
);

export const agregarUsuarioFailure = createAction(
  '[Usuarios] Agregar Usuario Failure',
  props<{ error: any }>()
);

export const editarUsuario = createAction(
  '[Usuarios] Editar Usuario',
  props<{ usuario: Usuario }>()
);

export const editarUsuarioSuccess = createAction(
  '[Usuarios] Editar Usuario Success',
  props<{ usuario: Usuario }>()
);

export const editarUsuarioFailure = createAction(
  '[Usuarios] Editar Usuario Failure',
  props<{ error: any }>()
);

export const eliminarUsuario = createAction(
    '[Usuarios] Eliminar Usuario',
    props<{ id: number }>()
  );
  
  export const eliminarUsuarioSuccess = createAction(
    '[Usuarios] Eliminar Usuario Success',
    props<{ id: number }>()
  );
  
  export const eliminarUsuarioFailure = createAction(
    '[Usuarios] Eliminar Usuario Failure',
    props<{ error: any }>()
  );