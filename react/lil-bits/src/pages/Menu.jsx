import React from 'react';
import { Link } from 'react-router-dom';
import { MainScreen, MenuBody, Button, ApiBox, DishSelectionBox, ApiTitleBox, MenuBoxTexts, MealImage, SelectedItemText, TitleBoxText, APIdiv } from './Styled';
import { useState, useEffect } from 'react';
import Topbander from './Topbander';

export function Menu() {
  const [meals, setMeals] = useState('');

  useEffect(() => {
    fetch('https://themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((response) => setMeals(response.meals))
    return setMeals;
  },
    []);

  useEffect(() => {
    localStorage.setItem('Meals', JSON.stringify(meals));
     },
    [meals]);

  function generateNewDish() {
    window.location.reload(false);
  }

    return(
      <div>
        <Topbander/> 
        <MainScreen>
          <MenuBody>
            <ApiBox>
              {meals && meals.map(({ idMeal, strMealThumb }) => (
                <APIdiv key={idMeal}>
                  {<MealImage src={strMealThumb} alt="Meal Image" /> }
                </APIdiv>
              ))}
            </ApiBox>
            <ApiTitleBox>
              {meals && meals.map(({ idMeal, strMeal, strArea, strCategory }) => (
                <APIdiv key={idMeal}>
                  <TitleBoxText>
                    {strMeal}
                  </TitleBoxText>
                  <SelectedItemText>
                      {strArea} {strCategory}
                    </SelectedItemText>
                </APIdiv>
              ))}
              <Button onClick={generateNewDish}>Generate New Dish</Button>
            </ApiTitleBox> 
            <DishSelectionBox>
              <MenuBoxTexts>
                Selected Dish:
              </MenuBoxTexts>
              {meals && meals.map(({ idMeal, strArea, strCategory}) => (
                <APIdiv key={idMeal}>
                  <SelectedItemText>{strArea} {strCategory}</SelectedItemText>
                </APIdiv>
              ))}
              <Button>
                <Link to='/drinks'>Drinks</Link>
              </Button>
            </DishSelectionBox>
          </MenuBody>
        </MainScreen>
      </div>
    )
};


export default Menu;
