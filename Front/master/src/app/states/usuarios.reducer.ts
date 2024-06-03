import { createReducer, on } from '@ngrx/store';
import * as UsuariosActions from './usuarios.actions';
import { Usuario } from 'src/app/shared/models/usuario.model';

export interface UsuariosState {
  usuarios: Usuario[];
  error: any;
}

export const initialState: UsuariosState = {
  usuarios: [],
  error: null
};

export const usuariosReducer = createReducer(
  initialState,
  on(UsuariosActions.agregarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    usuarios: [...state.usuarios, usuario],
    error: null
  })),
  on(UsuariosActions.agregarUsuarioFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(UsuariosActions.editarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    usuarios: state.usuarios.map(u => u?.id === usuario?.id ? usuario : u),
    error: null
  })),
  on(UsuariosActions.editarUsuarioFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(UsuariosActions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    usuarios,
    error: null
  })),
  on(UsuariosActions.cargarUsuariosFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(UsuariosActions.eliminarUsuarioSuccess, (state, { id }) => ({
    ...state,
    usuarios: state.usuarios.filter(u => u.id !== id),
    error: null
  })),
  on(UsuariosActions.eliminarUsuarioFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
