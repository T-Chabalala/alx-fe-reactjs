import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams(); // get recipeId from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Pass the full recipe object as a prop instead of referencing recipe.id directly */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipeId} />
    </div>
  );
};

export default RecipeDetails;
