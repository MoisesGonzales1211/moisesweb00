import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
  
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
