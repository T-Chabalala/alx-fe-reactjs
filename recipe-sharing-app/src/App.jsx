import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function HomePage() {
  return (
    <>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  );
}

export default HomePage;