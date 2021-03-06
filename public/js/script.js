$(document).ready(function() {
    initializePage();
});

function upData(kw, n, nextpage) {
    newData = {};
    var step;
    for (step = 1; step <= n; step++) {
        newData[kw+step] = $('#'+kw+step).val();
        console.log("Updating " + (kw+step) + " with " + newData[kw+step]);
    }

    $.post("/ux2update",
            { newData: newData },
            function(data, textStatus, jqXHR) {
                window.location.href = "/" + nextpage;
            });
};

/* for hints */
function showHint(num) {
    var hiddenHints = document.getElementById('hidden-info' + num);
    if (hiddenHints.style.display === 'none') {
        hiddenHints.style.display = 'block';
    } else {
        hiddenHints.style.display = 'none';
    }
}

/* for showing more of the page */
function showPage(num) {
    $("#hidden-cnt" + num).attr("style", "display: block");
    $("#button-cnt" + num).attr("style", "display: none");
}

/*********************** Home Screen Nav Button ****************************/
/* Open when someone clicks on the span element */
function toggleNav() {
    el = document.getElementById("myNav");
    if (el.style.width === "100%") {
        document.getElementById("myNav").style.width = "0%";
    } else {
        document.getElementById("myNav").style.width = "100%";
    }
}

/***************************************************************************/

/*************** Google Analytics ****************/
function A_begin() {
    ga("send", "event", "buttonClick", "A_clickBegin");
    console.log("A_begin");
    return true;
}

function A_skip() {
    ga("send", "event", "buttonClick", "A_clickSkip");
    openNav();
    console.log("A_skip");
    return true;
}

function B_choose() {
    ga("send", "event", "buttonClick", "B_clickChoose");
    openNav();
    console.log("B_choose");
    return true;
}

function B_start() {
    ga("send", "event", "buttonClick", "B_clickStart");
    console.log("B_start");
    return true;
}
/*************************************************/

function showMenu() {
    openNav();
}

function initializePage() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
}
