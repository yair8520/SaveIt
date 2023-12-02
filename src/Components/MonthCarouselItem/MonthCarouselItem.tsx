// MonthCarouselItem.js

import React from "react";
import styles from "./MonthCarouselItem.module.css";
import { MonthCarouselItemProps } from "./MonthCarouselItemProps";
import { Text } from "../Text";
import { useTranslation } from "react-i18next";

export const MonthCarouselItem = ({ text }: MonthCarouselItemProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Text>{t(`months.${text}`)}</Text>
    </div>
  );
};
