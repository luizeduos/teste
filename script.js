document.getElementById("btn-click").onclick = function() {
    var escolha1 = document.getElementsByName("escolha1");
    var contadorNaruto = 0
    var contadorOnePiece = 0

    for (var i=0; i < escolha1.length; i++) {
        if (escolha1[i].checked) {
            if (escolha1[i].value === "Naruto") {
                contadorNaruto += 1;
            } else if (escolha1[i].value === "One Piece") {
                contadorOnePiece += 1;
            }
        }   
    }

    var escolha2 = document.getElementsByName("escolha2");
    var contadorGoku = 0
    var contadorLuffy = 0

    for (var ii=0; ii < escolha2.length; i++) {
        if (escolha2[ii].checked) {
            if (escolha2[ii].value === "Goku") {
                contadorGoku += 1;
            } else if (escolha2[ii].value === "Luffy") {
                contadorLuffy += 1;
            }
        }
    }

    var escolha3 = document.getElementsByName("escolha3");
    var contadorLevi = 0
    var contadorSailor = 0

    for (var iii = 0; iii < escolha3; i++) {
        if (escolha3[iii].checked) {
            if (escolha3[iii].value === "Levi Ackerman") {
                contadorLevi += 1;
            } else if (escolha3[iii].value === "Sailor Moon") {
                contadorSailor += 1;
            }
        }
    }

    document.querySelector(".perguntas1").style.display = 'none';
    document.querySelector(".perguntas2").style.display = 'block';
    document.getElementById("btn-click2").onclick = function() {
        document.querySelector(".perguntas2").style.display = 'none';
        document.querySelector(".perguntas3").style.display = 'block';
    }
    document.getElementById("btn-click3").onclick = function() {
        document.querySelector(".perguntas3").style.display = 'none';
        document.querySelector(".msg").style.display = 'block';
        var msgs = document.getElementById("msg") 
        msgs.innerHTML = `Naruto = ${contadorNaruto} One Piece = ${contadorOnePiece} Goku = ${contadorGoku} Luffy = ${contadorLuffy} Levi Ackerman = ${contadorLevi} Sailor Moon = ${contadorSailor}`
        document.getElementById("btn-voltar").onclick = function() {
            document.querySelector(".perguntas1").style.display = 'block';
            document.querySelector(".msg").style.display = 'none';
        }
    }
}


