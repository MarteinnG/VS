import React, { useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';
import { CarouselImg1, CarouselImg2, CarouselImg3 } from "./Styled";

export function Carousel(){
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return(
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'gray',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '15px',
              height: 0,
              lineHeight: 0,
              textAlign: 'center',
              width: 0,
              padding: 1,
              },
            children: <span>{`>`}</span>,}}
          backwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'gray',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '15px',
              height: 0,
              lineHeight: 0,
              textAlign: 'center',
              width: 0,
              padding: 10,
              },
            children: <span>{`<`}</span>,}}
          responsiveProps={[{
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
             },
            ]}
          speed={400}
          easing="linear"
          >
          <CarouselImg1 src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-pork-tonkatsu-still002-1578061748.jpg?crop=0.551xw:0.490xh;0.242xw,0.251xh&resize=1200:*'></CarouselImg1>
          <CarouselImg2 src='https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg'></CarouselImg2>
          <CarouselImg3 src='https://images.ctfassets.net/bbrc8uo4psfd/dd93c00f-9e2e-4e08-aef9-deacfab4f296/c8cdb85049655ac6d271fe0b4af7255b/importedImagedd93c00f-9e2e-4e08-aef9-deacfab4f296'></CarouselImg3>
        </ReactSimplyCarousel>
    )   
}

export default Carousel;