import { SideBar } from "@/Components/SideBar";
import styles from "./DashBoard.module.css";
import { DashBoardContent } from "@/Components/DashBoardContent";
import { Paper } from "@mui/material";

export default function DashBoard() {
  return (
    <Paper className={styles.container}>
      <div className={styles.bar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <DashBoardContent />
      </div>
    </Paper>
  );
}
