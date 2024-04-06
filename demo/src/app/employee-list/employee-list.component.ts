import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  public employees: any = [];
  errorMsg: any;
  constructor(private empService: EmployeeServiceService) {

  }
  ngOnInit() {
    // this.employees = this.empService.getEmployees();

    this.empService.getEmpDetails().subscribe(data => this.employees = data,error=>this.errorMsg =error)
    

  }
}
