import { ButtonProps } from "@mui/material";
import { CSSProperties } from "react";

export interface XButtonProps extends ButtonProps {
  [key: string]: any;
  buttonStyle?: CSSProperties | {};
  value: string;
}
