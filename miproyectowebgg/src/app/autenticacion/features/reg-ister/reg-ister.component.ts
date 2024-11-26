import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

interface formRegIster{
  name: FormControl<string | null>;
  apell: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmpassword: FormControl<string | null>;
}

@Component({
  selector: 'app-reg-ister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reg-ister.component.html',
  styleUrl: './reg-ister.component.css'
})
export default class RegIsterComponent {
  private _formBuilder = inject(FormBuilder);
  form = this._formBuilder.group<formRegIster>({ 
    email: this._formBuilder.control('',[
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('',Validators.required),
  });

}
