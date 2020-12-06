window.onload = function() {
    let appointmentBtn = document.getElementById('checkAppointment');
    let text = document.getElementById('text_appointment');
    let popupBtn = document.getElementById('submitPopup');
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

    appointmentBtn.addEventListener('click', function() {
        db.collection("สถานบริการที่ 1").doc("1409901234567").get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            text.innerHTML = `${doc.data().firstname} ${doc.data().lastname} นัดตรวจที่ ${doc.data().location} วันที่ ${doc.data().dateAppointment}
            เวลา ${doc.data().timeAppointment}`;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
});
    })

    popupBtn.addEventListener('click', function() {
        let firstname = document.getElementById('fname').value;
        let lastname = document.getElementById('lname').value;
        let location = document.getElementById('places').value;
        let SSN = document.getElementById('SSN').value;
        let dateAppointment = document.getElementById('date_popup').value;
        let timeAppointment = document.getElementById('time_popup').value;

        db.collection(location).doc(SSN).set({
            firstname: firstname,
            lastname: lastname,
            ssn: SSN,
            location: location,
            dateAppointment: dateAppointment,
            timeAppointment: timeAppointment,
          })
          .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          }
          );
    })
}