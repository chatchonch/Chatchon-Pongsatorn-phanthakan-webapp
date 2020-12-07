window.onload = function () {
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
    db.collection("สถานบริการที่ 1").get().then(function (querySnapshot) {
        let results = []
        querySnapshot.forEach(function (doc) {
            if (doc.data().ssn !== undefined && doc.data().ssn.length == 13) {
                if (doc.data().timeAppointment[3] == 0) {
                    let end_time = doc.data().timeAppointment[0] + doc.data().timeAppointment[1] + ':' + '15';
                    let result = {
                        title: `${doc.data().firstname} ${doc.data().lastname}`,
                        start: `${doc.data().dateAppointment}T${doc.data().timeAppointment}`,
                        end: `${doc.data().dateAppointment}T${end_time}`
                    }
                    
                results.push(result)
                }

                else if (doc.data().timeAppointment[3] == 1) {
                    let end_time = doc.data().timeAppointment[0] + doc.data().timeAppointment[1] + ':' + '30';
                    let result = {
                        title: `${doc.data().firstname} ${doc.data().lastname}`,
                        start: `${doc.data().dateAppointment}T${doc.data().timeAppointment}`,
                        end: `${doc.data().dateAppointment}T${end_time}`
                    }

                results.push(result)
                }

                else if (doc.data().timeAppointment[3] == 3) {
                    let end_time = doc.data().timeAppointment[0] + doc.data().timeAppointment[1] + ':' + '45';
                    let result = {
                        title: `${doc.data().firstname} ${doc.data().lastname}`,
                        start: `${doc.data().dateAppointment}T${doc.data().timeAppointment}`,
                        end: `${doc.data().dateAppointment}T${end_time}`
                    }

                results.push(result)
                }
                else if (doc.data().timeAppointment[3] == 4) {
                    let end_time = doc.data().timeAppointment[0] + doc.data().timeAppointment[1] + ':' + '60';
                    let result = {
                        title: `${doc.data().firstname} ${doc.data().lastname}`,
                        start: `${doc.data().dateAppointment}T${doc.data().timeAppointment}`,
                        end: `${doc.data().dateAppointment}T${end_time}`
                    }

                results.push(result)
                }
            }
        });
        calendar(results)
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}