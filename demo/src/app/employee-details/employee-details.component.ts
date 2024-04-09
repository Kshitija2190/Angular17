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
  
  setTimeout(() => {
    
    // Call the setDelay function again with the remaining times
    this.selectionDetails();
}, 1000);
  }
  getEmpDetails(){
   this.empService.getEmpDetails().subscribe(data => this.employees = data,error=>this.errorMsg =error)
    
  }
   selectionDetails(){
    let id = (this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.selectedIndex = id;
    this.selectedEmp = this.employees.filter((x:any)=>{
      if(x.id == id )
        return x;
    });
   }
}
