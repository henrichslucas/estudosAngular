import { Department } from "./department.model";

export interface Product {
  id: number | any;
  name: string;
  price: number;
  description: string;
  department: Department | any;
}