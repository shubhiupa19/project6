import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetail = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error('Failed to fetch meal details', error);
      }
    };
    fetchMealDetail();
  }, [mealId]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div>
      <h2>Meal: {meal.strMeal}</h2>
      <img src = {meal.strMealThumb} alt = {meal.strMeal} />
      <h3> Recipe </h3>
      <p> {meal.strInstructions}</p>
      <a> Youtube Link: {meal.strYoutube} </a>
        

    </div>
  );
}

export default RecipeDetails;
