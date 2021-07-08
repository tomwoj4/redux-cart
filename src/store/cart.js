import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  toggleCart: true,
  products: [
    {
      id: "p1",
      title: "Test",
      price: 2,
      description: "test item is so good get it",
    },
    {
      id: "p2",
      title: "Apples",
      price: 5,
      description: "it's a sweet and tasty apple",
    },
    {
      id: "p3",
      title: "DVD",
      price: 12,
      description: "It's a dvd, watch it",
    },
  ],
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.toggleCart = !state.toggleCart;
    },
    addToCart(state, action) {
      const disone = state.products.filter(
        (product) => product.id === action.payload
      );

      state.cartItems.push(...disone);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
