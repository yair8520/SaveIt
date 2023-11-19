import { RootState } from "@/Redux";

export const isDarkMode = (state: RootState) => state.general.isDark;
export const showModal = (state: RootState) => state.general.showModal;
