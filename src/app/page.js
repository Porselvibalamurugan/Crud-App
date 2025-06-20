import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h1>Welcome to Crud Application</h1>
        <p>Checkout crud operations visit dashboard</p>
        <div>
          <span>For Source code visit </span>
          <Link href="https://github.com/PORSELVI-21">
            <button className={styles.btn}>GitHub</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
