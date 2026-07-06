import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: {
    name: "",
    phone: "",
    address: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    createUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      toast.success("User details saved");
    },

    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      toast.info("User details updated");
    },

    clearUser(state) {
      state.user = {
        name: "",
        phone: "",
        address: "",
      };

      toast.success("User data cleared");
    },
  },
});

export const { createUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;