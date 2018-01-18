import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC00DGUDNikFGk2YVWKfNZQu8ZEV3gCUr8",
  authDomain: "pkged01.firebaseapp.com",
  databaseURL: "https://pkged01.firebaseio.com",
  projectId: "pkged01",
  storageBucket: "pkged01.appspot.com",
  messagingSenderId: "614795578993"
};
const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.database();
export const storage = firebaseApp.storage();
export const dbRef = 

{
	pkged:db.ref("pkged"),
	diy3dprint:db.ref("diy3dprint"),
	readtokid:db.ref("readtokid"),
	topgreatminds:db.ref("topgreatminds"),
	thejavascript:db.ref("thejavascript"),
	teluguall:db.ref("teluguall")
}