var firebaseConfig = {
    apiKey: "AIzaSyDIMXIIyzSECdwQ4yR4tJFmgx0zxK7lY_o",
    authDomain: "iphogat.firebaseapp.com",
    databaseURL: "https://iphogat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iphogat",
    storageBucket: "iphogat.appspot.com",
    messagingSenderId: "887961620478",
    appId: "1:887961620478:web:763f55fd19fc581a0cbaaf",
    measurementId: "G-MW9CXH02D7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();
firebase.auth();
var docRef = firebase.firestore().collection("files").doc("resume");
var msgRef = firebase.firestore().collection("requests");

//document.getElementById('site-form').addEventListener('submit', sendMessage);

function onLoad() {
msgRef.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        renderAccount(doc);
    });
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});
}
const messagesViewer = document.querySelector('#messages');
function renderAccount(doc){
    let tr = document.createElement('tr');
            let td_nm = document.createElement('td');
            let td_em = document.createElement('td');
            let td_pn = document.createElement('td');
            let td_msg = document.createElement('td');
            let td_dtt = document.createElement('td');
            let td_ref = document.createElement('td');
            


            tr.setAttribute('data-id', doc.id);
            td_nm.textContent = doc.data().name;
            td_em.textContent = doc.data().email;
            td_pn.textContent = doc.data().phone;
            td_msg.textContent = doc.data().message
            td_dtt.textContent = doc.data().time;
            td_ref.textContent = doc.data().refer;
            
            tr.appendChild(td_nm);
            tr.appendChild(td_em);
            tr.appendChild(td_pn);
            tr.appendChild(td_msg);
            tr.appendChild(td_dtt);
            tr.appendChild(td_ref);
            
            messagesViewer.appendChild(tr);
}



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        onLoad();
    } else {
        // User is signed out
        location.replace('index.html');
    }
});


function logOut() {
    firebase.auth().signOut();
}

