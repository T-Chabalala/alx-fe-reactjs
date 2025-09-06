import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    // Example initial data
    { id: '1', title: 'Spaghetti Bolognese', ingredients: ['pasta', 'tomato'], prepTime: 30 },
    { id: '2', title: 'Chicken Curry', ingredients: ['chicken', 'curry'], prepTime: 45 },
  ],
  searchTerm: '',
  filteredRecipes: [],

  // Add a recipe
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),

  // Update a recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updatedRecipe } : r)),
    })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // Set search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term); // update filteredRecipes immediately
  },

  // Filter recipes based on search term
  filterRecipes: (term = get().searchTerm) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const titleMatch = recipe.title.toLowerCase().includes(term.toLowerCase());
        const ingredientMatch = recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(term.toLowerCase())
        );
        return titleMatch || ingredientMatch;
      }),
    })),
}));
