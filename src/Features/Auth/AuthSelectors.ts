import { RootState } from "../../Redux";

export const isLoggedIn = (state: RootState) => state.auth.loggedIn;
export const getUserInfo = (state: RootState) => state.auth.user;
