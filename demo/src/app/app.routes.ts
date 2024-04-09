import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
//import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/product', pathMatch: 'full' },
    { path:'product', component:ProductComponent},
    { path: 'templateform', component: TemplateFormComponent },
    { path:'reactiveform', component:ReactiveFormsComponent},
    { path:'emplist', component:EmployeeListComponent},
    { path:'empDetails/:id', component:EmployeeDetailsComponent},
    { path: '**', component:PagenotfoundComponent}
    // { path: 'emp', component: EmployeeDetailsComponent },
    
];
