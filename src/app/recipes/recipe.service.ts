import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Biryani',
            'This is a Biryani recipe',
            'http://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Rice', 1)
            ]
        ),
        // new Recipe('Another Test Recipe', 'This is another recipe',
        // 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', []),
        new Recipe(
            'A Pizza Recipe',
            'This is a pizza recipe',
            'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg',
            [
                new Ingredient('Base', 1),
                new Ingredient('Paneer', 10)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipies() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
