import React from "react";
import styles from "./XInput.module.css";
import { XInputProps } from "./XInputProps";
import { TextField } from "@mui/material";

export const XInput = ({ inputStyle, onChangeText, ...rest }: XInputProps) => {
  return (
    <TextField
      onChange={(e) => onChangeText(e.target.value)}
      className={styles.input}
      style={inputStyle}
      {...rest}
    />
  );
};
