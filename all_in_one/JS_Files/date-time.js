function getDateAndTime()
{
    var d = "Today is: " + new Date();
    document.getElementById("dateStuff").textContent = d;
}

window.onload = getDateAndTime();
