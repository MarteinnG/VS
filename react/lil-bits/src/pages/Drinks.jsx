import React from 'react';
import { Link } from 'react-router-dom';
import { MainScreen, Button, DrinksSelectionBox, DrinksBody, DrinksBox, MenuBoxTexts, BeerImage, DrinkButton, SelectedDrinkText } from './Styled';
import { useState, useEffect } from 'react';
import Topbander from './Topbander';

function Drinks() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState(''); 
  const [checked1, setChecked1] = useState();
  const [checked2, setChecked2] = useState();
  const [checked3, setChecked3] = useState();
  const [checkedDrinks, setCheckedDrinks] = useState([]);
  const [amountOfDrinks, setAmountOfDrinks] = useState ((0));

  const moreDrinks = () => setAmountOfDrinks(amountOfDrinks + 1);
  const lessDrinks = () => setAmountOfDrinks(amountOfDrinks - 1);
  if(amountOfDrinks < 0){
    setAmountOfDrinks(0);
  }

  useEffect(() => {
      fetch('https://api.punkapi.com/v2/beers/random')
      .then(response => response.json())
      .then((result) => {
        setData1(result);
      },
      )},    
    [])

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then((result) => {
      // setIsLoaded(true);
      setData2(result);
    },
    )},    
  [])

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then((result) => {
      // setIsLoaded(true);
      setData3(result);
    },
    )},    
  [])

  const handleChange1 = () => {
    setChecked1(!checked1)  
    if(!checked1) {
      checkedDrinks.push(data1[0].name)
      localStorage.setItem('Drink1', JSON.stringify(data1[0].name));
      setAmountOfDrinks(moreDrinks)
    } else {
      setCheckedDrinks(checkedDrinks.filter(c => c.id !== checkedDrinks.id))
      localStorage.removeItem('Drink1', JSON.stringify(data1[0].name));
      setAmountOfDrinks(lessDrinks)
    } 
  }
  
  const handleChange2 = () => {
    setChecked2(!checked2)  
    if(!checked2) {
      checkedDrinks.push(data2[0].name)
      localStorage.setItem('Drink2', JSON.stringify(data2[0].name));
      setAmountOfDrinks(moreDrinks)
    } else {
      setCheckedDrinks(checkedDrinks.filter(c => c.id !== checkedDrinks.id))
      localStorage.removeItem('Drink2', JSON.stringify(data2[0].name));
      setAmountOfDrinks(lessDrinks)
    } 
  }

  const handleChange3 = () => {
    setChecked3(!checked3) 
    if(!checked3) {
      checkedDrinks.push(data3[0].name)
      localStorage.setItem('Drink3', JSON.stringify(data3[0].name));
      setAmountOfDrinks(moreDrinks)
    } else {
      setCheckedDrinks(checkedDrinks.filter(c => c.id !== checkedDrinks.id))
      localStorage.removeItem('Drink3', JSON.stringify(data3[0].name));
      setAmountOfDrinks(lessDrinks)
    } 
  }

  localStorage.setItem('AmountOfDrinks', JSON.stringify(amountOfDrinks))
  
  function reload() {
    window.location.reload(false);
  }

  useEffect(() => {
    
    },
      [data1]);

    return(
      <div>
        <Topbander/>
        <MainScreen>
          <DrinksBody>
            <DrinksBox>
              <DrinkButton type='checkbox' onClick={handleChange1}>{data1 && data1.map(({id, name, image_url, tagline}) => (<p key={id}>{name} <hr /> {<BeerImage src={image_url} alt='No Picture' />} <br /> <SelectedDrinkText>{tagline}</SelectedDrinkText></p>))} <br /> {checked1 ? '√' : ''}</DrinkButton>
              <DrinkButton type='checkbox' onClick={handleChange2}>{data2 && data2.map(({id, name, image_url, tagline}) => (<p key={id}>{name} <hr /> {<BeerImage src={image_url} alt='No Picture' />} <br /> <SelectedDrinkText>{tagline}</SelectedDrinkText></p>))} <br /> {checked2 ? '√' : ''}</DrinkButton>
              <DrinkButton type='checkbox' onClick={handleChange3}>{data3 && data3.map(({id, name, image_url, tagline}) => (<p key={id}>{name} <hr /> {<BeerImage src={image_url} alt='No Picture' />} <br /> <SelectedDrinkText>{tagline}</SelectedDrinkText></p>))} <br /> {checked3 ? '√' : ''}</DrinkButton>
              <Button onClick={reload}>More Drinks</Button>
            </DrinksBox>
            <DrinksSelectionBox>
              <MenuBoxTexts>
                Selected Drinks:
                <hr />
                <SelectedDrinkText>{checkedDrinks}</SelectedDrinkText>
              </MenuBoxTexts>
              <Button>
                <Link to='/order'>Order</Link>
              </Button>
            </DrinksSelectionBox> 
          </DrinksBody>
        </MainScreen>
      </div>
    )
}

export default Drinks;