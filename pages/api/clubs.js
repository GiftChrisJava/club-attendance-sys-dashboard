import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:8081",
});

// create a club
export async function createClub(club) {
  const response = await api.post("/club", club);

  if (response.status == 201) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
}

// get clubs
export async function getClubs() {
  const response = await api.get("/clubs");

  // keep returned data
  const dataArray = response.data.clubs;

  if (response.status == 200) {
    return dataArray;
  } else {
    throw new Error(response.problem);
  }
}

// get by Id
export async function getClubById(id) {
  const response = await api.get(`/club/${id}`);

  if (response.status == 200) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
}

// update club
export async function updateClub(club) {
  const response = await api.put(`/club/${club.id}`, club);

  if (response.status == 200) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
}

// delete a club
export async function deleteClub(id) {
  const response = await api.delete(`/club/${id}`);
  console.log(response.data);

  if (response.status == 200) {
    return response.data;
  } else {
    throw new Error(response.problem);
  }
}
