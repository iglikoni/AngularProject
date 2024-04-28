import { Component } from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";
import {LoggingService} from "../../shared/services/logging.service";
import {HttpClient} from "@angular/common/http";
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  name: string = '';
  desc: string= '';
  imgUrl: string = '';
  recipe!: RecipeModel

  recipes!: RecipeModel[]

 url!:'http://localhost:4000/posts'
  constructor(
    private mainService:MainService,
    private http: HttpClient
    ) {
    
  }
  

  
  

  getRecipes() {
    this.http.get<RecipeModel[]>(this.url).subscribe(recipes => {
      this.recipes = recipes;
    })
  }

  
  postNewItem() {
    const newItem = {
      name: this.name,
      description: this.desc,
      imgUrl: this.imgUrl
    }
    this.mainService.postNewItem(newItem).subscribe(data => {
      this.mainService.reloadData();
      console.log(data);
    })
  }

}
