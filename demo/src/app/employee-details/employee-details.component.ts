import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';

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

  constructor(private empService: EmployeeServiceService) {

  }
  ngOnInit() {
  //  this.employees = this.empService.getEmployees();
  this.empService.getEmpDetails().subscribe(data => this.employees = data,error=>this.errorMsg =error)

  }
}
