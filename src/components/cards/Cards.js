import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import ionic from '../../assets/images/ionic.png'
import lier from '../../assets/images/logo-lier.jpg'
import eazyInk from '../../assets/images/tattoo.jpg'
import stripe from '../../assets/images/stripe.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ionic}
              text='Bachelor Project: Mobile Application For Millum AS'
              label='Ionic Angular'
              path='/projects/bachelor'
            />
            <CardItem
              src={lier}
              text='Mobile Application For Lier Municipale'
              label='React, Node.JS, AWS'
              path='/projects/lier'
            />
            <CardItem
              src={stripe}
              text='Small Ecommerce Application'
              label='Next.js, React'
              path='/projects/StripeApp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;