import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
 interface formlogin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
 }

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterModule, CommonModule,ReactiveFormsModule]
  
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
    form = this._formBuilder.group<formlogin>({
    email: this._formBuilder.control('',[Validators.required, Validators.email]),
    password: this._formBuilder.control('',[Validators.required]),
  });
  Submit(): void {
    console.log(this.form.getRawValue());

  }
}
