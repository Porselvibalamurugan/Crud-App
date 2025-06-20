import { handleLogin, handleLogout } from "../../lib/action";
import { auth } from "../../lib/auth";
import styles from "./Navbar.module.css";
import Links from "./Links/link";

export default async function Navbar() {
  const session = await auth();
  const links = [
    { name: "Home", url: "/" },
    { name: "Dashboard", url: "/dashboard" }
  ];
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.subcontainer}>
        {links.map((item) => {
          return <Links props={item} key={item.name} />;
        })}
        {/* <Link href="/">Home</Link>
        <Link href="/dashboard">dashboard</Link> */}
        {/* <a href="/dashboard">Dashboard</a> */}
        {session?.user ? (
          <form action={handleLogout}>
            <button className={styles.btn}>Logout</button>
          </form>
        ) : (
          <form action={handleLogin}>
            <button type="submit" className={styles.btn}>Login</button>
          </form>
        )}
      </div>
    </div>
  );
}


