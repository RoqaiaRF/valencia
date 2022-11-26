
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCZoFXSMAnkcfRhF-qqSMyFhYcMQbzy644",
  authDomain: "otp-velncia.firebaseapp.com",
  projectId: "otp-velncia",
  storageBucket: "otp-velncia.appspot.com",
  messagingSenderId: "968983340997",
  appId: "1:968983340997:web:dca00df7f39d189c23cdac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase