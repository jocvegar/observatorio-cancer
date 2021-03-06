import { firebase } from "@firebase/app";
import "@firebase/analytics";
import "@firebase/firestore";

const config = require("../config");

const firebBaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId,
};
firebase.initializeApp(firebBaseConfig);
firebase.analytics();

// firebase utils
const db = firebase.firestore();
// const auth = firebase.auth();
// const currentUser = auth.currentUser;
const messagesCollection = db.collection("messages");

export { db, firebase, messagesCollection };
