import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: [ 'e-commerce.component.scss' ],
})
export class ECommerceComponent {
  constructor(
    public router: Router,
  ) {
  }
  searchValue = '';
}
