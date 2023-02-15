import { useEffect, useState } from "react";
import styles from "../../styles/club.module.css";
import {
  getClubs,
  createClub,
  getClubById,
  deleteClub,
  updateClub,
} from "../api/clubs";

const Club = () => {
  const [clubs, setClubs] = useState([]); // array of all the clubs
  const [club, setClub] = useState({}); // get a club
  const [clubName, setClubName] = useState();
  const [id, setId] = useState();

  // get the clubs
  async function getClubsData() {
    try {
      const clubs = await getClubs();
      setClubs(clubs);
    } catch (error) {
      console.error(error);
    }
  }

  // get club by Id
  async function getClubDataById() {
    try {
      const club = await getClubById(id);
      setId("");
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getClubsData();
  }, []);

  // create a club
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name: clubName };
    const newClub = await createClub(data);

    getClubsData();
    setClubName("");
  };

  // delete a club by Id
  const deleteClubByID = async (e) => {
    e.preventDefault();

    const newClub = await deleteClub(id);
    console.log(newClub);

    getClubsData();
    setId("");
  };

  return (
    <div>
      <h1 className={styles.title}>PERFOM CRUD OPERATIONS ON THE CLUBS</h1>
      <div className={styles.inArticle}>
        <article className={styles.article}>
          <div className={styles.outerContent}>
            <h4 className={styles.h4}>All Clubs</h4>
            <div className={styles.content}>
              {clubs.map((club) => (
                <h3 key={club.id} className={styles.text}>
                  {club.name} {" : " + "ID" + " "}
                  {club.id}
                </h3>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.h4}>Create Club</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Type club name ..."
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                />
              </label>

              <button type="submit" className={styles.btn}>
                Add
              </button>
            </form>
          </div>

          <div>
            <h4 className={styles.hh4}>Get & Delete By ID</h4>
            <form className={styles.deleteUpdate}>
              <div>
                <input
                  className={styles.input}
                  type="number"
                  placeholder="Type Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />

                <button
                  onClick={getClubDataById}
                  type="button"
                  className={styles.btn}
                >
                  Get Club
                </button>

                <button
                  onClick={deleteClubByID}
                  type="button"
                  className={styles.btnD}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Club;
