import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent  {
    name:string='';

    ngOnInit(){
      console.log('ngoninit called');
    }
    ngOnChanges(){
      console.log('NgOnchanges called');
    }
}
