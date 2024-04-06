import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder   } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms', 
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  favColor = new FormControl("");
  public contactForm: any;

  constructor(private formBuilder:FormBuilder,){
    this.createContactForm();

  }
  createContactForm(){
    this.contactForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
}


}
