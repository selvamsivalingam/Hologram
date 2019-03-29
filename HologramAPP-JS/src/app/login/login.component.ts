import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  submitted = false;

  constructor(
    private loginService: LoginService, 
    private formBuilder: FormBuilder, 
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.form.controls; }

  onLogin() {
    if(this.form.invalid) return;
    this.errorMessage = null;
    this.submitted = true;
    const model = {
      Username: this.form.controls.email.value,
      Password: this.form.controls.password.value
    }
    this.loginService.login(model).subscribe(next => {
      this.router.navigate(['/home'])
    }, error => {
      this.errorMessage = error.error;
    })

  }

}
