import React from "react";
import styles from "./OverViewChart.module.css";
import { OverViewChartProps } from "./OverViewChartProps";
import { Card } from "@mui/material";
import { Text } from "../Text";

export const OverViewChart = ({}: OverViewChartProps) => {
  return (
    <Card className={styles.container}>
      <Text>OverView</Text>
    </Card>
  );
};
