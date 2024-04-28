import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  onlyOdd:boolean=false;
  //  numbers:number[]=[0,1,2,3,4,5,6]
  oddNumbers:number[]=[1,3,5]
  evenNumbers:number[]=[0,2,4,6]
  filterInput:string='';

  recipe!:RecipeModel;

  today:Date = new Date();


  

  servers = [
    {
      name: 'angular',
      status: 'offline'
    },
    {
      name: 'react',
      status: 'online'
    },
    {
      name: 'view',
      status: 'offline'
    },
    {
      name: 'angularJS',
      status: 'online'
    }
  ]
recipes: any;
  onAddServer(){
    this.servers.push({
      name: 'igli',
      status:'offline'
    })
  }
 }
