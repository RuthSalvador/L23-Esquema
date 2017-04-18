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


})
