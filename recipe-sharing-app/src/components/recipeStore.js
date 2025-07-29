import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }), false, 'addRecipe'),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }), false, 'deleteRecipe'),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }), false, 'updateRecipe'),

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, 'setSearchTerm');
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    }), false, 'filterRecipes'),

  initializeRecipes: () =>
    set({
      recipes: [
        { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian pasta.' },
        { id: 2, title: 'Chicken Curry', description: 'Spicy and savory.' },
        { id: 3, title: 'Avocado Toast', description: 'Fast and healthy breakfast.' },
      ],
    }, false, 'initializeRecipes'),
}));

export default useRecipeStore;