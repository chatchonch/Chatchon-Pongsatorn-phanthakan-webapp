window.onload = function() {
    var timerChanger = document.getElementById("timerChanger");
    timerChanger.addEventListener("click", function() {
    document.querySelector(".bg-timeModal").style.display = "flex";
    });
    var close_timerChange = document.querySelector(".close-timerChange")
    close_timerChange.addEventListener("click", function() {
    document.querySelector(".bg-timeModal").style.display = "none";
    });

    var client = document.getElementById("clientButton");
    client.addEventListener("click", function() {
    document.querySelector(".bg-clientModal").style.display = "flex";
    });
    var close_timerChange = document.querySelector(".close-client")
    close_timerChange.addEventListener("click", function() {
    document.querySelector(".bg-clientModal").style.display = "none";
    });
    let date = document.getElementById("dateOpen");
    let openTime = document.getElementById("openTime");
    let closeTime = document.getElementById("closeTime");
    let doctor = document.getElementById("doctor");
    let submitBtn = document.getElementById("fixtime-button");
    let clearBtn = document.getElementById("cancletime-button");
    let changeTimeBtn = document.getElementById("timerChanger");
    let searchBtn = document.getElementById("submit-button");
    let SSN = document.getElementById("SSN");

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
    var docRef = db.collection("สถานบริการที่ 1").doc("Time");

    changeTimeBtn.addEventListener('click', function() {
      docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            date.value = doc.data().date;
            openTime.value = doc.data().openTime;
            closeTime.value = doc.data().closeTime;
            doctor.value = doc.data().doctor
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
});
    })

    submitBtn.addEventListener('click', function() {
      setData();
      addDataToFireBase();
})

    clearBtn.addEventListener('click', function() {
      date.value = '';
      openTime.value = '';
      closeTime.value = '';
      doctor.value = '';
      setData();
      addDataToFireBase();
    })

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

function addDataToFireBase() {
  db.collection("สถานบริการที่ 1").doc("Time").set({
        date: date,
        openTime: openTime,
        closeTime: closeTime,
        doctor: doctor,
      })
      .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      })
}

function setData() {
  date = date.value;
  openTime = openTime.value;
  closeTime = closeTime.value;
  doctor = doctor.value;
}
}