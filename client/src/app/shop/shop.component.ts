import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Brand } from '../shared/models/brand';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Type } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  @ViewChild('search') searchInput!: ElementRef;

  products: Product[] = [];
  brands: Brand[] = [];
  types: Brand[] = [];

  shopParams: ShopParams = new ShopParams();

  totalCount: number = 0;

  sortOptions: any[] = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ]

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(
      (response: Pagination) => {
        this.products = response.data;
        this.totalCount = response.count;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe(
      (response: Brand[]) => {
        this.brands = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(
      (response: Type[]) => {
        this.types = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  changeBrand(id: number) {
    this.shopParams.brandId = id;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  changeType(id: number) {
    this.shopParams.typeId = id;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  changeSort(sort: string) {
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if(this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchInput.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset() {
    this.searchInput.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
