import { LoginForm } from "@/Components/LoginForm";

import styles from './Login.module.css'
export default function Home() {
  
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
