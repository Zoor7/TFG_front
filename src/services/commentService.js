// const baseurl = "http://localhost:3001/api/comments";
const baseurl= "https://bcurious-api.herokuapp.com/api/comments"
// const baseurl='http://192.168.1.36:3001/api/comments'

export const createComment = async (comment) => {
  const res = await (
    await fetch(`${baseurl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
  ).json();

  return res;
};
