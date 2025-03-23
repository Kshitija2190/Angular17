import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, CommonModule, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productName: string = 'Keyboard';
  date = new Date;
  @Input() name: any;
  @Output() public childEvent = new EventEmitter;
  displayData: boolean = true;
  show: boolean = true;
  noDataVal: string = 'No data found';
  selectedVal: string = "three";
  // property:string='Property';
  imgUrl: string = 'demo\src\app\product\img1.jpeg';
  texts: string = 'Angular';
  productList: any[] = [{
    code: 111,
    name: 'Wire'
  }, {
    code: 112,
    name: 'Mouse'
  }, {
    code: 113,
    name: 'Keyboard'
  }]
  hasPendingChanges: boolean = true;

  saveChanges() {
    console.log('Hello');
  }
  fireEvent() {
    this.childEvent.emit('From Child to Parent');
  }
  ngOnChanges() {
    console.log('NgOnchanges called');
  }
}
