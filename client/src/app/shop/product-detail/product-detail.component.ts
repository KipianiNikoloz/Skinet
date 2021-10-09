import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private shopService: ShopService, private route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {
    breadcrumbService.set('@productDetails', 'Loading');
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.shopService.getProduct(+(this.route.snapshot.paramMap.get("id") as string)).subscribe( (response: Product) => {
      this.product = response;
      this.breadcrumbService.set('@productDetails', response.name);
    });
  }

}
