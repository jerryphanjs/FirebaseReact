import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD3kU9PAnoyPgGahKGg-H_qiFbt3fKPHeI",
  authDomain: "net-ninja-marioplan-71a86.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-71a86.firebaseio.com",
  projectId: "net-ninja-marioplan-71a86",
  storageBucket: "net-ninja-marioplan-71a86.appspot.com",
  messagingSenderId: "1067949461594"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});
export default firebase;