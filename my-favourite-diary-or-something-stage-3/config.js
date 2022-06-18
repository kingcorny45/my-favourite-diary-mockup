import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN8vJhL7HviD7HjMf-FH6p9T4rI3sk6dU",
  authDomain: "my-favourite-diary-o-some.firebaseapp.com",
  projectId: "my-favourite-diary-o-some",
  storageBucket: "my-favourite-diary-o-some.appspot.com",
  messagingSenderId: "372706709352",
  appId: "1:372706709352:web:49ff1064101efee170d0dd"
};

// Initialize Firebase
if(!firebase.apps.length){
let app=firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()