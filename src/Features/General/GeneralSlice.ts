import { GeneralState } from "@/types/General";
import { createSlice } from "@reduxjs/toolkit";

const initialState: GeneralState = {
  isDark: true,
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
    changeLng: (state, { payload }) => {
      console.log(payload.lng);
      state.lng = payload.lng;
    },
  },
});

export const { toggleDarkMode, toggleShowModal, changeLng } =
  GeneralSlice.actions;
export default GeneralSlice.reducer;
