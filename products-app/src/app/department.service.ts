import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  

  private departments: Department[] = [
    { id: 1, name: "Roupas" },
    { id: 2, name: "Livros" },
    { id: 3, name: "Eletronicos" },
    { id: 4, name: "Computadores" },
  ]
  private nextID: number = 5;
  constructor() { }

  getDepartments(): Department[] {
    return this.departments;
  }

  addDepartment(d: Department) {
    this.departments.push({ ...d, id: this.nextID++ });
  }

  getDepartmentById(id: number): Department | undefined {
    return this.departments.find((d) => d.id == id)
  }
}
