"use client";
import React, { useContext } from "react";
import styles from "./ExpensesTracker.module.css";
import { ExpensesTrackerProps } from "./ExpensesTrackerProps";
import { useModal } from "@/Hooks/UseModal";
import { ModalContext } from "../Providers/ModalContext/ModalContext";

export const ExpensesTracker = ({}: ExpensesTrackerProps) => {
  const { handleModal } = useContext(ModalContext);

  return (
    <div
      onClick={() => {
        console.log("Asdasd")
        handleModal(<p>asdF</p>);
      }}
      className={styles.container}
    >
      <h1>Expenses</h1>
    </div>
  );
};
