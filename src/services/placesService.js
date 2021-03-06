// const baseurl = "http://localhost:3001/api/places";
const baseurl= "https://bcurious-api.herokuapp.com/api/places"
// const baseurl='http://192.168.1.36:3001/api/places'

export const getPlaces = async () => {
  const res = await (await fetch(`${baseurl}`)).json();
  return res;
};

export const getPlaceById = async (placeId) => {
  const res = await (await fetch(`${baseurl}/${placeId}`)).json();
  return res;
};

export const addPlaceLike = async (obj) => {
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

export const deletePlaceLike = async (obj) => {
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

export const createPlace = async (place) => {
  const res = await (
    await fetch(`${baseurl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    })
  ).json();
  return res;
};
export const addComment = async (comment) => {
  const res = await (
    await fetch(`${baseurl}/addComment`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
  ).json();

  return res;
};

export const getNearbyPlaces = async (obj) => {
  const res = await (
    await fetch(`${baseurl}/findPlacesByRadius`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
  ).json();

  return res;
};
