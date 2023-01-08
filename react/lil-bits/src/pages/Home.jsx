import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainScreen, HomeBody, Button, CarouselBox, HomeBoxTexts, FindOrderBox, FindOrderBoxFunction, Contentbox, MenuBox, ReceiptBoxText, FindInput, } from './Styled';
import Topbander from './Topbander';
import Carousel from './Carousel';

function Home() {
  const [input, setInput] = useState(('')); 
  
  const find = JSON.parse(localStorage.getItem('siggi@gmail.com'));
  console.log({find});
  
  const handleClick = () => event =>  {
    event.preventDefault();
    setInput('')
  }

  localStorage.removeItem('Date&Time');
  localStorage.removeItem('Drink1');
  localStorage.removeItem('Drink2');
  localStorage.removeItem('Drink3');
  localStorage.removeItem('AmountOfDrinks');
  localStorage.removeItem('People');
  localStorage.removeItem('Meals');
  localStorage.removeItem('Email');

    return(
      <div>
        <Topbander/>
        <MainScreen>
          <HomeBody>
            <CarouselBox>
              <Carousel/>   
            </CarouselBox>
            <MenuBox>
              <HomeBoxTexts>
                Check Our Menu:
              </HomeBoxTexts>
              <Button>
                <Link to='/menu'>Food Menu</Link>
              </Button>
            </MenuBox>
            <FindOrderBox>
              <HomeBoxTexts>
                Check your Order
              </HomeBoxTexts>
              <FindOrderBoxFunction>
                Enter your email:
                <br />
                <form>
                <FindInput type='text' onChange={e => setInput(e.target.value)} ></FindInput>
                <Button onClick={handleClick}>Find</Button>
                </form>
              </FindOrderBoxFunction>
            </FindOrderBox>
            <Contentbox>
              <HomeBoxTexts>
                Your Order: <hr /> 
                <ReceiptBoxText>{find}</ReceiptBoxText>
              </HomeBoxTexts>
            </Contentbox>
          </HomeBody>
        </MainScreen>
      </div>
    )
}

export default Home;