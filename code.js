var game = 0;
function empezarJuego() {
    var name1, name2;
    name1 = document.getElementById("Name1").value;
    name2 = document.getElementById("Name2").value;
    console.log(name1)
    
    if (name1 == "" || name2 == "") {
        swal("Advertencia", "Debe ingresar el nombre del jugador 1 y 2",'warning');
    } else {
        game = 1;
        const t1 = document.getElementById('t1');
        t1.classList.remove('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.remove('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.remove('disabled');
    }
}

do {
var ban = 1;
console.log("bandera " + ban)
function setValor1() {
    if (ban == 1) {
        document.getElementById("b1").innerHTML = "X";
        document.getElementById("b1").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b1").innerHTML = "O";
        document.getElementById("b1").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor2() {
    if (ban == 1) {
        document.getElementById("b2").innerHTML = "X";
        document.getElementById("b2").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b2").innerHTML = "O";
        document.getElementById("b2").classList.add('disable-block');
        winner();
        ban = 1;
    }
}

function setValor3() {
    if (ban == 1) {
        document.getElementById("b3").innerHTML = "X";
        document.getElementById("b3").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b3").innerHTML = "O";
        document.getElementById("b3").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor4() {
    if (ban == 1) {
        document.getElementById("b4").innerHTML = "X";
        document.getElementById("b4").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b4").innerHTML = "O";
        document.getElementById("b4").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor5() {
    if (ban == 1) {
        document.getElementById("b5").innerHTML = "X";
        document.getElementById("b5").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b5").innerHTML = "O";
        document.getElementById("b5").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor6() {
    if (ban == 1) {
        document.getElementById("b6").innerHTML = "X";
        document.getElementById("b6").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b6").innerHTML = "O";
        document.getElementById("b6").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor7() {
    if (ban == 1) {
        document.getElementById("b7").innerHTML = "X";
        document.getElementById("b7").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b7").innerHTML = "O";
        document.getElementById("b7").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor8() {
    if (ban == 1) {
        document.getElementById("b8").innerHTML = "X";
        document.getElementById("b8").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b8").innerHTML = "O";
        document.getElementById("b8").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function setValor9() {
    if (ban == 1) {
        document.getElementById("b9").innerHTML = "X";
        document.getElementById("b9").classList.add('disable-block');
        winner();
        ban = 0;
    } else {
        document.getElementById("b9").innerHTML = "O";
        document.getElementById("b9").classList.add('disable-block');
        winner();
        ban = 1
    }
}

function winner() {
    var b1, b2,b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").innerHTML;
    b2 = document.getElementById("b2").innerHTML;
    b3 = document.getElementById("b3").innerHTML;
    b4 = document.getElementById("b4").innerHTML;
    b5 = document.getElementById("b5").innerHTML;
    b6 = document.getElementById("b6").innerHTML;
    b7 = document.getElementById("b7").innerHTML;
    b8 = document.getElementById("b8").innerHTML;
    b9 = document.getElementById("b9").innerHTML;
    name1 = document.getElementById("Name1").value;
    name2 = document.getElementById("Name2").value;

    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');

        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b1 == 'X' && b5 == 'X' && b9 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name1 + " es el ganador",
            icon: "success"
        });
    }
  
    else if (b1 == 'O' && b2 == 'O' && b3 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if (b7 == 'O' && b8 == 'O' && b9 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if ( b3 == 'O' && b5 == 'O' && b7 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
    else if (b4 == 'O' && b5 == 'O' && b6 == '0') {
        const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
        swal({
            text: name2 + " es el ganador",
            icon: "success"
        });
    }
  
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' 
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
        b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
        b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
            const t1 = document.getElementById('t1');
        t1.classList.add('disabled');
        const t2 = document.getElementById('t2');
        t2.classList.add('disabled');
        const t3 = document.getElementById('t3');
        t3.classList.add('disabled');
            swal({
                text: "OPA EMPATE",
                icon: "warning"
            });
    }
}
} while (game == 1);