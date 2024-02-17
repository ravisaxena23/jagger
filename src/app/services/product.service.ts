import { Injectable } from '@angular/core';
import { apiData } from '../mocks/data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  quantity=apiData?.cart?.items
}
