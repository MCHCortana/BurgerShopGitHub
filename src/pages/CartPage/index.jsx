import './cart.scss';

import React, { useContext } from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from './../../../public/assets/burger1.png';
import burger2 from './../../../public/assets/burger2.png';
import burger3 from './../../../public/assets/burger3.png';
import { ShopContext } from '../../context';

const CartItem = ({ value, title, img, price, increment, decrement, id }) => (
  <div className="cartItem">
    <div className="burger_info">
      <div className="burger_img">
        <img src={img} alt="Item" />
      </div>
      <div>
        <h4>{title}</h4>
        <h4> ₹{price}</h4>
      </div>
    </div>

    <div>
      <button
        onClick={() => {
          decrement(id, value);
        }}
      >
        -
      </button>
      <input type="number" readOnly value={value} />
      <button onClick={() => increment(id)}>+</button>
    </div>
  </div>
);

export const CartPage = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    totalPrice,
    tax,
    shipping,
    checkOutPrice,
  } = useContext(ShopContext);

  const handleDecrement = (id, value) => {
    value - 1 >= 0 && removeFromCart(id);
  };
  const handleIncrement = (id) => {
    addToCart(id);
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={'Cheese Burger'}
          img={burger1}
          id={1}
          value={cartItems[1].pcs}
          increment={handleIncrement}
          decrement={handleDecrement}
          price={200}
        />
        <CartItem
          title={'Veg Cheese Burger'}
          img={burger2}
          id={2}
          value={cartItems[2].pcs}
          increment={handleIncrement}
          decrement={handleDecrement}
          price={500}
        />

        <CartItem
          title={'Cheeseburger with French Fries'}
          img={burger3}
          id={3}
          value={cartItems[3].pcs}
          increment={handleIncrement}
          decrement={handleDecrement}
          price={1800}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{totalPrice}</p>
          </div>
          <div>
            <h4>Tax {tax}%</h4>
            <p>₹{totalPrice * tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shipping}</p>
          </div>{' '}
          <div>
            <h4>Total</h4>
            <p>₹{checkOutPrice}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};
