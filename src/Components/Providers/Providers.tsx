"use client"
import React, { useContext } from "react";
import i18n from "@/I18n/i18n.config";
import { ThemeProvider } from "@emotion/react";
import { I18nextProvider } from "react-i18next";
import { AuthProvider } from "../AuthProvider";
import { darkTheme, lightTheme } from "@/Theme";
import { useAppSelector } from "@/Redux";
import { isDarkMode } from "@/Features/General/GeneralSelectors";
import { Modal } from "../Modal";
import { ModalContext } from "./ModalContext/ModalContext";

export const Providers = ({ children }: any) => {
  const isDark = useAppSelector(isDarkMode);
  const { modal } = useContext(ModalContext);
  return (
    <AuthProvider>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
        <I18nextProvider i18n={i18n}>
          {children}
          {modal && <Modal />}
        </I18nextProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
