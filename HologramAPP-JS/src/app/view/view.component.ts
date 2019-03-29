import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  isView = true;
  userId;
  form: FormGroup;
  user: User;
  @Input() parentView;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      province: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params.id;
    if (typeof this.userId !== 'undefined')
      this.userService.getUser(this.userId).subscribe((_user) => {
        this.user = _user;
        this.form.setValue({
          firstname: _user.firstname,
          lastname: _user.lastname,
          username: _user.username,
          password: 'xxxxxxx',
          email: _user.email,
          role: _user.role,
          province: _user.province,
          country: _user.country,
          zip: _user.zip,
        });
      });
    if (typeof this.parentView !== 'undefined')
      this.isView = this.parentView;
  }

  addUser() {
    let user: User = this.form.value;
    this.userService.addUser(user).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      error => {
        console.log("Error", error);
      });
  }

  updateUser() {
    let user: User = this.form.value;
    user.id = this.user.id;
    user.password = 'xxxxxxx';
    this.userService.updateUser(0, user).subscribe(
      () => {
        this.router.navigate(['/home'])
      },
      error => {
        console.log("Error", error);
      });
  }

}
