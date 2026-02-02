function saludar() {
    const nombre = document.getElementById("nombre").value.trim();
    const hora = new Date().getHours();
    let saludo = "";
    
    if (hora >= 5 && hora<=11){
        saludo = "¡Buenos días!";
    } else if (hora >= 12 && hora <= 18){
        saludo = "¡Buenas tardes!";
    } else {
        saludo = "¡Buenas noches!"; 
    }

    if (nombre === "") {
        document.getElementById("resultado").innerText = 
        "Por favor ingresa tu nombre";
    } else {
        document.getElementById("resultado").innerText = 
        saludo + "" + nombre;
    }
}


function modoOscuro() {
    document.body.classList.add("oscuro");
    document.body.classList.remove("claro");
}

function modoClaro() {
    document.body.classList.add("claro");
    document.body.classList.remove("oscuro");
}

function modoOriginal() {
    document.body.classList.remove("oscuro");
    document.body.classList.remove("claro");
}