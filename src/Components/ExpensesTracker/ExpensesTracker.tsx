import React from "react";
import styles from "./ExpensesTracker.module.css";
import { ExpensesTrackerProps } from "./ExpensesTrackerProps";
import { Card } from "@mui/material";
import { OverViewChart } from "../OverViewChart";
import { ExpensesList } from "../ExpensesList";

export const ExpensesTracker = ({}: ExpensesTrackerProps) => {
  return (
    <Card  className={styles.container}>
      <div className={styles.head}>
        <OverViewChart />
      </div>
      <div className={styles.body}>
        <ExpensesList />
        {/* <ExpensesList />
        <ExpensesList />
        <ExpensesList />
        <ExpensesList />
        <ExpensesList />
        <ExpensesList />
        <ExpensesList />
        <ExpensesList />
        <ExpensesList /> */}
      </div>
    </Card>
  );
};
