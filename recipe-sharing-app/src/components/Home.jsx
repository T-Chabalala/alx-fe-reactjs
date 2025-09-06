import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <SearchBar />
      <div className="mt-4">
        <RecipeList />
      </div>
    </div>
  );
};

export default Home;
