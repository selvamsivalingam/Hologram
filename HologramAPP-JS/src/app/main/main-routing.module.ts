import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { AddComponent } from '../add/add.component';
import { ViewComponent } from '../view/view.component';
import { EditComponent } from '../edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [            
             {
                path: '',
                component: ListComponent
            },
            {
                path: 'view/:id',
                component: ViewComponent
            },
            {
                path: 'add',
                component: AddComponent
            },
            {
                path: 'edit/:id',
                component: EditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
