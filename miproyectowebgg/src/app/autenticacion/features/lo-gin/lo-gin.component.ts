import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';
interface formlogin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
 }

@Component({
  selector: 'app-lo-gin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './lo-gin.component.html',
  styleUrls: ['./lo-gin.component.css']
})
export default class LoGinComponent {
  
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  Submit(): void {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    console.log('Datos del formulario:', { email, password });
    
  }

}
