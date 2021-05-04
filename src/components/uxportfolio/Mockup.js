import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import Slide1 from './../../assets/ux/common_ground/explore_page.webp';
import Slide2 from './../../assets/ux/common_ground/wheel.webp';
import Slide3 from './../../assets/ux/common_ground/restaurant_view.webp';
import IPhone11ProMaxMockup from './../../assets/ux/IPhone11ProMaxMockup.png';

const useStyles = makeStyles({
  carouselContainer: {
    textAlign: 'center',
    borderRadius: 6,
    position: 'absolute',
    top: 0,
    width: "88.276%",
    marginLeft: '5.862%',
    marginRight: '5.862%',
    height: '94.438%',
    marginBottom: '5.25%',
    marginTop: '5.25%',
  },
  description: {
    margin: 0,
    color: 'white'
  },
  descriptionContainer: {
    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.60) 15%, rgba(0,0,0,0.60) 85%, rgba(0,0,0,0) 100%)',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%"
  },
  item: {
    maxWidth: "100vw",
    width: '100%'
  },
  photo: {
    width: "100%",
    height: '100%'
  },
  carousel: {
    position: 'static',
    //right button wrapper
    '& div:nth-of-type(2)': {
      right:-90
    },
    //left button wrapper
    '& div:nth-of-type(3)': {
      left:-90
    }
  },
  mockup: {
    width:500,
    position:'relative',
  }
});

function PrototypeCarousel() {
  var items = [
    {
      photo: Slide1
    },
    {
      photo: Slide2
    },
    {
      photo: Slide3
    }
  ]
  const classes = useStyles();
  return (
    <div id='carousel' className={classes.carouselContainer}>
      <Carousel
        autoPlay={true}
        animation='slide'
        timeout={300}
        interval={5000}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        className={classes.carousel}
        navButtonsProps={{
          style:{
            zIndex: 1
          }
        }}
        navButtonsWrapperProps={{
          style:{
            zIndex: 1
          }
        }}
      >
        {items.map((item, i) => <Photo key={i} item={item} />)}
      </Carousel>
    </div>
  )
}

function Photo(props) {
  const classes = useStyles();
  return (
    <img alt="" src={props.item.photo} className={classes.photo} />
  )
}

export default function Mockup() {
  const classes = useStyles();
  return (
    <div className={classes.mockup}>
      <img src={IPhone11ProMaxMockup} alt="" style={{width:'100%',zIndex:1,position:'relative'}}/>
      <PrototypeCarousel/>
    </div>
  );
}

