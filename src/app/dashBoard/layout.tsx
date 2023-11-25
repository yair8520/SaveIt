import { DashBoardContent } from "@/Components/DashBoardContent";
import { SideBar } from "@/Components/SideBar";
import { Paper } from "@mui/material";
import styles from "./Layout.moudule.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Paper className={styles.container}>
      <SideBar>{children}</SideBar>
    </Paper>
  );
}
