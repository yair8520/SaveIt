import React from 'react';
import styles from './ExpensesTracker.module.css';
import { ExpensesTrackerProps } from './ExpensesTrackerProps';

export const ExpensesTracker = ({}: ExpensesTrackerProps) => {
  return (
    <div className={styles.container}>
      <h1>ExpensesTrackerPage component</h1>
    </div>
  );
};
