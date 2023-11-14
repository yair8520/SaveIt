"use client";
import React from "react";
import styles from "./XButton.module.css";
import { XButtonProps } from "./XButtonProps";
import { Button } from "@mui/material";
import { Text } from "../Text";

export const XButton = ({ buttonStyle, value, ...rest }: XButtonProps) => {
  return (
    <Button className={styles.button} style={buttonStyle} {...rest}>
      <Text style={{ flexGrow: 1 }}>{value}</Text>
    </Button>
  );
};
