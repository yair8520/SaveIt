import React from "react";
import styles from "./DashBoardContent.module.css";
import { DashBoardContentProps } from "./DashBoardContentProps";
import { ExpensesTracker } from "../ExpensesTracker";

export const DashBoardContent = ({}: DashBoardContentProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ExpensesTracker />
      </div>
      <div className={styles.right}>
        <p>asd</p>
      </div>
    </div>
  );
};
