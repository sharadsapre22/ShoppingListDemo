import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Biryani',
            'This is a Biryani recipe',
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
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

    getRecipies() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
