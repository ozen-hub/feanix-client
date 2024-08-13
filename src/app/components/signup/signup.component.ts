import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
  })

  register() {

  }
}
