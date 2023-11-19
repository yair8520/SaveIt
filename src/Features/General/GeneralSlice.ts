import { GeneralState } from "@/types/General";
import { createSlice } from "@reduxjs/toolkit";

const initialState: GeneralState = {
  isDark: false,
  showModal: false,
  lng: "he",
};

const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
    toggleShowModal: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleDarkMode, toggleShowModal } = GeneralSlice.actions;
export default GeneralSlice.reducer;
