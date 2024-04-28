import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './features/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './features/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { BasicHighlightDirective } from './shared/directives/basic-hightlight.directive';
import { BetterHightlightDirective } from './shared/directives/better-hightlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { ShortenPipe } from './shared/Pipes/shorten.pipe';
import { FilterPipe } from './shared/Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggingService } from './shared/services/logging.service';
import { MainService } from './shared/services/main.service';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path:'shopping-edit',component:ShoppingEditComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    BasicHighlightDirective,
    BetterHightlightDirective,
    UnlessDirective,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
