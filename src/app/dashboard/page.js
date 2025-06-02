import { SinglePost } from "@/components/SinglePost";
import { getPosts } from "@/lib/data";
import styles from "./dashboard.module.css";
import {DashboardForm} from "../../components/Form/DashboardForm";
export default async function Dashboard() {
  const posts = await getPosts();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftcontainer}>
          <h1>POSTS</h1>
          <div className={styles.leftcontainer1}>
            <ul className={styles.box}>
              {posts.map((item) => {
                return <SinglePost props={item} key={item._id} />;
              })}
            </ul>
          </div>
        </div>
        <div className={styles.rightcontainer}><DashboardForm /></div>
      </div>
    </div>
  );
}

{
  /* <div>Dashboard</div> */
}
{
  /* {
posts.map((item) => {
  return <div>{item.title}</div>;
}) */
}
