"use client";
import React, { useContext } from "react";
import styles from "./ExpensesTracker.module.css";
import { ExpensesTrackerProps } from "./ExpensesTrackerProps";
import { useModal } from "@/Hooks/UseModal";
import { ModalContext } from "../Providers/ModalContext/ModalContext";
import { MonthCarousel } from "../MonthCarousel";
import { ExpensesList } from "../ExpensesList";

export const ExpensesTracker = ({}: ExpensesTrackerProps) => {
  const { handleModal } = useContext(ModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <MonthCarousel />
      </div>
      <div className={styles.body}>
        <ExpensesList />
      </div>
    </div>
  );
};
