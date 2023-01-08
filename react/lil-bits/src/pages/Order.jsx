import React from 'react';
import { Link } from 'react-router-dom';
import { MainScreen, OrderBody, Button, OrderBox, OrderBoxFunctions, OrderBoxInput, OrderBoxHeader, OrderBoxPeople } from './Styled';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Topbander from './Topbander';

function Order() {
    const [email, setEmail] = useState(('')); 
    const [people, setPeople] = useState((0));
    const [value, onChange] = useState(new Date());

    const increment = () => setPeople(people + 1);
    if(people > 10) {
      setPeople(10);
    }
    const decrement = () => setPeople(people - 1);
    if(people < 0) {
      setPeople(0);
    }

    const handleSubmit = event => {
      event.preventDefault();
      localStorage.setItem('Email', JSON.stringify(email));
      localStorage.setItem('People', JSON.stringify(people));
      localStorage.setItem('Date&Time', JSON.stringify(value));
      setEmail('');
      setPeople(0);
      onChange(new Date);
    };

    return(
      <div>
        <Topbander/>
        <MainScreen>
          <OrderBody>
            <OrderBoxHeader>
              Finalize Your Order:
              <hr />
            </OrderBoxHeader>
            <OrderBox>
              <OrderBoxFunctions>
                Date & Time of Visit:
                <br />
                <br />
                <DateTimePicker value={value} onChange={onChange} minDate={new Date}/>
              </OrderBoxFunctions>
              <OrderBoxFunctions>
                Email:
                <form form onSubmit={handleSubmit}>
                  <OrderBoxInput  type='text' value={email} onChange={e => setEmail(e.target.value)}>
                  </OrderBoxInput>
                  <Button type='submit' OnClick={handleSubmit}>
                    Update Order
                  </Button>
                </form>
              </OrderBoxFunctions>
              <OrderBoxFunctions>
                Amount of People:
                <OrderBoxPeople type='number' value={people} onChange={e => setPeople(e.target.value)}>
                  <Button onClick={decrement}>-</Button>
                    {people}
                  <Button onClick={increment}>+</Button>
                </OrderBoxPeople>
                <br />
              </OrderBoxFunctions> 
            </OrderBox>
            <Button>
              <Link to='/receipt'>Get Your Receipt</Link>
            </Button>
          </OrderBody>
        </MainScreen>
      </div>
    )
}

export default Order;