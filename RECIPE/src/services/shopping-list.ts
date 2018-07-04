import { Ingredient } from "../models/ingredient";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
    _baseURL:string="http://localhost:5000/api/values/";

constructor(private http:HttpClient){}

  addItem(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    console.log(this.ingredients);
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items);
  }

  getItems() {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }

  storeList(){

    let url:string=this._baseURL+"AuthenticateUser";

    return this.http.post(url,this.ingredients,{}).map((response:Response)=>{
      return response.json();
    });
  }
}
