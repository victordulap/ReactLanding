import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';

const data = [
  {
    src: 'images/img-9.jpg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    path: '/services',
  },
  {
    src: 'images/img-2.jpg',
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Relax',
    path: '/services',
  },
  {
    src: 'images/img-9.jpg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    path: '/services',
  },
];

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {data.slice(0, 2).map((card, index) => {
              return <CardItem key={index} {...card} />;
            })}
          </ul>
          <ul className="cards__items">
            {data.map((card, index) => {
              return <CardItem key={index} {...card} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
