import styled from "styled-components";

export const MainScreen = styled.div`
    background-color: gray;
    height: 85vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const TopBar = styled.nav`
    background-color: gray;
    display: flex;
    flex-direction: row;
    border: solid 1px black;
    `;

export const TopMenu = styled.nav`
    width: 75%;
    background-color: gray;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    color: white;
    padding: 0% 10% 0% 10%;
    @media (min-width: 425px) {
        width: 100%;
        font-size: 14px;
    }
    @media (min-width: 640px) {
        width: 100%;
        font-size: 16px;
    }
    @media (min-width: 740px) {
        width: 100%;
        font-size: 18px;
    }
    @media (min-width: 1080px) {
        width: 75%;
        font-size: 20px;
    }
    `;

export const HomeBody = styled.body`
    width: 1050px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    `;

export const MenuBody = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    @media (min-width: 425px) {
        height: 360px;
        width: 360px;
    }
    @media (min-width: 640px) {
        height: 410px;
        width: 410px;
    }
    @media (min-width: 740px) {
        height: 460px;
        width: 460px;
    }
    @media (min-width: 940px) {
        height: 510px;
        width: 510px;
    }
    `;

export const DrinksBody = styled.body`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    flex-wrap: wrap;
    `;

export const Button = styled.button`
    background-color: lightblue;
    border: 1px solid blue;
    border-radius: 8px; 
    padding: 4px;
    margin: 30px 10px;
    height: 30px;
    @media (min-width: 425px) {
        font-size: 12px;
    }
    @media (min-width: 640px) {
        font-size: 13px;
    }
    @media (min-width: 960px) {
        font-size: 14px;
    }
    `;    

export const Logo = styled.img`
    @media (min-width: 425px) {
        height: 80px;
        width: 80px;
    }
    @media (min-width: 640px) {
        height: 90px;
        width: 90px;
    }
    @media (min-width: 740px) {
        height: 100px;
        width: 100px;
    }
    `;

export const CarouselBox = styled.div`
    background-color: gray;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;

export const CarouselImg1 = styled.img`
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 150px;
        width: 275px;
    }
    @media (min-width: 640px) {
        height: 175px;
        width: 350px;
    }
    @media (min-width: 740px) {
        height: 205px;
        width: 425px;
    }
    @media (min-width: 940px) {
        height: 225px;
        width: 500px;
    }
    @media (min-width: 1080px) {
        height: 250px;
        width: 575px;
    }
    `;

export const CarouselImg2 = styled.img`
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 150px;
        width: 275px;
    }
    @media (min-width: 640px) {
        height: 175px;
        width: 350px;
    }
    @media (min-width: 740px) {
        height: 205px;
        width: 425px;
    }
    @media (min-width: 940px) {
        height: 225px;
        width: 500px;
    }
    @media (min-width: 1080px) {
        height: 250px;
        width: 575px;
    }
    `;

export const CarouselImg3 = styled.img`
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 150px;
        width: 275px;
    }
    @media (min-width: 640px) {
        height: 175px;
        width: 350px;
    }
    @media (min-width: 740px) {
        height: 205px;
        width: 425px;
    }
    @media (min-width: 940px) {
        height: 225px;
        width: 500px;
    }
    @media (min-width: 1080px) {
        height: 250px;
        width: 575px;
    }
    `;

export const FindInput = styled.input`
    @media (min-width: 425px) {
        width: 116px;
    }
    @media (min-width: 640px) {
        width: 165px;
    }            
    `;
  
export const MenuBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2px 2px 2px 8px;
    @media (min-width: 425px) {
        height: 150px;
        width: 125px;
    }
    @media (min-width: 640px) {
        height: 175px;
        width: 150px;
    }
    @media (min-width: 740px) {
        height: 200px;
        width: 175px;
    }
    @media (min-width: 940px) {
        height: 225px;
        width: 200px;
    }
    @media (min-width: 1080px) {
        height: 250px;
        width: 225px;
    }
    `;

