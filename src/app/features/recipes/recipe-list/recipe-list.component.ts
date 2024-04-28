import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import { MainService } from 'src/app/shared/services/main.service';
import { LoggingService } from 'src/app/shared/services/logging.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers:[MainService],
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  @ViewChild('inputElement') input!: ElementRef;

  recipes!: RecipeModel[];
  

  constructor(
    private http: HttpClient,
    private mainService:MainService,
   
  ) {
  }

  ngOnInit() {
    this.mainService.data$.subscribe(data => {
      this.recipes = data;
    });
    this.getRecipes();
  
  }


  // getRecipes() {
  //   posts?_page=1&_per_page=25
  //   let params = new HttpParams();
  //   params = params.append('_page', '2')
  //   params = params.append('_per_page', '10')
  //   this.<RecipeModel>(this.url, {
  //     params: params
  //   }).subscribe( data => {
  //     this.recipes = data.data;
  //   })
  // }

  /*
  Get from service
  */

  getRecipes(){
    this.mainService.getRecipes().subscribe(data=>{
      this.recipes= data
      
    })
  }


  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }
  // inputChange(event: any) {
  //   console.log(event.target.value)
  // }

  add() {
    // console.log(input.value)
    console.log(this.input.nativeElement.value)
  }

}
