const baseurl = "http://localhost:3001/api/users";

export const addPlace = async (placeId) => {
  const res = await (
    await fetch(`${baseurl}/addplace`, {
      method: "POST",
      body: placeId,
    })
  ).json;
  // console.log(res)
  return res;
};

export const addLike = async (placeId) => {
  const res = await (
    await fetch(`${baseurl}/addplace`, {
      method: "PUT",
      body: placeId,
    })
  ).json();
  // console.log(res)
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
