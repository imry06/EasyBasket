import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultProfile = {
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
};

// Load profile from localStorage
const loadProfile = () => {
  try {
    const data = localStorage.getItem("customerProfile");
    return data ? JSON.parse(data) : defaultProfile;
  } catch (error) {
    toast.info(error.message);
    return defaultProfile;
  }
};

const initialState = {
  profile: loadProfile(),
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

    clearProfile(state) {
      state.profile = defaultProfile;

      localStorage.removeItem("customerProfile");

      toast.info("Profile cleared.");
    },
  },
});

export const {
  updateField,
  saveProfile,
  clearProfile,
} = profileSlice.actions;

export default profileSlice.reducer;