import firebase from "firebase"

 var firebaseConfig = {
  apiKey: "AIzaSyDt9omXU6CwrU5lgJ90N4RdmO-OkzrXMco",
  authDomain: "project-60-fbc0a.firebaseapp.com",
  databaseURL: "https://project-60-fbc0a-default-rtdb.firebaseio.com",
  projectId: "project-60-fbc0a",
  storageBucket: "project-60-fbc0a.appspot.com",
  messagingSenderId: "400010616057",
  appId: "1:400010616057:web:73edce6c459b853bc55628"
};

  firebase.initializeApp(firebaseConfig)


export default firebase.database()