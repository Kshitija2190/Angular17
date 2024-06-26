import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router } from '@angular/router';

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
  constructor(private empService: EmployeeServiceService, private router:Router) {

  }
  ngOnInit() {
    // this.employees = this.empService.getEmployees();

    this.empService.getEmpDetails().subscribe(data => this.employees = data,error=>this.errorMsg =error)
    

  }
  onSelect(emp:any){
    console.log(emp);
    this.router.navigate(['/empDetails',emp.id]);
  }
  
}
