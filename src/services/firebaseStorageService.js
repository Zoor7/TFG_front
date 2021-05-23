import { v4 as uuidv4 } from "uuid";

import firebase from "firebase/app";
import { firebaseConfig } from "../config";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

let storageRef = firebase.storage().ref();

export const uploadPhoto = async (foto, path) => {
  let file = foto;
  let metadata = {
    contentType: "image/jpeg",
  };
  let uploadTask = await storageRef
    .child(path + file.name + uuidv4())
    .put(file, metadata);
  let url = await uploadTask.ref.getDownloadURL();
  return url;
};
