import { useRef, useState } from 'react';
// import './App.css';
import styled, { css } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';


const Button = styled.button`
  margin-top: 20px;
  height: 45px;
  width: 80px;
  font-size: 35px;
  margin-left: 25px;
`;

const Input = styled.input`
  width: 300px;
  height: 32px;
  
  ${props => props.primary && css`
    margin-left: 18px;
    `}
  `;

const Body = styled.body`
  background-color: #282c34;
  margin: 70px;
`;

const Title = styled.h1`
  color: #61dafb;	
  font-size: 50px;
  font-weight: normal;
  `;

const Textbox = styled.a`
  display: flex;
  align-items: center;
  height: 60px;
  color: white;
  font-size: 25px;
  `;

const Valuebox = styled.p`
  display: flex;
  height: 10px;
  align-items: center;
  color: white;
  font-size: 25px;
  `;

const Indicator = styled.p`
  margin-left: 25px;
  margin-right: 70px;
    `;

const Objectfield = styled.object`
  color: white;
  font-size: 25px;
  `;


function App() {
  const [objectList, setObjectlist] = useState([]);

  const useMountTransition = (isMounted, unmountDelay) => {
    const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
    return hasTransitionedIn;
  }


  

  const nameValue = useRef('');
  const valueValue = useRef('');
  const countValue = useRef('');

  const handleClick = () => {
    setObjectlist((list) => [
      ...list,
      {name: nameValue.current, value: valueValue.current, count: countValue.current},
    ])
  }

  return (
      <Body>
      <Title>Add Expense</Title>
        <Textbox>
          <Indicator>Name</Indicator>
          <Input onChange={(event) => {
            nameValue.current = event.target.value;
          }}/>
        </Textbox>
        <Textbox>
          <Indicator>Cost</Indicator>
          <Input primary onChange={(event) => {
            valueValue.current = event.target.value;
          }}/>
        </Textbox>
        <Button onClick={handleClick}>Add</Button>  
        <Title>Stats</Title>
        <Valuebox>
          <Indicator>Sum:</Indicator>
          <Objectfield>{objectList.reduce((previousValue, currentValue) => 
              previousValue + Number(currentValue.value), 0)}</Objectfield>
        </Valuebox>
        <Valuebox>
          <Indicator>Count:</Indicator>
          <Objectfield>{objectList.reduce((countValue) => 
              countValue +1, 0)}</Objectfield>
        </Valuebox> 
        
      </Body>
  );
}
      

export default App;

// import { useRef, useState } from 'react';
// import './App.css';
// import styled, { css } from 'styled-components';
// import { v4 as uuid } from 'uuid';
// import { useEffect } from 'react';


// const Button = styled.button`
//   margin-top: 20px;
//   height: 45px;
//   width: 80px;
//   font-size: 35px;
//   margin-left: 25px;
// `;

// const Input = styled.input`
//   width: 300px;
//   height: 32px;
  
//   ${props => props.primary && css`
//     margin-left: 18px;
//     `}
//   `;

// const Body = styled.body`
//   background-color: #282c34;
//   margin: 70px;
// `;

// const Title = styled.h1`
//   color: #61dafb;	
//   font-size: 50px;
//   font-weight: normal;
//   `;

// const Textbox = styled.a`
//   display: flex;
//   align-items: center;
//   height: 60px;
//   color: white;
//   font-size: 25px;
//   `;

// const Valuebox = styled.p`
//   display: flex;
//   height: 10px;
//   align-items: center;
//   color: white;
//   font-size: 25px;
//   `;

// const Indicator = styled.p`
//   margin-left: 25px;
//   margin-right: 70px;
//     `;

// const Objectfield = styled.object`
//   color: white;
//   font-size: 25px;
//   `;

// const TextWrapper = styled.wrapper`
//   background-color: gray;
//   `;

//  const Ticket = styled.ticket`
//   color: white;
//   border: 1px red;
//   `; 


// function App() {
//   const [objectList, setObjectlist] = useState([]);

//   // const useMountTransition = (isMounted, unmountDelay) => {
//   //   const [hasTransitionedIn, setHasTransitionedIn] = useState(false);
//   //   return hasTransitionedIn;
//   // }

//   const nameValue = useRef('');
//   const costValue = useRef('');
//   const countValue = useRef('');

//   // useEffect(() => {
//   //   console.log('rendering')
//   // }, [])

//   const handleClick = () => {
//     // if(nameValue.current.value && Number(costValue.current.value) && countValue.current.value) {
//     //   setObjectlist((li) => [
//     //     ...li,
//     //     {key: uuid(),
//     //     name: nameValue.current.value,
//     //     value: costValue.current.value,
//     //     count: countValue.current.value,
//     //     },
//     //   ])
//     // }
//   }

//   return (
//       <Body>
//       <Title>Add Expense</Title>
//         <Textbox>
//           <Indicator>Name</Indicator>
//           <Input 
//             // ref={nameValue}
//             onChange={(event) => {
//             nameValue.current.value = event.target.value;
//           }}/>
//         </Textbox>
//         <Textbox>
//           <Indicator>Cost</Indicator>
//           <Input 
//             // ref={costValue}
//             primary onChange={(event) => {
//             costValue.current.value = event.target.value;
//           }}/>
//         </Textbox>
//         <Button onClick={handleClick}>Add</Button>  
//         <Title>Stats</Title>
//         <Valuebox>
//           <Indicator>Sum:</Indicator>
//           <Objectfield>{objectList.reduce((previousValue, currentValue) => 
//               previousValue + Number(currentValue.value), 0)}</Objectfield>
//         </Valuebox>
//         <Valuebox>
//           <Indicator>Count:</Indicator>
//           <Objectfield>{objectList.reduce((countValue) => 
//               countValue +1, 0)}</Objectfield>
//         </Valuebox> 
//         {/* <TextWrapper>
//           {objectList.map((objectListItem) => (
//             <Ticket
//               key={objectListItem.key}
//               onClick={() => {
//                 setObjectlist((li) => li.filter((i) => i.key !== objectListItem.key))
//               }}>
//                 <div>
//                   <Indicator>Name</Indicator>
//                   {objectListItem.name}
//                 </div>
//                 <div>
//                   <Indicator>Cost</Indicator>
//                   {objectListItem.cost}
//                 </div>
//             </Ticket>
//           ))}
//         </TextWrapper> */}
//       </Body>
//   );
// }
      

// export default App;
