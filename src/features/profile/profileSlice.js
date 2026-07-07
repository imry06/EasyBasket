import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  profile: {
    fullName: "",
    phone: "",

    // House Details
    houseNo: "",
    floor: "",
    apartment: "",
    building: "",

    // Address Details
    street: "",
    landmark: "",
    area: "",
    locality: "",
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,

  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      state.profile[field] = value;
    },

    saveProfile(state) {
      localStorage.setItem(
        "customerProfile",
        JSON.stringify(state.profile)
      );
      toast.success("Profile saved successfully!");
    },

    loadProfile(state) {
      const data = localStorage.getItem("customerProfile");

      if (data) {
        state.profile = JSON.parse(data);
      }
    },

    clearProfile(state) {
      state.profile = initialState.profile;
      localStorage.removeItem("customerProfile");
      toast.info("Profile cleared.");
    },
  },
});

export const {
  updateField,
  saveProfile,
  loadProfile,
  clearProfile,
} = profileSlice.actions;

export default profileSlice.reducer;