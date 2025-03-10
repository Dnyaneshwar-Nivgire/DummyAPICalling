import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http:HttpClient) { }
  
  getQuote():Observable<any>{
    return this.http.get('https://dummyjson.com/quotes/1');
  }
  getallpost():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getallproducts():Observable<any>{
return this.http.get('https://dummyjson.com/products');

  }
  getallalbums():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/albums');

  }
}
