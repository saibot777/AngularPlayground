import {Component, OnInit} from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
import {ProductParameterService} from "./product-parameter.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;

    filteredProducts: IProduct[];
    products: IProduct[];

    get showImage(): boolean {
      return this.productParatemerService.showImage;
    }
    set showImage(value: boolean) {
      this.productParatemerService.showImage = value;
    }

    constructor(private productService: ProductService,
                private productParatemerService: ProductParameterService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                this.performFilter();
            },
            (error: any) => this.errorMessage = <any>error
        );
    }

    onValueChange(value: string): void {
      this.performFilter(value);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        } else {
            this.filteredProducts = this.products;
        }
    }
}
