window.addEventListener("load", function(){

  var divs = ["div1", "div2"];

  function AddDiv(array){
    array.forEach(function(){
    var cuerpo = document.getElementById("body");

    var abuelo = document.createElement("div");
    abuelo.setAttribute("class","div-abuelo");
    cuerpo.appendChild(abuelo);

    var padre = document.createElement("div");
    padre.setAttribute("class","div-padre");
    abuelo.appendChild(padre);

    var hijo = document.createElement("div");
    hijo.setAttribute("class","div-hijo");
    padre.appendChild(hijo);

    })
  };
  AddDiv(divs);

  var divAbuelo = document.getElementsByClassName("div-abuelo");
  var divPadre = document.getElementsByClassName("div-padre");
  var divHijo = document.getElementsByClassName("div-hijo");

    divAbuelo[0].style.background = "red";
    divPadre[0].style.background = "purple";
    divHijo[0].style.background = "yellow";

    divAbuelo[1].style.background = "blue";
    divPadre[1].style.background = "green";
    divHijo[1].style.background = "black";
    divHijo[1].style.position = "relative";
    divHijo[1].style.bottom = "75px";
    divHijo[1].style.right = "75px";

})
