import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';
import FavoriteToggle from './FavoriteToggle';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes) || [];

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <FavoriteToggle recipeId={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;