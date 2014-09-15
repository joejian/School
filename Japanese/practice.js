function getRandom(i) {
    var x = Math.floor((Math.random() * 5) + 1);
    document.getElementById(i).innerHTML = x;
}