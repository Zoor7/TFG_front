// const baseurl = "http://localhost:3001/api/users";
// const baseurl='http://192.168.1.36:3001/api/users'
const baseurl= "https://bcurious-api.herokuapp.com/api/users"

export const login = async (userInfo) => {
  const user = await (
    await fetch(`${baseurl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
  ).json();

  if (user.error) {
    return false;
  }
  return user;
};

export const registeServ = async (userInfo) => {
  const user = await (
    await fetch(`${baseurl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
  ).json();

  if (user.error) {
    return false;
  }
  return true;
};
