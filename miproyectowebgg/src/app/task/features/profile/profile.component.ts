import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from './'; // Asegúrate de importar tu servicio correctamente

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm: FormGroup;
  profilePhotoUrl: string | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    // Inicializar el formulario reactivo
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      career: ['', Validators.required],
      year: [null, [Validators.required, Validators.min(1)]],
      privacy: ['public', Validators.required],
    });
  }

  // Manejar la selección de foto de perfil
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePhotoUrl = e.target?.result as string; // Convertir el archivo en una URL base64
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  // Guardar el perfil en Firebase
  saveProfile(): void {
    if (this.profileForm.valid) {
      const profileData = { ...this.profileForm.value, photo: this.profilePhotoUrl };
      const userId = 'user-id-ejemplo'; // Aquí deberías obtener el ID del usuario autenticado (por ejemplo, desde Firebase Authentication)

      // Guardar datos usando el servicio
      this.profileService
        .saveProfileData(userId, profileData)
        .then(() => console.log('Perfil guardado exitosamente'))
        .catch((error) => console.error('Error al guardar el perfil:', error));
    }
  }
}
