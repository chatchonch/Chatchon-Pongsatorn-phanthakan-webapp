window.onload = function() {
    let SSN = document.getElementById("ssn_to_find")
    let searchBtn = document.getElementById("searchBtn");

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
    db.collection("สถานบริการที่ 1")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    searchBtn.addEventListener('click', function() {
      SSN = SSN.value;
      db.collection("สถานบริการที่ 1").doc(SSN).get().then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        }
        else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
});
    })
}