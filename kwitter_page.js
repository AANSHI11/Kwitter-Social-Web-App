//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCU2SM7RMlemsVks7mBabVyFytydmJOidE",
      authDomain: "social-website-kwitter-aa7d6.firebaseapp.com",
      databaseURL: "https://social-website-kwitter-aa7d6-default-rtdb.firebaseio.com",
      projectId: "social-website-kwitter-aa7d6",
      storageBucket: "social-website-kwitter-aa7d6.appspot.com",
      messagingSenderId: "24829314778",
      appId: "1:24829314778:web:cbcb5408fd9e12202607e3",
      measurementId: "G-F19E1EVJQT"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg = document.getElementById("msg"). value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0   
})
//End code
      } });  }); }
getData();
