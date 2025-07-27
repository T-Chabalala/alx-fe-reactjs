import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),

  // Initialize with starter data
  initializeRecipes: () =>
    set({
      recipes: [
        {
          id: 1,
          title: 'Spaghetti Bolognese',
          description: 'A classic Italian pasta dish with a rich meat sauce.',
        },
        {
          id: 2,
          title: 'Chicken Curry',
          description: 'Tender chicken simmered in a spicy curry sauce.',
        },
        {
          id: 3,
          title: 'Avocado Toast',
          description: 'Toasted bread topped with mashed avocado, salt, and chili flakes.',
        },
      ],
    }),
}));

export default useRecipeStore;