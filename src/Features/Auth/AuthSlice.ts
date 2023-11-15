import { AuthState } from "@/types/Auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: null,
  loggedIn: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.user = action.payload ?? null;
    },
    disconnect: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
    setLoggedIn: (state, action) => {
      const { inOrOut } = action.payload;
      state.loggedIn = inOrOut;
    },
  },
});

export const { updateUserInfo, disconnect, setLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
