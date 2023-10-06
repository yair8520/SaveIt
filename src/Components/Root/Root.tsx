"use client";
import i18n from "@/I18n/i18n.config";
import React from "react";
import { I18nextProvider } from "react-i18next";

export const Root = ({ children }: any) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
