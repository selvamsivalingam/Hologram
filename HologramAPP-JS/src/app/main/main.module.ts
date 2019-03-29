import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from '../list/list.component';
import { MainRoutingModule } from './main-routing.module';
import { AlertComponent } from '../_directives/alert/alert.component';
import { AlertService } from '../services/alert.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../_helpers/jwt.interceptors';
import { UserService } from '../services/user.service';
import { AddComponent } from '../add/add.component';
import { ViewComponent } from '../view/view.component';
import { EditComponent } from '../edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, ListComponent, AlertComponent, AddComponent, ViewComponent, EditComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AlertService, UserService  ]
})
export class MainModule { }
