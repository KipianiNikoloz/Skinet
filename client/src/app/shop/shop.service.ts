import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

import { Pagination } from '../shared/models/pagination';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    
    let params = new HttpParams();

    if(shopParams.brandId !== 0) params = params.append('brandId', shopParams.brandId.toString());

    if(shopParams.typeId !== 0) params = params.append('typeId', shopParams.typeId.toString());

    params = params.append('sort', shopParams.sort);

    params = params.append('pageIndex', shopParams.pageNumber);
    params = params.append('pageSize', shopParams.pageSize);

    if(shopParams.search) {
      params = params.append('search', shopParams.search);
    }

    return this.http.get<Pagination>(`${this.baseUrl}products`, {observe: 'response', params: params})
      .pipe(
        map( (response) => {
          return response.body as Pagination;
        })
      );
  }

  getBrands() {
    return this.http.get<Brand[]>(`${this.baseUrl}products/brands`);
  }

  getTypes() {
    return this.http.get<Type[]>(`${this.baseUrl}products/types`);
  }
}
