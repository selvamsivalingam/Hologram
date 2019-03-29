import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  public onView(userId){
    this.router.navigate(['view', userId], { relativeTo: this.route });
  }

  public onEdit(userId){
    this.router.navigate(['edit', userId], { relativeTo: this.route });
  }

  public onAdd(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
