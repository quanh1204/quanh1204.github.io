import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js"



const firebaseConfig = {
  apiKey: "AIzaSyDam-02kb9L8Eifer0W74zDA9DDjCQhndA",
  authDomain: "muc-tieu.firebaseapp.com",
  projectId: "muc-tieu",
  storageBucket: "muc-tieu.appspot.com",
  messagingSenderId: "254030905097",
  appId: "1:254030905097:web:bf780cab5622f4ffa21dd8",
  measurementId: "G-Z16QDLK4EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
notifyMe();
getToken(messaging, { vapidKey: 'BBLMN-pJat1eXXXxwLj0y715N2E27h4-Ls4qTJql2F-fuoqhtdz0ChQ2jZu1sftvdoMbAUUhZiTlimCdD506vbo' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});