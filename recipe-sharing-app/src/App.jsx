import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useRecipeStore from './store/recipeStore';
import { useEffect } from 'react';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function HomePage() {
  return (
    <>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

function App() {
  const initializeRecipes = useRecipeStore((state) => state.initializeRecipes);

  useEffect(() => {
    initializeRecipes();
  }, [initializeRecipes]);

  return (
    <BrowserRouter>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
