//const baseurl = "http://localhost:3001/api/users";
const baseurl='http://192.168.1.36:3001/api/users'


export const addPlace = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/addPlace`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();
  return res;
};

export const addLike = async (placeId) => {
  const res = await (
    await fetch(`${baseurl}/addplace`, {
      method: "PUT",
      body: placeId,
    })
  ).json();
  return res;
};

export const addComment = async (comment_user) => {
  const res = await (
    await fetch(`${baseurl}/addComment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment_user),
    })
  ).json();
  return res;
};
