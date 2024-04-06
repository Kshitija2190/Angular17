import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeServiceService } from './services/employee-service.service';

@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,TemplateFormComponent,ReactiveFormsComponent,LifecycleHooksComponent,EmployeeListComponent,EmployeeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [EmployeeServiceService]
})
export class AppComponent {
  title = 'Welcome tro Angular';
  name : string = 'Computers'
  public message:any='';
 

}
