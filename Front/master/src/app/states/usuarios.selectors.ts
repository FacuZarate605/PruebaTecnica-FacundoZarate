import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuariosState } from './usuarios.reducer';

export const selectUsuariosState = createFeatureSelector<UsuariosState>('usuarios');

export const selectUsuarios = createSelector(
  selectUsuariosState,
  state => state.usuarios
);
