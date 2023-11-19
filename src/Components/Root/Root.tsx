"use client";
import { store } from "@/Redux";
import React from "react";
import { Provider } from "react-redux";
import { Providers } from "../Providers";
import { ModalProvider } from "../Providers/ModalContext";

export const Root = ({ children }: any) => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <Providers>{children}</Providers>
      </ModalProvider>
    </Provider>
  );
};
