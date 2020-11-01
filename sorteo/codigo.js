function sorteo() {
    resultado.innerHTML = '';        
    let participantes = document.getElementById("participantes").value;
    participantesSplit = participantes.split("\n");
            
    let premios = parseInt(document.getElementById("premios").value);
            
    if (participantesSplit.length < premios){
        let error = document.getElementById("error");
        error.innerHTML = ("La cantidad de premios es mayor que la de participantes")
    }else{
        for(i = 0; i <= premios - 1; i++){
            let numero = Math.floor(Math.random() * participantesSplit.length)
            let ganador = participantesSplit[numero];
            let resultado = document.getElementById("resultado");
            resultado.innerHTML += (`- Ganador numero ${i+1}: ${ganador} felicidades! <br>`);
            participantesSplit.splice(numero,1);
            }
        }
}

let boton = document.getElementById("boton");
boton.addEventListener("click",sorteo);
