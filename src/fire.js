import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA77e-R-B51NYV3yphELewVYm7gLHeJj_Y",
    authDomain: "login-form-dbec2.firebaseapp.com",
    projectId: "login-form-dbec2",
    storageBucket: "login-form-dbec2.appspot.com",
    messagingSenderId: "1023905517148",
    appId: "1:1023905517148:web:e53c0a7829ee51607ba099"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire ;