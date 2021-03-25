import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../api.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: [ 'e-commerce.component.scss' ],
})
export class ECommerceComponent implements OnInit {
  searchValue = '';
  res: any;

  constructor(
    public router: Router,
    private apiService: ApiService,
  ) {
  }

  async ngOnInit() {
    this.res = await this.apiService.getAll();
  }
}
