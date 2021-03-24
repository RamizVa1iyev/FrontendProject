import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string='https://localhost:44323/api/products'
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
  getProductsByCategory(categroyId:number):Observable<ListResponseModel<Product>>{
    let getByCategoryUrl=this.apiUrl+"/getByCategory/"+categroyId;
    return this.httpClient.get<ListResponseModel<Product>>(getByCategoryUrl);
  }
  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl,product)
  }
}
