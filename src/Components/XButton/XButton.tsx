"use client";
import React from "react";
import styles from "./XButton.module.css";
import { XButtonProps } from "./XButtonProps";
import { Button } from "@mui/material";

export const XButton = ({ buttonStyle, value }: XButtonProps) => {
  return (
    <Button className={styles.button} style={buttonStyle}>
      {value}
    </Button>
  );
};
