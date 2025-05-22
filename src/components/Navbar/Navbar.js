import { handleLogin, handleLogout } from "../../lib/action";
import { auth } from "../../lib/auth";
import styles from "./Navbar.module.css";
export default async function Navbar() {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.subcontainer}>
        <div>Home</div>
        <div>Dashboard</div>
        {session?.user ? (
          <form action={handleLogout}>
            <button>Logout</button>
          </form>
        ) : (
          <form action={handleLogin}>
            <button>Login</button>
          </form>
        )}
      </div>
    </div>
  );
}
