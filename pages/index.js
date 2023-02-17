import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>CLUB ATTENDANCE SYSTEM DASHBOARD</h1>
        <div>
          <p className={styles.text}>
            Manage the entire club attendance system with much ease
          </p>
          <p className={styles.text}>
            You can perform all the admin duties from this command center, you
            can add people, add clubs, add attendance, update the attendance
            details for each person.
          </p>
          <p className={styles.text}>
            Deleting clubs, club members can be done here also. This is your
            office Mr Admin. Enjoy the space.
          </p>
        </div>

        <div>
          <h1 className={styles.title}>SOME OF THE ROLES</h1>

          <Link href="/clubs/club">
            <p className={styles.btn}>Add A Club</p>
          </Link>
          <p className={styles.btn}>Add Members</p>
          <p className={styles.btn}>View Attendance</p>
        </div>
      </div>
    </>
  );
}
