import { LetDeclaration } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister(): void {
    console.log('name:', this.name);
    console.log('email:', this.email);
    console.log('confirmPassword:', this.confirmPassword);
    console.log('Password:', this.password);
  }
}

