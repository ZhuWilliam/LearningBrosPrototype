/*
YO FILL IN TEN WORDS
<br><br>
1:<input type="text"></input><br>
2:<input type="text"></input><br>
3:<input type="text"></input><br>
4:<input type="text"></input><br>
5:<input type="text"></input><br>
6:<input type="text"></input><br>
7:<input type="text"></input><br>
8:<input type="text"></input><br>
9:<input type="text"></input><br>
10:<input type="text"></input><br>
*/


function stepThrough(step) {
    /* TODO if user pick a step to skip to, change step to that */
    
    if(step == 0) {
        document.getElementById("content").innerHTML();
    }
    
};

function upData(kw, nextpage) {
    stuff = {};
    stuff[kw] = $('#'+kw).val();
    console.log(kw);
    console.log(stuff[kw]);

    $.post("/ux2update",
            { stuff: stuff },
            function(data, textStatus, jqXHR) {
                window.location.href = "/" + nextpage;
            });
};
