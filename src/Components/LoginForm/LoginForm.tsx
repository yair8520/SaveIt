import React from "react";
import styles from "./LoginForm.module.css";
import { LoginFormProps } from "./LoginFormProps";

export const LoginForm = ({}: LoginFormProps) => {
  return (
    <div className={styles.container}>
      <h1>LoginForm</h1>
    </div>
  );
};
