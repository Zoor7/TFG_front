// const baseurl = "http://localhost:3001/api/users";
const baseurl = "https://bcurious-api.herokuapp.com/api/users";
// const baseurl='http://192.168.1.36:3001/api/users'

export const addPlace = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/addPlace`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();
  return res;
};

export const favUserPlaces = async (userId) => {
  const res = await (await fetch(`${baseurl}/${userId}`)).json();
  return res;
};

export const addUserLike = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/addLike`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();

  return res;
};

export const deleteUserLike = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/deleteLike`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();

  return res;
};

export const addComment = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/addComment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();
  return res;
};

export const getUserbyEmail = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/byEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();
  return res;
};
