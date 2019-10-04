var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;

var randomImageSrc = "images/dice" + randomNumber1 + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByTagName("img")[1].setAttribute("src", randomImageSrc2);


if (randomNumber1 === randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Wins";

} else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Wins 🚩";

}