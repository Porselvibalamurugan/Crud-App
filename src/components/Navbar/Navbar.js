import Link from "next/link";
import { handleLogin, handleLogout } from "../../lib/action";
import { auth } from "../../lib/auth";
import styles from "./Navbar.module.css";
import Dashboard from "@/app/dashboard/page";
import Links from "./Links/link";

export default async function Navbar() {
  const session = await auth();
  const links = [
    { name: "Home", url: "/" },
    { name: "Dashboard", url: "/dashboard" }
  ];
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.subcontainer}>
        {links.map((item) => {
          return <Links props={item} key={item.name} />;
        })}
        {/* <Link href="/">Home</Link>
        <Link href="/dashboard">dashboard</Link> */}
        {/* <a href="/dashboard">Dashboard</a> */}
        {session?.user ? (
          <form action={handleLogout}>
            <button>Logout</button>
          </form>
        ) : (
          <form action={handleLogin}>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}


