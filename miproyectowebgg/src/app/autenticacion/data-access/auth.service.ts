import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://mi-api-real.com/api'; // URL real del servidor

  constructor(private http: HttpClient) {} // HttpClient inyectado correctamente

  // Método para recuperación de contraseña
  recoverPassword(email: string): Observable<any> {
    const url = `${this.apiUrl}/recover-password`; // Endpoint para recuperación
    return this.http.post(url, { email }); // Solicitud POST al servidor
  }

  private _auth = inject(Auth);

  // Registro de usuario
  signUp(user: User) {
    return createUserWithEmailAndPassword(this._auth, user.email, user.password);
  }

  // Inicio de sesión con correo y contraseña
  signIn(user: User) {
    return signInWithEmailAndPassword(this._auth, user.email, user.password);
  }

  // Inicio de sesión con Google
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this._auth, provider);
  }
}
