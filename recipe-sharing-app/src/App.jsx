import React, { useEffect } from 'react';

import RecipeList from './components/RecipeList';

import AddRecipeForm from './components/AddRecipeForm';


function App() {

  const initializeRecipes = useRecipeStore((state) => state.initializeRecipes);

  useEffect(() => {

    initializeRecipes();
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1> Recipe Sharing App</h1>
      
      <AddRecipeForm />

      <RecipeList />

    </div>

  );

}

export default App;
