import { LetDeclaration } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
  
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister(): void {
    if (this.password === this.confirmPassword){
      console.log('name:', this.name);
    console.log('email:', this.email);
    console.log('confirmPassword:', this.confirmPassword);
    console.log('Password:', this.password);
    }else {
      console.log('las contraseñas no coinciden');
    }
    
  } 
}

