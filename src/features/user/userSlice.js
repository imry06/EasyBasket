import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const STORAGE_KEY = "easybasket_user";

const loadUserFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { user: { name: "", phone: "", address: "" } };
    const parsed = JSON.parse(raw);
    return { user: { ...{ name: "", phone: "", address: "" }, ...(parsed || {}) } };
  } catch (e) {
    return { user: { name: "", phone: "", address: "" } };
  }
};

const saveUserToStorage = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.user));
  } catch (e) {
    // ignore write errors
  }
};

const initialState = loadUserFromStorage();

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    createUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      saveUserToStorage(state);

      toast.success("User details saved");
    },

    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      saveUserToStorage(state);

      toast.info("User details updated");
    },

    clearUser(state) {
      state.user = {
        name: "",
        phone: "",
        address: "",
      };

      saveUserToStorage(state);

      toast.success("User data cleared");
    },
  },
});

export const { createUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;