export const HomeBoxTexts = styled.p`
    font-weight: bold;
    margin: 0px 10px 6px 10px;
    padding-top: 20px;
    @media (min-width: 425px) {
        font-size: 16px;
    }
    @media (min-width: 640px) {
        font-size: 18px;
    }
    @media (min-width: 740px) {
        font-size: 20px;
    }
    @media (min-width: 940px) {
        font-size: 24px;
    }
    @media (min-width: 1080px) {
        font-size: 26px;
    }
    `;

export const MenuBoxTexts = styled.p`
    font-weight: bold;
    margin: 10px;
    font-size: 10px;
    `;
  
export const FindOrderBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 2px 2px 2px 20px;
    @media (min-width: 425px) {
        height: 150px;
        width: 200px;
    }
    @media (min-width: 640px) {
        height: 175px;
        width: 250px;
    }
    @media (min-width: 740px) {
        height: 200px;
        width: 300px;
    }
    @media (min-width: 940px) {
        height: 225px;
        width: 350px;
    }
    @media (min-width: 1080px) {
        height: 250px;
        width: 400px;
    }
    `;

export const FindOrderBoxFunction = styled.div`
    fond-weight: light;
    font-size: small;
    margin: 10px 0px 0px 10px;
    `;
  
export const Contentbox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    margin: 2px 2px 2px 4px;
    @media (min-width: 425px) {
        height: 150px;
        width: 200px;
    }
    @media (min-width: 640px) {
        height: 175px;
        width: 250px;
    }
    @media (min-width: 740px) {
        height: 200px;
        width: 300px;
    }
    @media (min-width: 940px) {
        height: 225px;
        width: 350px;
    }
    @media (min-width: 1080px) {
        height: 250px;
        width: 400px;
    }
    `;

export const ApiBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 170px;
        width: 270px;
    }
    @media (min-width: 640px) {
        height: 195px;
        width: 295px;
    }
    @media (min-width: 740px) {
        height: 220px;
        width: 320px;
    }
    @media (min-width: 940px) {
        height: 245px;
        width: 345px;
    }
    `;

export const ApiTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 170px;
        width: 270px;
    }
    @media (min-width: 640px) {
        height: 195px;
        width: 295px;
    }
    @media (min-width: 740px) {
        height: 220px;
        width: 320px;
    }
    @media (min-width: 940px) {
        height: 245px;
        width: 345px;
    }
    `;

export const DishSelectionBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 2px;
    @media (min-width: 425px) {
        height: 140px;
        width: 125px;
    }
    @media (min-width: 640px) {
        height: 150px;
        width: 145px;
    }
    @media (min-width: 740px) {
        height: 170px;
        width: 165px;
    }
    @media (min-width: 940px) {
        height: 190px;
        width: 185px;
    }
    `;

export const DrinksSelectionBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 2px;
    @media (min-width: 425px) {
        max-height: 170px;
        width: 100px;
    }
    @media (min-width: 640px) {
        height: 170px;
        width: 125px;
    }
    @media (min-width: 740px) {
        height: 170px;
        width: 130px;
    }
    @media (min-width: 940px) {
        height: 175px;
        width: 140px;
    }
    `;

export const DrinksBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: 425px) {
        height: 500px;
        width: 300px;
    }
    @media (min-width: 640px) {
        height: 510px;
        width: 325px;
    }
    @media (min-width: 740px) {
        height: 520px;
        width: 350px;
    }
    @media (min-width: 940px) {
        height: 530px;
        width: 375px;
    }
    `;

export const SelectedDrinkText = styled.p`
    font-weight: bold;
    font-size: 10px;
    margin: 1px;
    `;

export const BeerImage = styled.img`
    margin-top: 10px;
    margin-bottom: 25px;
    heigt: 25px;
    width: 25px;
    `;

export const OrderBody = styled.body`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 300px;
        width: 450px;
    }
    @media (min-width: 640px) {
        height: 300px;
        width: 500px;
    }
    @media (min-width: 740px) {
        height: 350px;
        width: 600px;
    }
    @media (min-width: 940px) {
        height: 400px;
        width: 800px;
    }
    @media (min-width: 1080px) {
        height: 450px;
        width: 900px;
    }
    `;

export const OrderBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (min-width: 425px) {
        height: 242px;
    }
    @media (min-width: 740px) {
        height: 292px;
    }
    @media (min-width: 940px) {
        height: 342px;
    }
    @media (min-width: 1080px) {
        height: 392px;
    }
    `;

