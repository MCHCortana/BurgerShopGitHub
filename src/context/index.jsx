import { createContext, useState, useEffect } from 'react';
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const tax = 0.18;
  const shipping = 200;

  const [cartItems, setCartItems] = useState({
    1: { pcs: 0, price: 200, totalBurgerPrice: 0 },
    2: { pcs: 0, price: 500, totalBurgerPrice: 0 },
    3: { pcs: 0, price: 1800, totalBurgerPrice: 0 },
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [checkOutPrice, setCheckOutPrice] = useState(0);

  const addToCart = (itemID) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemID]: {
        pcs: prevState[itemID].pcs + 1,
        price: prevState[itemID].price,
        totalBurgerPrice: (prevState[itemID].pcs + 1) * prevState[itemID].price,
      },
    }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemID]: { pcs: prevState[itemID].pcs - 1 },
      price: prevState[itemID].price,
      totalBurgerPrice: (prevState[itemID].pcs - 1) * prevState[itemID].price,
    }));
  };
  const totalPrices = Object.keys(cartItems).map(
    (burger) => cartItems[burger].totalBurgerPrice,
  );

  useEffect(() => {
    setTotalPrice(
      totalPrices.reduce((acc, currentValue) => acc + currentValue, 0),
    );
    setCheckOutPrice(totalPrice + totalPrice * tax + shipping);
  }, [cartItems]);
  console.log('konečná cena', checkOutPrice);
  useEffect(() => {
    setCheckOutPrice(totalPrice + totalPrice * tax + shipping);
  }, [totalPrice]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalPrice,
    tax,
    shipping,
    checkOutPrice,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
