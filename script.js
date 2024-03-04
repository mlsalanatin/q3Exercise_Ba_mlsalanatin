window.onload = function() {
    gen();
}

function gen() { 
    var ran = Math.floor(Math.random() * 1001);
    var num = ran.toString();
    var date = new Date();

    document.getElementById('numgen').innerHTML = "Randomly generated number: " + num;

    var breakdown = "";

    if (num == 1000) {
        breakdown += "Breakdown: " + num.charAt(0) * 1000 + ", ";
        breakdown += num.charAt(1) * 100 + ", ";
        breakdown += num.charAt(2) * 10 + ", ";
        breakdown += num.charAt(3);
    }

    else if (num > 99 && num < 1000) {
        breakdown += "Breakdown: " + num.charAt(0) * 100 + ", ";
        breakdown += num.charAt(1) * 10 + ", ";
        breakdown += num.charAt(2);
    }

    else if (num > 9 && num < 100) {
        breakdown += "Breakdown: " + num.charAt(0) * 10 + ", ";
        breakdown += num.charAt(1);
    }

    else if (num >= 0 && num < 10) {
        breakdown += "Breakdown: " + num.charAt(0);
    }

    document.getElementById("breakdown").innerHTML = breakdown;
    document.getElementById("date").innerHTML = date;
}