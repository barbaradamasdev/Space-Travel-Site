function changeMoon() {
    /* document.getElementById('cards__move').style.left = "0"; */
    document.getElementById('cards__move').style.top = "0";
    document.getElementById('moon').style.left = "0";
    document.getElementById('mars').style.left = "-4000px";
    document.getElementById('europa').style.left = "-4000px";
    document.getElementById('titan').style.left = "-4000px";
}
function changeMars() {
    /* document.getElementById('cards__move').style.left = "-4000px"; */
    document.getElementById('moon').style.left = "-4000px";
    document.getElementById('mars').style.left = "0";
    document.getElementById('europa').style.left = "-4000px";
    document.getElementById('titan').style.left = "-4000px";
}
function changeEuropa() {
    /* document.getElementById('cards__move').style.left = "-4000px"; */
    document.getElementById('moon').style.left = "-4000px";
    document.getElementById('mars').style.left = "-4000px";
    document.getElementById('europa').style.left = "0";
    document.getElementById('titan').style.left = "-4000px";
}
function changeTitan() {
    /* document.getElementById('cards__move').style.left = "-6000px"; */
    document.getElementById('moon').style.left = "-4000px";
    document.getElementById('mars').style.left = "-4000px";
    document.getElementById('europa').style.left = "-4000px";
    document.getElementById('titan').style.left = "0";
}