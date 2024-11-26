import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
interface formlogin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
 }

@Component({
  selector: 'app-lo-gin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './lo-gin.component.html',
  styleUrl: './lo-gin.component.css'
})
export default class LoGinComponent {

}
