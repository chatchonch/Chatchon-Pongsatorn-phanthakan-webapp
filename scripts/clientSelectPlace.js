window.onload = function(){
var d = new Date();
  var date = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
  console.log(date);

  var firebaseConfig = {
    apiKey: "AIzaSyBsm2OONg2-y0A53i0mhDrGaBv_EzNksRE",
    authDomain: "myprojectpcu.firebaseapp.com",
    projectId: "myprojectpcu",
    storageBucket: "myprojectpcu.appspot.com",
    messagingSenderId: "653860991694",
    appId: "1:653860991694:web:09b7de81d7b5f15d2b569f",
    measurementId: "G-CB5P88YJ8G"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

  let submitBtm = document.getElementById('submit-button');
  submitBtm.addEventListener('click', function() {
    let location = document.getElementById('places').value;
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let SSN = document.getElementById('ssn').value;
    db.collection(location).doc(SSN).set({
      date: date,
      firstname: firstname,
      lastname: lastname,
      ssn: SSN,
      location: location
    })
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  })
}