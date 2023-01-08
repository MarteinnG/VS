import './App.css';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Drinks from './pages/Drinks';
import Layout from './pages/Layout';
import Order from './pages/Order';
import Receipt from './pages/Receipt';

export default function App() {
  // const navigate = useNavigate();

  // const navigateHome = () => {
  //   navigate('/');
  // };

  // const navigateToMenu = () => {
  //   navigate('/menu');
  // };

  // const navigateToOrder = () => {
  //   navigate('/order');
  // };

  // const navigateToDrinks = () => {
  //   navigate('/drinks');
  // };

  // const navigateToReceipt = () => {
  //   navigate('/receipt');
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='drinks' element={<Drinks />} />
          <Route path='order' element={<Order />} />
          <Route path='receipt' element={<Receipt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
  // const data = ['1','2','3']
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const carouselInfiniteScroll = () => {
  //   if (currentIndex === data.length-1) {
  //     return setCurrentIndex(0)
  //   }
  //   return setCurrentIndex(currentIndex+1)
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
  //   return () => clearInterval(interval)
  // })

//   return (
    // <HomeScreen>
    //   <Header>
    //     <h>LOGO</h>
    //     <h>RESTAURANT</h>
    //     <h>PRODUCT</h>
    //     <h>MENU</h>
    //     <h>CONTACT</h>
    //   </Header>
    //   <Body>
    //     <CarouselContainer>
    //         Carousel
    //     </CarouselContainer>
    //     <OrderBox>
    //       Order
    //     </OrderBox>
    //     <FindOrderBox>
    //       Find Order
    //     </FindOrderBox>
    //     <Contentbox>
    //       Content
    //     </Contentbox>
    //   </Body>
    // </HomeScreen>
//   );
// }

// export default App;
