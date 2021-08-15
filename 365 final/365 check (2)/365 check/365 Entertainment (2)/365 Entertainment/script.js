function myFunction() {
    var input, filter, ul, li, a, i, f, cl, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("Movielist");
    li = ul.getElementsByTagName("li");
    cl = ul.getElementsByClassName("container");
    document.getElementById("result").innerHTML = "";
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("b")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cl[i].style.display = "";
            f = 0;
        } else {
            cl[i].style.display = "none";

        }
    }
    if (f != 0) {
        document.getElementById("result").innerHTML = "No results found";
    }
}

function selection() {
    var ul, i, cl;
    var value = $('#genre option:selected').val();


    ul = document.getElementById("Movielist");

    cl = ul.getElementsByClassName("container");
    if (value == 'action') {
        for (i = 0; i < 7; i++) {
            cl[i].style.display = "";
        }
        for (i = 7; i < 28; i++) {
            cl[i].style.display = "none";
        }

    }
    if (value == 'drama') {
        for (i = 7; i < 14; i++) {
            cl[i].style.display = "";
        }
        for (i = 14; i < 28; i++) {
            cl[i].style.display = "none";
        }
        for (i = 0; i < 7; i++) {
            cl[i].style.display = "none";
        }

    }
    if (value == 'Sci-Fi') {
        for (i = 14; i < 21; i++) {
            cl[i].style.display = "";
        }
        for (i = 21; i < 28; i++) {
            cl[i].style.display = "none";
        }
        for (i = 7; i < 14; i++) {
            cl[i].style.display = "none";
        }
        for (i = 0; i < 7; i++) {
            cl[i].style.display = "none";
        }

    }
    if (value == 'horror') {
        for (i = 21; i < 28; i++) {
            cl[i].style.display = "";
        }
        for (i = 0; i < 21; i++) {
            cl[i].style.display = "none";
        }

    }
    if (value == 'all') {
        for (i = 0; i < 28; i++) {
            cl[i].style.display = "";
        }
    }

}