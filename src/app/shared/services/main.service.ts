import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url:string = 'http://localhost:4000/posts'
  recipes!:RecipeModel;
  recipe:RecipeModel[] = [];
  constructor(private http:HttpClient) { }
  
  private dataSubject = new Subject<RecipeModel[]>();
  data$: Observable<RecipeModel[]> = this.dataSubject.asObservable();

  getRecipes() {
    return this.http.get<RecipeModel[]>(this.url)
  }

  postNewItem( newItem: object) {
    return this.http.post(this.url, newItem)
  }

  postUpdate( newItem: object) {
    return this.http.put(this.url, newItem)
  }

  getRecipesId(){
   return this.http.get<RecipeModel[]>(this.url + this.recipes.id)
  }

  

  deleteItem(url: string) {
    return this.http.delete(url)
  }

  reloadData(): void {
    this.getRecipes().subscribe(data => {
      this.dataSubject.next(data);
    });
  }
  
}
