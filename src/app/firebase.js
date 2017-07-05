import firebase from 'firebase';
try{
    var config = {
    apiKey: "AIzaSyBxbKE3V3mDdlU5BUTHfeoCF8PCFa_RxLQ",
    authDomain: "crime-reporting-app.firebaseapp.com",
    databaseURL: "https://crime-reporting-app.firebaseio.com",
    projectId: "crime-reporting-app",
    storageBucket: "crime-reporting-app.appspot.com",
    messagingSenderId: "582434616"
  };
  firebase.initializeApp(config);
}catch(e){

}
export var firebaseRef =firebase.database().ref() ;
export default firebase;