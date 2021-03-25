import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mockData} from './mock.data';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}


  async get(url) {
    return await this.http.get(url).toPromise();
  }

  async getWorkflowData(val) {
    return mockData[1];
  }

  async getAll() {
    return await this.get('http://34.121.144.171/api/packages');
  }
}
