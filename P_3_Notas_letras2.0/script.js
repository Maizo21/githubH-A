
function calcular(){
let nombre = document.getElementById("nombre").value;

if (nombre == ""){
    alert("Debe ingresar el nombre del alumno")
}else{

    let nota1 = document.getElementById("lapso1").value; 

    let nota2 = document.getElementById("lapso2").value;

    let nota3 = document.getElementById("lapso3").value;

    if(nota1 == "" || nota2 == "" || nota3 == ""){
        alert("Debe ingresar las calificaciones")
    }else{
        
    let nota1f = parseInt(nota1); 

    let nota2f = parseInt(nota2);
    
    let nota3f = parseInt(nota3);

    let nota = (nota1f + nota2f + nota3f)/3;

    notaDeci = nota.toFixed(1)

    notaF = Math.round(nota)

    let nota_letra= "";



        if(nota1 > 20 || nota2 > 20 || nota3 > 20){
        alert ("Ha ingresado un numero mayor a 20 en alguno de los lapsos, verifique por favor");

        }else{
            if (notaF >= 19){
                nota_letra= "A";

                nombre = document.getElementById("nombre").value;

                let container = document.getElementById("resultado");

                container.innerHTML = "";

                container.innerHTML = (`Estimado alumno ${nombre}, su nota final es ${notaDeci}, en parametros evaluativos resulta en ${nota_letra}. \uD83E\uDD73 ¡Felicidades!\uD83C\uDFC6 Eres excelente ¡tienes el poder de cambiar el mundo a mejor! \uD83D\uDE0E ` )

            } else if (notaF >= 17) {
                nota_letra= "B";

                nombre = document.getElementById("nombre").value;

                let container = document.getElementById("resultado");

                container.innerHTML = "";

                container.innerHTML = (`Estimado alumno ${nombre}, su nota final es ${notaDeci}, en parametros evaluativos resulta en ${nota_letra}. Muy bien \uD83D\uDE0A. ¡Estas muy cerca de la excelencia! \uD83D\uDE01.`)

            } else if (notaF >= 14) {
                nota_letra= "C";

                nombre = document.getElementById("nombre").value;

                let container = document.getElementById("resultado");

                container.innerHTML = "";

                container.innerHTML = (`Estimado alumno ${nombre}, su nota final es ${notaDeci}, en parametros evaluativos resulta en ${nota_letra}. ¡Lo lograste! \uD83E\uDDD1\u200D\uD83C\uDF93 Sabemos que puedes hacerlo mejor, creemos en ti. No te rindas \uD83D\uDCDA.`)

            } else if (notaF >= 10 ) {
                nota_letra= "D";

                let container = document.getElementById("resultado");

                container.innerHTML = "";

                container.innerHTML = (`Estimado alumno ${nombre}, su nota final es ${notaDeci}, en parametros evaluativos resulta en ${nota_letra}. ¡Aprobaste! Queremos felicitarte y esperamos mas de ti el proximo periodo. Sabemos que puedes lograrlo \uD83E\uDD17. `)

            } else{
                nota_letra= "F";

                nombre = document.getElementById("nombre").value;

                let container = document.getElementById("resultado");

                container.innerHTML = "";

                container.innerHTML = (`La nota definitiva del alumno ${nombre} es ${notaDeci}, en parametros evaluativos es ${nota_letra}. Sentimos que no hayas aprobado \uD83D\uDE14. Con un poco mas de dedicacion podras lograrlo. Cuentas con nosotros`)
            }
        }
    }
}

}
boton = document.getElementById("boton");
boton.addEventListener("click", calcular);
