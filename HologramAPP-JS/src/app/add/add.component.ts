import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('view') view:ViewComponent;
  isView = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAdd(){
    this.view.addUser();
  }

  onCancel(){
    this.router.navigate(['/home'])
  }

}
