import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  
})
export class RecipeDetailComponent {

  @Input() recipeCh!: RecipeModel;

   newItem = {
    name: '',
    description:'',
    imgUrl: ''
  }
  
  url = 'http://localhost:4000/posts'
name: any;
desc: any;
imgUrl: any;
  constructor(
    private http: HttpClient,
    private mainService:MainService
  ) {
  }


  updatePost(newItem:any){
    this.mainService.postUpdate(newItem).subscribe(data=>{
      this.mainService.reloadData();
    })
  }

 


   deleteItem(){
    this.mainService.deleteItem(this.url +'/' + this.recipeCh.id ).subscribe(value => {
      this.mainService.reloadData()
      console.log(value,'deleted')
    })
  }


 
 
  getIdPosts(){
    this.newItem = this.recipeCh;
  }

  


  //    deleteItem() {

  //   this.http.delete('http://localhost:4001/posts'
  //      + '/' + this.recipeCh.id, {
  //     params: new HttpParams().set('id', this.recipeCh.id as string),
  //   } ).subscribe(value =>
  //   {
  //     console.log(value)
  //      this.logService.reloadData();
       
  //   })
  // }
}
