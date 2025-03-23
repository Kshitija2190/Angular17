import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  favColor: string ='Blue';

  onSubmit(form: NgForm) {
    confirm("Name : " +form.value.fullName + "\n" + "Email : " +form.value.email + "\n" + "Message : " +form.value.message);
    console.log('Your form data : ', form.value);
}

}
