import { LetDeclaration } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface formregister{
  name: FormControl<string | null>;
  apell: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmpassword: FormControl<string | null>;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent {
  private _formBuilder = inject(FormBuilder);
    form = this._formBuilder.group<formregister>({
    name: this._formBuilder.control('',[Validators.required]),
    apell: this._formBuilder.control('',[Validators.required]),
    email: this._formBuilder.control('',[Validators.required, Validators.email]),
    password: this._formBuilder.control('',[Validators.required]),
    confirmpassword: this._formBuilder.control('',[Validators.required])
      
  });
  errorMessage: string = '';
  showPassword: boolean = false; 
  showConfirmPassword: boolean = false; 

  Submit(): void {
    if(this.form.invalid) return;
     const { name, apell, email, password, confirmpassword }= this.form.value;
     if (!email || !password || !name || !apell || !confirmpassword) return;
     if (password !== confirmpassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    this.errorMessage = '';
     console.log({ name, apell, email, password, confirmpassword});
     
    }

  }