export const OrderBoxInput = styled.input`
    
    `;

export const OrderBoxFunctions = styled.div`
    font-weight: light;
    margin: 10px;
    width: 250px;
    @media (min-width: 425px) {
        font-size: 12px;
    }
    @media (min-width: 740px) {
        font-size: 14px;
    }
    @media (min-width: 1080px) {
        font-size: 15px;
    }
    `;

export const CalendarBox = styled.div`
    margin: 10px;
    height: 125px;
    width: 150px;
    `;

export const OrderBoxPeople = styled.p`
    font-weight: bold;
    margin: 10px;
    font-size: 20px;
    `;

export const OrderBoxHeader = styled.p`
    font-weight: bold;
    margin: 10px;
    font-size: 20px;
    `;

export const ReceiptBox = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    @media (min-width: 425px) {
        height: 350px;
        width: 250px;
    }
    @media (min-width: 640px) {
        height: 400px;
        width: 300px;
    }
    @media (min-width: 940px) {
        height: 450px;
        width: 350px;
    }
    `;

export const ReceiptBody = styled.body`
    align-items: center;
    `;

export const ReceiptBoxText = styled.p`
    font-weight: bold;
    font-size: small;
    margin: 10px;
    `;

export const MealImage = styled.img`
    @media (min-width: 425px) {
        height: 170px;
        width: 270px;
    }
    @media (min-width: 640px) {
        height: 195px;
        width: 295px;
    }
    @media (min-width: 740px) {
        height: 220px;
        width: 320px;
    }
    @media (min-width: 940px) {
        height: 245px;
        width: 345px;
    } 
    `;

export const SelectedItemText = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    font-size: 15px;
    @media (min-width: 425px) {
        font-size: 12px;
    }
    @media (min-width: 640px) {
        font-size: 15px;
    `;

export const TitleBoxText = styled.div`
    margin: 13px 10px 20px 8px;
    font-size: 25px;
    font-weight: bold;
    @media (min-width: 425px) {
        font-size: 18px;
    }
    @media (min-width: 640px) {
        font-size: 23px;
    }
    `;

export const DrinkButton = styled.button`
    border: 1px solid black;
    border-radius: 2px; 
    margin: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: bold;
    @media (min-width: 425px) {
        width: 80px;
        font-size: 10px;
    }
    @media (min-width: 640px) {
        width: 90px;
        font-size: 12px;
    }
    @media (min-width: 740px) {
        width: 100px;
        font-size: 14px;
    }    
    @media (min-width: 940px) {
        width: 110px;
        font-size: 16px;
    }
    `;

export const EmptyBox = styled.div`
    height: 180px;
    width: 50px;
    `;

export const APIdiv = styled.div`

    `;

export default (MainScreen, TopBar, TopMenu, HomeBody, MenuBody, DrinksBody, OrderBody, Button, Logo, CarouselBox, OrderBox, MenuBox, HomeBoxTexts, MenuBoxTexts, FindOrderBox, FindOrderBoxFunction, Contentbox, CarouselImg1, CarouselImg2, CarouselImg3, ApiBox, ApiTitleBox, DishSelectionBox, DrinksSelectionBox, DrinksBox, OrderBoxInput, OrderBoxFunctions, CalendarBox, OrderBoxHeader, ReceiptBox, ReceiptBody, ReceiptBoxText, MealImage, SelectedItemText, TitleBoxText, BeerImage, DrinkButton, SelectedDrinkText, OrderBoxPeople, EmptyBox, APIdiv);