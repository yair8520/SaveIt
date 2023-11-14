"use client";
import i18n from "@/I18n/i18n.config";
import { store } from "@/Redux";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "@/Theme";

export const Root = ({ children }: any) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
};
