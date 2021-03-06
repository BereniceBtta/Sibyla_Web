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
        document.getElementById("container_right").style.width = '65%';
        $("#container_left").show();
        $("#container_right").show();
        // $("#fb-root").show();
        var d = document.getElementById("fb-root").innerHTML;
        document.getElementById("container_right").innerHTML = d;
        $("#fb-root").hide();
        $("#slider").hide();
        $('.elements_nav').animate({
            left: '-150%'
        });
    });
};

function replaceContacto() {
    $('.contacto').click(function() {
        document.getElementById("container_right").style.width = '65%';
        $("#container_left").show();
        var d = document.getElementById("content-form").innerHTML;
        document.getElementById("container_right").innerHTML = d;
        $("#fb-root").hide();
        $("#slider").hide();
        $('.elements_nav').animate({
            left: '-150%'
        });
    });
};

function replaceBiografia() {
    $('.biografia').click(function() {
        document.getElementById("container_right").style.width = '96%';
        var d = document.getElementById("content-bibliography").innerHTML;
        document.getElementById("container_right").innerHTML = d;
        $("#container_left").hide();
        $("#fb-root").hide();
        $("#slider").hide();
        $('.elements_nav').animate({
            left: '-150%'
        });
    });
};