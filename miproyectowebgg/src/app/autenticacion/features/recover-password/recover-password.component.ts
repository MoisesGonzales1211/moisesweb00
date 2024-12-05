import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importamos HttpClientModule globalmente.

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule], // HttpClientModule agregado aquí.
  templateUrl: './recover-password.component.html',
  providers: [], // Aquí no necesitamos usar `provideHttpClient`.
})
export default class RecoverPasswordComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);

  constructor(private _router: Router) {}

  goToSignIn() {
    this._router.navigate(['/autenticacion/lo-gin']);
  }

  form = this._formBuilder.group({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
  });

  async submit() {
    if (this.form.invalid) {
      toast.error('Por favor, ingresa un correo válido');
      return;
    }

    try {
      const email = this.form.value.email;

      if (!email) return;

      // Ajustamos para enviar solo el email como string
      await this._authService.recoverPassword(email);

      toast.success('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
    } catch (error) {
      toast.error('Ocurrió un error. Verifica el correo ingresado.');
    }
  }
}
