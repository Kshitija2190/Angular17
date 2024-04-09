import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public employees: any = [];
  errorMsg: any;
  selectedEmp: any;
  selectedIndex: any;

  constructor(private empService: EmployeeServiceService, private route:ActivatedRoute) {

  }
  ngOnInit() {
  // this.employees = this.empService.getEmployees();
  this.getEmpDetails();
  this.selectionDetails();
  }
  getEmpDetails(){
   // this.empService.getEmpDetails().subscribe(data => this.employees = data,error=>this.errorMsg =error)
    this.employees =[{
      id: 1, "name": "John", age: 35
    },
    {
      id: 2, "name": "James", age: 31
    },
    {
      id: 3, "name": "Jeena", age: 32
    },
    {
      id: 4, "name": "Jim", age: 34
    }
      , {
      id: 5, "name": "Jack", age: 33
    },
    {
      id: 6, "name": "John", age: 35
    }];
  }
   selectionDetails(){
    let id = (this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.selectedIndex = id;
    this.selectedEmp = this.employees.filter((x:any)=>{
      if(x.id == id )
        return x;
    });
    console.log(this.selectedEmp );
   }
}
