const baseurl = "http://localhost:3001/api/users";

export const login = async (userInfo) => {
  const user = await (
    await fetch(`${baseurl}/byEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
  ).json();

  if (user[0]) {
    return user;
  }
  return "";
};

export const registeServ = async (userInfo) => {
  const user = await (
    await fetch(`${baseurl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
  ).json();

  console.log(user);

  if (user) {
    return true;
  }
  return false;
};
