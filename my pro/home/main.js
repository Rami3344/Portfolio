var firebaseConfig = {
    apiKey: "AIzaSyCCSMi__Vd7PXF8Kkd0f7f9JH_a_aEIrqs",
    authDomain: "my-pro-9d121.firebaseapp.com",
    databaseURL: "https://my-pro-9d121.firebaseio.com",
    projectId: "my-pro-9d121",
    storageBucket: "",
    messagingSenderId: "433458119337",
    appId: "1:433458119337:web:e1524bd4b33a5724"
};
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref()


document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var selecty = document.getElementById('selecty').value
    var phonenumber = document.getElementById('phonenumber').value
    saveMessage(name, email, selecty, phonenumber, )
}

function saveMessage(name, email, selecty, phonenumber, ) {
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        email: email,
        phonenumber: phonenumber,
        selecty: selecty,
    })
}