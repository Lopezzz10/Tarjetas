function crearTargetas(){
    //let divTargetas = document.getElementById("divTargetas")
    //divTargetas.innerHTML="<h1>MODIFICADO DIV</h2>"
    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);

    let contenido = "";
    let divTargetas = document.getElementById("divTargetas");

    for (let i = desde; i <= hasta; i += salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }

    divTargetas.innerHTML = contenido;
}