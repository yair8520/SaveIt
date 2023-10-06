"use client";
import React from "react";
import styles from "./XButton.module.css";
import { XButtonProps } from "./XButtonProps";
import { Button } from "@mui/material";

export const XButton = ({}: XButtonProps) => {
  return <Button onClick={() => alert("asd")}>asd</Button>;
};
