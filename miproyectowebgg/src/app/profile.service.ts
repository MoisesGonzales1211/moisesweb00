
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root', // Proveedor global para que el servicio esté disponible en toda la app
})
export class ProfileService {
  constructor(private firestore: AngularFirestore) {}

  /**
   * Guardar datos del perfil de usuario en Firebase Firestore
   * @param userId ID del usuario
   * @param profileData Datos del perfil (nombre, carrera, etc.)
   */
  saveProfileData(userId: string, profileData: any): Promise<void> {
    return this.firestore.collection('profiles').doc(userId).set(profileData);
  }

  /**
   * Obtener datos del perfil de usuario desde Firebase Firestore
   * @param userId ID del usuario
   * @returns Observable con los datos del perfil
   */
  getProfileData(userId: string): any {
    return this.firestore.collection('profiles').doc(userId).valueChanges();
  }
}
