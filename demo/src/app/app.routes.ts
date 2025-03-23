import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
//import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DatabindingComponent } from './databinding/databinding.component';
export const routes: Routes = [
   
    { path: '',   redirectTo: '/data', pathMatch: 'full' },
    { path:'data', component: DatabindingComponent},
    { path:'product', component:ProductComponent},
    { path: 'templateform', component: TemplateFormComponent },
  //  { path:'reactiveform', loadComponent:()=>import('./reactive-forms/reactive-forms.component').then((c)=>c.ReactiveFormsComponent)},
    { path:'emplist', loadComponent:()=>import('./employee-list/employee-list.component').then((c)=>c.EmployeeListComponent)},
    { path:'empDetails/:id', component:EmployeeDetailsComponent},
    { path: '**', component:PagenotfoundComponent}
    // { path: 'emp', component: EmployeeDetailsComponent },
    
];
