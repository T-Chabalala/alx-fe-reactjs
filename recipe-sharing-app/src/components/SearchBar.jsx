import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes by name or ingredient..."
      onChange={(event) => setSearchTerm(event.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};

export default SearchBar;
