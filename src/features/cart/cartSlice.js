import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const product = action.payload;

      const exist = state.items.find((i) => i.id === product.id);

      if (exist) {
        exist.quantity += 1;
        toast.info("Quantity Updated");
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
        toast.success("Added to Cart");
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      toast.error("Item Removed");
    },

    increaseQty(state, action) {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (item) item.quantity++;
    },

    decreaseQty(state, action) {
      const item = state.items.find(
        (i) => i.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter(
          (i) => i.id !== action.payload
        );
      }
    },

    clearCart(state) {
      state.items = [];
      toast.success("Cart Cleared");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;