import firebase from "firebase/app";
import {firebaseConfig} from '../config'
import "firebase/storage"

firebase.initializeApp(firebaseConfig)
let storage = firebase.storage();

let storageRef = firebase.storage().ref();

var placeRef = storageRef.child('places.jpg')
var placeImagesRef = storageRef.child('images/places.jpg');




export const uploadPhoto = async(foto) => {
    let file = foto

    let metadata = {
        contentType: 'image/jpeg'
    };

    let uploadTask = await storageRef.child('images/' + file.name).put(file, metadata);

    let url= await uploadTask.ref.getDownloadURL()

    return url

   
  }