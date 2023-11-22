import React from "react";
import styles from "./LangModal.module.css";
import { LangModalProps } from "./LangModalProps";
import { Text } from "../Text";
// {}: LangModalProps
export const LangModal = () => {
  return (
    <div className={styles.container}>
      <Text>LangModalPage component</Text>
    </div>
  );
};
