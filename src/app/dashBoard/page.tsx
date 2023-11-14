import { SideBar } from "@/Components/SideBar";
import styles from "./DashBoard.module.css";
import { DashBoardContent } from "@/Components/DashBoardContent";
export default function DashBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <DashBoardContent/>
      </div>
    </div>
  );
}
