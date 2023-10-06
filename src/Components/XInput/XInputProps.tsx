import { BaseTextFieldProps, TextFieldProps } from "@mui/material";
import { CSSProperties } from "react";

export type XInputProps = {
  inputStyle?: CSSProperties | {};
  onChangeText: (v: string) => void;
} & TextFieldProps;
