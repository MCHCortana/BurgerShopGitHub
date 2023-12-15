import './orderDetails.scss';

export const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Adress:</b>We do live somewhere
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>My name is not important</p>
          <p>
            <b>Phone:</b>We do a phone
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order status:</b>Processing
          </p>
          <p>
            <b>Order date:</b>Once upon a time
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
            <b>Payment refecence:</b>#7777 33 66 3 66 88 3 33 7777
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items total:</b>enough to feed the Godzilla
          </p>
          <p>
            <b>Shipping charges:</b>seriously?
          </p>
          <p>
            <b>Tax:</b>SERIOUSLY?
          </p>
          <p>
            <b>Total amount:</b>₹ whatever
          </p>
        </div>
        <article>
          <h1>Ordered items</h1>
          <div>
            <h4>Cheese burger</h4>
            <h4>₹1234</h4>
          </div>
          <div>
            <h4>Cheese burger & fries</h4>
            <h4>₹4321</h4>
          </div>
          <div>
            <h4>Veg. Cheese Burger</h4>
            <h4>₹7890</h4>
          </div>
          <div>
            <h4>
              <b>Sub. Total</b>
            </h4>
            <h4>
              <b>₹9987</b>
            </h4>
          </div>
        </article>
      </main>
    </section>
  );
};
