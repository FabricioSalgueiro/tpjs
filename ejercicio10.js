function Ej10() {
    let valores = [0,0,0,0,0,0,0,0,0,0,0,0,0];

    for (let i = 1; i < 36000; i++) {
        let dado1 = Math.round(Math.random() * (6-1)+1);
        let dado2 = Math.round(Math.random() * (6-1)+1);

        let numeroObtenido = dado1 + dado2;

        valores[numeroObtenido]++;
    }

    for (let i = 2; i < valores.length; i++) {
        console.log("El numero "+ i + " aparecio "+ valores[i] + " veces.");
    }
}


function solicitudAJAX() {

    var id = document.querySelector("#entrada").value;
    var url = "https://pokeapi.co/api/v2/pokemon/"+id;

    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function() {
    if(objXMLHttpRequest.readyState === 4) {
        if(objXMLHttpRequest.status === 200) {
          console.log(objXMLHttpRequest.responseText);
        }else {
          alert('Error Code: ' +  objXMLHttpRequest.status);
          alert('Error Message: ' + objXMLHttpRequest.statusText);
        }
    }
}
objXMLHttpRequest.open('GET', url);
objXMLHttpRequest.send();
}