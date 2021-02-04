$(document).ready(main);
$(document).ready(replaceBiografia);
$(document).ready(replaceContacto);
$(document).ready(replaceFacebook);



var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        if (contador == 1) {
            $('.elements_nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.elements_nav').animate({
                left: '-150%'
            });
        }
    });
};

function replaceFacebook() {
    $('.facebook').click(function() {
        $("#fb-root").show();
        var d = document.getElementById("fb-root").innerHTML;
        document.getElementById("container_right").innerHTML = d;
        this.hide_content();
    });
};

function replaceContacto() {
    $('.contacto').click(function() {
        var d = document.getElementById("content-form").innerHTML;
        document.getElementById("container_right").innerHTML = d;
        this.hide_content();
    });
};

function replaceBiografia() {
    $('.biografia').click(function() {
        var d = document.getElementById("content-bibliography").innerHTML;
        document.getElementById("container_right").innerHTML = d;
        hide_content();
    });
};

function hide_content() {
    $("#fb-root").hide();
    $("#slider").hide();
    $('.elements_nav').animate({
        left: '-150%'
    });
    alert("hola");
}