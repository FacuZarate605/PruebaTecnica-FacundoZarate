import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import * as UsuariosActions from 'src/app/states/usuarios.actions';
import { Usuario } from '../models/usuario.model';
import { Observable, tap } from 'rxjs';
import { selectUsuarios } from 'src/app/states/usuarios.selectors';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private store: Store<AppState>, private http: HttpClient) { }

  private apiUrl = 'https://localhost:7185/api/Users';

  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  eliminarUsuario(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
