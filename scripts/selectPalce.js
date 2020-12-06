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
}