import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  initializeRecipes: () =>
    set({
      recipes: [
        { id: 1, title: 'Spaghetti Bolognese', description: 'Classic meat sauce.' },
        { id: 2, title: 'Chicken Curry', description: 'Spicy and flavorful.' },
        { id: 3, title: 'Avocado Toast', description: 'Quick and healthy.' },
      ],
    }),
}));

export default useRecipeStore;
