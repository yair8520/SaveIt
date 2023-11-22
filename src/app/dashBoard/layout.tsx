import { DashBoardContent } from "@/Components/DashBoardContent";
import { SideBar } from "@/Components/SideBar";
import { Paper } from "@mui/material";
import styles from "./Layout.moudule.css";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Paper className={styles.container}>
      <div className={styles.bar}>
        <SideBar />
      </div>
      <div className={styles.main}>{children}</div>
    </Paper>
  );
}
