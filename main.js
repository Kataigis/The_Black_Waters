$(document).ready(function () {
    document.getElementById("homebtn").addEventListener('click', function () {
        pageTransition("home");
    });

    document.getElementById("corebtn").addEventListener('click', function () {
        pageTransition("core");
    });

    document.getElementById("enginebtn").addEventListener('click', function (e) {
        pageTransition("engine");
    });

    document.getElementById("evolbtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("evolcontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("raikabtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("raikacontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("annebtn").addEventListener('click', function (e) {
        pageTransition("engine");
        document.getElementById("annecontent").scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById("techbtn").addEventListener('click', function () {
        pageTransition("tech");
    });

    document.getElementById("listbtn").addEventListener('click', function () {
        pageTransition("list");
    });

    document.getElementById("combobtn").addEventListener('click', function () {
        pageTransition("combo");
    });
});

function pageTransition(id) {
    var btns = document.getElementsByClassName("nav-link");
    var contents = document.getElementsByClassName("tabContent");
    Array.from(btns).forEach((el) => {
        el.classList.remove("active");
        console.log("removed");
    });
    Array.from(contents).forEach((el) => {
        el.style.display = "none";
    })
    window.scrollTo(0, 0);
    document.getElementById(`${id}btn`).classList.add("active");
    $(`#${id}content`).fadeIn(600);
    console.log(`${id}btn ${id}content`);
}
