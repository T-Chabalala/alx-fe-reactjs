
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import useRecipeStore from './store/recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function HomePage() {
  return (
    <>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

function App() {
  const initializeRecipes = useRecipeStore((state) => state.initializeRecipes);

  useEffect(() => {
    initializeRecipes();
  }, []);

  return (
    <BrowserRouter>
      <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;