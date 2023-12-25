import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Popup from 'reactjs-popup';
import { FiShoppingCart } from 'react-icons/fi';

export const MenuCard = ({
  itemNum,
  burgerSrc,
  price,
  title,
  handler,
  delay = 0,
  itemCart,
}) => {
  const [open, setOpen] = useState(false);
  const handleAdd = () => {
    handler(itemNum);
    setOpen(true);
  };
  document
    .querySelector('#app')
    .addEventListener('click', () => setOpen(false));
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: '-100%',
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>
        <p>{itemCart} in cart!</p>
        <button onClick={handleAdd}>Buy Now</button>
        <Popup open={open}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'red',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            {title} added to cart!
            <Link to="/cartpage">
              <button className="inPopUpButton">
                Go to Cart! <FiShoppingCart />
              </button>
            </Link>
          </div>
        </Popup>
      </main>
    </motion.div>
  );
};
