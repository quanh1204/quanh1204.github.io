importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');



 const firebaseConfig = {
  apiKey: "AIzaSyDam-02kb9L8Eifer0W74zDA9DDjCQhndA",
  authDomain: "muc-tieu.firebaseapp.com",
  projectId: "muc-tieu",
  storageBucket: "muc-tieu.appspot.com",
  messagingSenderId: "254030905097",
  appId: "1:254030905097:web:bf780cab5622f4ffa21dd8",
  measurementId: "G-Z16QDLK4EP"
};

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()


   if (!('PushManager' in window)) {  
       console.log('Push messaging isn\'t supported.');  
       return;  
     }
   //
   if (Notification.permission === 'denied') {  
      console.log('The user has blocked notifications.');  
      return;  
   }
