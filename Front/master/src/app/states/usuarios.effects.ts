import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import * as UsuariosActions from './usuarios.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}

    cargarUsuarios$ = createEffect(() =>
        this.actions$.pipe(
        ofType(UsuariosActions.cargarUsuarios),
        mergeMap(() =>
            this.usuariosService.obtenerUsuarios().pipe(
            map(usuarios => UsuariosActions.cargarUsuariosSuccess({ usuarios })),
            catchError(error => of(UsuariosActions.cargarUsuariosFailure({ error })))
            )
        )
        )
    );

    agregarUsuario$ = createEffect(() =>
        this.actions$.pipe(
        ofType(UsuariosActions.agregarUsuario),
        mergeMap(action =>
            this.usuariosService.agregarUsuario(action.usuario).pipe(
            map(usuario => UsuariosActions.agregarUsuarioSuccess({ usuario })),
            catchError(error => of(UsuariosActions.agregarUsuarioFailure({ error })))
            )
        )
        )
    );

    editarUsuario$ = createEffect(() =>
        this.actions$.pipe(
        ofType(UsuariosActions.editarUsuario),
        mergeMap(action =>
            this.usuariosService.actualizarUsuario(action.usuario).pipe(
            map(usuario => UsuariosActions.editarUsuarioSuccess({ usuario })),
            catchError(error => of(UsuariosActions.editarUsuarioFailure({ error })))
            )
        )
        )
    );

    afterAgregarUsuarioSuccess$ = createEffect(() =>
        this.actions$.pipe(
        ofType(UsuariosActions.agregarUsuarioSuccess),
        map(() => UsuariosActions.cargarUsuarios())
        )
    );

    afterEditarUsuarioSuccess$ = createEffect(() =>
        this.actions$.pipe(
        ofType(UsuariosActions.editarUsuarioSuccess),
        map(() => UsuariosActions.cargarUsuarios())
        )
    );

    eliminarUsuario$ = createEffect(() =>
        this.actions$.pipe(
        ofType(UsuariosActions.eliminarUsuario),
        mergeMap(action =>
            this.usuariosService.eliminarUsuario(action.id).pipe(
            map(() => UsuariosActions.eliminarUsuarioSuccess({ id: action.id })),
            catchError(error => of(UsuariosActions.eliminarUsuarioFailure({ error })))
            )
        )
        )
    );
}