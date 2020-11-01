
let g_tierra = 9.8;
let g_marte = 3.7;
let g_venus = 8.9;
let g_mercurio = 3.7;
let g_saturno = 10.4;
let g_urano = 8.9;
let g_jupiter = 24.8;
let g_neptuno = 11.2;
let g_pluton = 0.62;
let peso_final;


function calcular(){
    let peso = parseInt(document.getElementById("peso").value);
    
    let planeta = document.getElementById("planetas").value;



    switch(planeta){
        case "marte":
        peso_final = peso * g_marte / g_tierra;
        break;

        case "pluton":
        peso_final = peso * g_pluton / g_tierra;
        break;

        case "venus":
        peso_final = peso * g_venus / g_tierra;
        break;
        
        case "mercurio":
        peso_final = peso * g_mercurio / g_tierra;
        break;
        
        case "saturno":
        peso_final = peso * g_saturno / g_tierra;
        break;

        case "urano":
        peso_final = peso * g_urano / g_tierra;
        break;

        case "jupiter":
        peso_final = peso * g_jupiter / g_tierra;
        break;

        case "neptuno":
        peso_final = peso * g_neptuno / g_tierra;
        break;

        case "tierra":
        peso_final = peso
        break;

    }
peso_final = parseInt(peso_final)
let espacio = document.getElementById("resultado");

//Extrae la primera letra y la coloca en mayuscula
planetaM = planeta.substr(0,1).toUpperCase();

//extrae el resto de las letras despues de la primera
planetaS = planeta.substr(1,15);

//une la letra en mayuscula y el resto
 
planetaF = planetaM + planetaS;

espacio.innerHTML =" ";
espacio.innerHTML+=(`Tu peso en ${planetaF} es ${peso_final} kilos`);
}

let boton = document.getElementById("boton");
boton.addEventListener("click", calcular);