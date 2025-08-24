import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Add to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // prevent duplicates
    })),

  // Remove from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate mock recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // Existing methods
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
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
        { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian pasta.' },
        { id: 2, title: 'Chicken Curry', description: 'Spicy and savory.' },
        { id: 3, title: 'Avocado Toast', description: 'Fast and healthy breakfast.' },
        { id: 4, title: 'Beef Stroganoff', description: 'Creamy Russian classic.' },
        { id: 5, title: 'Veggie Stir Fry', description: 'Crisp and colorful vegetables.' },
      ],
    }),
}));
export default useRecipeStore;