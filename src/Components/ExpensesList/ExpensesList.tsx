import React from 'react';
import styles from './ExpensesList.module.css';
import { ExpensesListProps } from './ExpensesListProps';
import { Card } from '@mui/material';

export const ExpensesList = ({}: ExpensesListProps) => {
  return (
    <Card className={styles.container}>
      <h1>ExpensesListPage component</h1>
    </Card>
  );
};
