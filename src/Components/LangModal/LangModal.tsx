"use client";
import styles from "./LangModal.module.css";
import { Text } from "../Text";
import { Avatar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/Redux";
import { getLng } from "@/Features/General/GeneralSelectors";
import { changeLng } from "@/Features/General/GeneralSlice";

export const LangModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const lng = useAppSelector(getLng);
  const getActiveColor = (active: string) => {
    return active === lng ? "green" : undefined;
  };
  const onChangeLng = (lng: string) => {
    dispatch(changeLng({ lng }));
  };
  return (
    <div className={styles.container}>
      <Button onClick={() => onChangeLng("en")} className={styles.lngItem}>
        <Avatar
          sx={{ width: 50, height: 50 }}
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
        />
        <Text color={getActiveColor("en")}>{t("lng.english")}</Text>
      </Button>

      <Button onClick={() => onChangeLng("he")} className={styles.lngItem}>
        <Avatar
          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/IL.svg"
          sx={{ width: 50, height: 50 }}
        />
        <Text color={getActiveColor("he")}>{t("lng.hebrew")}</Text>
      </Button>
    </div>
  );
};
