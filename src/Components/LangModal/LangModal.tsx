"use client";

import React from "react";
import styles from "./LangModal.module.css";
import { Text } from "../Text";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/Redux";
import { userInfo } from "os";
import { isDarkMode } from "@/Features/General/GeneralSelectors";
export const LangModal = () => {
  const asd = useAppSelector(isDarkMode);
  return (
    <div className={styles.container}>
      <div className="lng">
        <Avatar
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/IL.svg"
          sx={{ width: 50, height: 50 }}
        />
        <Text>{asd}</Text>
      </div>

      <div className="lng">
        <Avatar
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
          sx={{ width: 50, height: 50 }}
        />
        {/* <Text>{t("lng.hebrew")}</Text> */}
      </div>
    </div>
  );
};
