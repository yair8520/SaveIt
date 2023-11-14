import { GeneralState } from "@/types/General";
import { createSlice } from "@reduxjs/toolkit";

const initialState: GeneralState = {
  isDark: false,
  lng: "he",
};

const GeneralSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
});

export const {} = GeneralSlice.actions;
export default GeneralSlice.reducer;
