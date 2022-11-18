import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  depName: string = "";
  depId: number = 0;

  constructor(private departmenService: DepartmentService) { }

  ngOnInit(): void {
  }

  save() {
    this.departmenService.addDepartment({ id: this.depId, name: this.depName });
  }
  clear() {
    this.depName = '';
  }

}
