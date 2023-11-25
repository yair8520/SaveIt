"use client";
import styles from "./LangModal.module.css";
import { Text } from "../Text";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

export const LangModal = () => {
   const {t} = useTranslation();
  return (
    <div className={styles.container}>
      <div className="lng">
        <Avatar
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/IL.svg"
          sx={{ width: 50, height: 50 }}
        />
        {/* <Text>{asd}</Text> */}
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
