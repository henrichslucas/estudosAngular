import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../models/department.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  department!: Department;
  departments: Department[] = []
  name: string = "";
  description: string = ""
  price: number = 0.0;

  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

  save() {
    this.productService.addProduct({
      id: 0,
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    });
  }

  clear() {
    this.name = "",
      this.price = 0,
      this.description = "",
      this.department = { id: 0, name: '' }
  }

}
