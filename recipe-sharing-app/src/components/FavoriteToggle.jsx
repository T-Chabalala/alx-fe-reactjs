import useRecipeStore from '../store/recipeStore';

const FavoriteToggle = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFav = favorites.includes(recipeId);

  return (
    <button onClick={() => isFav ? removeFavorite(recipeId) : addFavorite(recipeId)}>
      {isFav ? ' Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteToggle;