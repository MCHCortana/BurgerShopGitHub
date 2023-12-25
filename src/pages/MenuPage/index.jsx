import './menu.scss';

import React, { useContext } from 'react';
import { MenuCard } from './MenuCard';
import { ShopContext } from '../../context';

import burger1 from './../../../public/assets/burger1.png';
import burger2 from './../../../public/assets/burger2.png';
import burger3 from './../../../public/assets/burger3.png';

export const MenuPage = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  console.log(cartItems);
  const addToCartHandler = (itemNum) => {
    addToCart(itemNum);
  };

  return (
    <div id="menu">
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={cartItems[1].price}
          title={'CHESE BURGER'}
          handler={addToCartHandler}
          delay={0.1}
          itemCart={cartItems[1].pcs}
        />

        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={cartItems[2].price}
          title=" VEG CHEESE BURGER"
          handler={addToCartHandler}
          delay={0.1}
          itemCart={cartItems[2].pcs}
        />

        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={cartItems[3].price}
          title="CHEESE BURGER WITH FRENCH FRIES"
          handler={addToCartHandler}
          delay={0.1}
          itemCart={cartItems[3].pcs}
        />
      </div>
    </div>
  );
};
