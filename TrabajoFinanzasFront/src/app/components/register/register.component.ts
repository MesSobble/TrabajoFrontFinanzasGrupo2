import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
