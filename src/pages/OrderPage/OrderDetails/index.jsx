import './orderDetails.scss';

import { useContext } from 'react';

import { ShopContext } from './../../../context';

export const OrderDetails = () => {
  const { cartItems, tax, shipping, checkOutPrice } = useContext(ShopContext);

  return (
    <section className="orderDetails">
      <main>
        <h1>Order details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Adress:</b>EuroAsian continent, Earth, Sol. MilkyWay
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>Why'd you ask?</p>
          <p>
            <b>Phone:</b>#7777 33 66 3 66 88 3 33 7777
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order status:</b>Processing
          </p>
          <p>
            <b>Order date:</b>the day before that day
          </p>
          <p>
            <b>Order fullfilment date:</b>it exists
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment method:</b>COD
          </p>
          <p>
            <b>Payment refecence:</b>Id number
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items total:</b>We won't be hungry, that's for sure
          </p>
          <p>
            <b>Shipping charges:</b>₹{shipping}
          </p>
          <p>
            <b>Tax:</b>
            {tax}%
          </p>
          <p>
            <b>Total amount:</b>₹{checkOutPrice}
          </p>
        </div>
        <article>
          <h1>Ordered items</h1>
          <div>
            <div>
              <h4>Cheese burger</h4>
            </div>
            <div className="checkout_table">
              <h4>{cartItems[1].pcs}</h4>
            </div>
            <div className="checkout_table">
              <h4>₹{cartItems[1].totalBurgerPrice}</h4>
            </div>
          </div>
          <div>
            <div>
              <h4>Veg. Cheese Burger</h4>
            </div>
            <div className="checkout_table">
              <h4>{cartItems[2].pcs}</h4>
            </div>
            <div className="checkout_table">
              <h4>₹{cartItems[2].totalBurgerPrice}</h4>
            </div>
          </div>
          <div>
            <div>
              <h4>Cheese burger & fries</h4>
            </div>
            <div className="checkout_table">
              <h4>{cartItems[3].pcs}</h4>
            </div>
            <div className="checkout_table">
              <h4>₹{cartItems[3].totalBurgerPrice}</h4>
            </div>
          </div>
          <div>
            <h4>
              <b>Sub. Total</b>
            </h4>
            <h4>
              <b>₹{checkOutPrice}</b>
            </h4>
          </div>
        </article>
      </main>
    </section>
  );
};
