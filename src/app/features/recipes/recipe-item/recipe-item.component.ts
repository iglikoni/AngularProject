import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  recipes:RecipeModel[]=[
    {name:'Recipe one',description:'Made with domatoes',imgUrl:'https://wallpaperaccess.com/full/2917213.jpg',quantity:5,detail:'Margarita'}
  ]

}
