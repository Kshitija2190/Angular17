import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component'
@Component({
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,TemplateFormComponent,ReactiveFormsComponent,LifecycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome tro Angular';
  name : string = 'Computers'
  public message:any='';
 

}
