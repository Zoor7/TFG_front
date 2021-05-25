export const saveUser = async (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserStorage = async () => {
  const user = localStorage.getItem("user");
  return await JSON.parse(user);
};

export const cleanUserStorage = async () => {
  localStorage.removeItem("user");
  console.log("Llega");
  localStorage.clear();
};
