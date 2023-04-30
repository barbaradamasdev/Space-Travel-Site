/* Toggle Menu Hamburguer */
function toggleMenu () {
    document.getElementById('nav').classList.toggle('active');
}

/* Functions destination */
function changeMoon() {
    document.getElementById('moon').style.transform = "translateX(0px)";
    document.getElementById('mars').style.transform = "translateX(2000px)";
    document.getElementById('europa').style.transform = "translateX(4000px)";
    document.getElementById('titan').style.transform = "translateX(6000px)";
}
function changeMars() {
    document.getElementById('moon').style.transform = "translateX(-2000px)";
    document.getElementById('mars').style.transform = "translateX(0px)";
    document.getElementById('europa').style.transform = "translateX(2000px)";
    document.getElementById('titan').style.transform = "translateX(4000px)";
}
function changeEuropa() {
    document.getElementById('moon').style.transform = "translateX(-4000px)";
    document.getElementById('mars').style.transform = "translateX(-2000px)";
    document.getElementById('europa').style.transform = "translateX(0)";
    document.getElementById('titan').style.transform = "translateX(2000px)";
}
function changeTitan() {
    document.getElementById('moon').style.transform = "translateX(-6000px)";
    document.getElementById('mars').style.transform = "translateX(-4000px)";
    document.getElementById('europa').style.transform = "translateX(-2000px)";
    document.getElementById('titan').style.transform = "translateX(0)";
}

/* Functions crew */
function changeCommander() {
    document.getElementById('commander').style.transform = "translateX(0px)";
    document.getElementById('specialist').style.transform = "translateX(2000px)";
    document.getElementById('pilot').style.transform = "translateX(4000px)";
    document.getElementById('engineer').style.transform = "translateX(6000px)";
}
function changeSpecialist() {
    document.getElementById('commander').style.transform = "translateX(-2000px)";
    document.getElementById('specialist').style.transform = "translateX(0px)";
    document.getElementById('pilot').style.transform = "translateX(2000px)";
    document.getElementById('engineer').style.transform = "translateX(4000px)";
}
function changePilot() {
    document.getElementById('commander').style.transform = "translateX(-4000px)";
    document.getElementById('specialist').style.transform = "translateX(-2000px)";
    document.getElementById('pilot').style.transform = "translateX(0)";
    document.getElementById('engineer').style.transform = "translateX(2000px)";
}
function changeEngineer() {
    document.getElementById('commander').style.transform = "translateX(-6000px)";
    document.getElementById('specialist').style.transform = "translateX(-4000px)";
    document.getElementById('pilot').style.transform = "translateX(-2000px)";
    document.getElementById('engineer').style.transform = "translateX(0)";
}

/* Functions technology */
function changeOne() {
    document.getElementById('vehicle').style.transform = "translateX(0)";
    document.getElementById('spaceport').style.transform = "translateX(2000px)";
    document.getElementById('capsule').style.transform = "translateX(4000px)";
}
function changeTwo() {
    document.getElementById('vehicle').style.transform = "translateX(-2000px)";
    document.getElementById('spaceport').style.transform = "translateX(0)";
    document.getElementById('capsule').style.transform = "translateX(2000px)";
}
function changeThree() {
    document.getElementById('vehicle').style.transform = "translateX(-4000px)";
    document.getElementById('spaceport').style.transform = "translateX(-2000px)";
    document.getElementById('capsule').style.transform = "translateX(0)";
}