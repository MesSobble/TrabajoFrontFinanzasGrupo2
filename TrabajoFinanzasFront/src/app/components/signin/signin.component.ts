import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";

export interface SignIn {
  email: string;
  password: string;

}
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    RouterLink,
    MatLabel,
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signin: SignIn ={
    email: '',
    password: ''
  };

}
