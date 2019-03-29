import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('view') view:ViewComponent;
  userId;
  isView = false;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.userId = this.route.snapshot.params.id;
  }

  ngOnInit() {
  }

  onEdit(){
    this.view.updateUser();
  }

  onCancel(){
    this.router.navigate(['/home'])
  }

}
