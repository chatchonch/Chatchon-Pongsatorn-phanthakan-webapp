window.onload = function() {
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
  db.collection("สถานบริการที่ 1").doc("1409901234567").get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          console.log(doc.data().firstname + " "+ doc.data().lastname); 
          console.log(doc.data().dateAppointment)
          console.log(doc.data().timeAppointment);
          if (doc.data().timeAppointment[3] = 3){
              var end_time = doc.data().timeAppointment[0] + doc.data().timeAppointment[1] + ':' + '45';
              console.log(end_time)
              result = {
                  title: `${doc.data().firstname} ${doc.data().lastname}`,
                  start: `${doc.data().dateAppointment}T${doc.data().timeAppointment}`,
                  end: `${doc.data().dateAppointment}T${end_time}`
              }
              calendar(result);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  }