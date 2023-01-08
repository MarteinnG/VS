import React from 'react';
import { Link } from 'react-router-dom';
import { MainScreen, Button, ReceiptBox, ReceiptBody, ReceiptBoxText, EmptyBox } from './Styled';
import { useState, useEffect } from 'react';
import Topbander from './Topbander';

function Receipt() {
  const e = JSON.parse(localStorage.getItem('Email'));
  const p = JSON.parse(localStorage.getItem('People'));
  const dt = JSON.parse(localStorage.getItem('Date&Time'));
  const m = JSON.parse(localStorage.getItem('Meals'));
  const d1 = JSON.parse(localStorage.getItem('Drink1'));
  const d2 = JSON.parse(localStorage.getItem('Drink2'));
  const d3 = JSON.parse(localStorage.getItem('Drink3'));
  const ad = JSON.parse(localStorage.getItem('AmountOfDrinks'));
  
  // const [customer, setCustomer] = useState([]);
  const customer = [];

  customer.push(
    JSON.parse(localStorage.getItem('People')),
    JSON.parse(localStorage.getItem('Date&Time')),
    JSON.parse(localStorage.getItem('Meals')),
    JSON.parse(localStorage.getItem('Drink1')),
    JSON.parse(localStorage.getItem('Drink2')),
    JSON.parse(localStorage.getItem('Drink3')),
  );
  
  useEffect(() => {
    localStorage.setItem(JSON.stringify(e), JSON.stringify(customer));
    },
      [customer]);
  
  const mealPrice = 1250;
  const drinkPrice = 750;
  const sum = (p * mealPrice) + (ad * drinkPrice);

  // function total(mealPrice, drinkPrice) {
  //   return mealPrice + drinkPrice;
  // }; 
  
    return(
      <div>
        <Topbander/>
        <MainScreen>
          <ReceiptBody>
            <ReceiptBox>
              <ReceiptBoxText>
                Receipt:
                <hr />
                Customer: {e}
                <br />
                Meal:  {m[0].strMeal} x {p}
                <br />
                Drink: {d1}
                <br />
                Drink: {d2}
                <br />
                Drink: {d3}
                <hr />
                Date & Time: {dt}
                <EmptyBox></EmptyBox>
                <hr />
                TOTAL: {sum} kr.
              </ReceiptBoxText>
            </ReceiptBox>
            <Button>
              <Link to='/'>Back to Home</Link>
            </Button>
          </ReceiptBody>
        </MainScreen>
      </div>
    )
};

export default Receipt;