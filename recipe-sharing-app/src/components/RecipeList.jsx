// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Initialize filteredRecipes on first render
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div className="grid gap-4">
      {displayedRecipes.length === 0 && <p>No recipes found.</p>}
      {displayedRecipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="border p-4 rounded hover:shadow">
          <h2 className="font-bold">{recipe.title}</h2>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
          <p>Prep Time: {recipe.prepTime} min</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
