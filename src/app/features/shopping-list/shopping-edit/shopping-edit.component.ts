import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  name: string = '';
  desc: string= '';
  imgUrl: string = '';
  recipe!: RecipeModel

constructor(private mainService:MainService){}


  

  }

