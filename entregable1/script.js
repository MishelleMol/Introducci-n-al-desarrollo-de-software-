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

function toggleExperiencia() {
    const contenido = document.getElementById("experiencia-info"); 
    contenido.classList.toggle("activo");
}

function toggleInformacion() {
    const contenido = document.getElementById("contacto-info");
    contenido.classList.toggle("activo");
}


function filtrarHabilidades() {
    const input = document.getElementById("buscador-habilidades"); 
    const filtro = input.value.toLowerCase().trim(); 

    const lista = document.getElementById("lista-habilidades"); 
    const items = lista.getElementsByTagName("li");


    let coincidencias = 0; 

    for (let i = 0; i < items.length; i++) {
        const texto = items[i].innerText.toLowerCase(); 

        if(texto.includes(filtro)) {
            items[i].style.display =""; 
            coincidencias++;
        } else {
            items[i].style.display = "none"; 
        }
    }

    document.getElementById("sin-resultados").style.display = 
    coincidencias === 0 ? "block" : "none"; 
}