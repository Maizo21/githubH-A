
function Add(e){


title = document.getElementById("input-title").value;
reminder = document.getElementById("reminder").value;

const tarea = {
    title,
    reminder
    };

    if (localStorage.getItem('tareas') === null){
        let tareas = [];
        tareas.push(tarea)
        localStorage.setItem('tareas', JSON.stringify(tareas))
    }else{
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }


    Get()
    
    form = document.getElementById("form").reset();

    e.preventDefault()

}

function Get(){
   

    tareas = JSON.parse(localStorage.getItem('tareas'))
    espacio = document.getElementById('container');
    espacio.innerHTML= '';
    
    

    for (i = 0; i < tareas.length; i++){
        let title = tareas[i].title;
        let reminder = tareas[i].reminder;
        espacio.innerHTML += (`
        <div class = 'tarea'> ${title}: <br> ${reminder} <br>
        <a href='#'> <img src = 'delete.png' class='option1' onclick= 'cancel("${title}")'> </a>
        <a href='#'> <img src = 'check.png' class='option2' onclick= 'confirmation("${title}")'> </a>
        </div>        
        `)
        
       
    }

    
}

function cancel(title){

    let cancelacion = swal('¿Desea eliminar el recordatorio?',{
        icon: 'warning',
        buttons:{
            mantener: {
                text:'No',
                value: false},
            eliminar: {
            text:'si',
            value: true}

        }
    })

    .then((value) => {

    if(value){
        swal('Recordatorio Eliminado', '','error')
        let tareas = JSON.parse(localStorage.getItem('tareas'))
            for(let i=0; i < tareas.length; i++){
                if(tareas[i].title == title){
                    tareas.splice(i, 1);
                }
            }
            localStorage.setItem('tareas',JSON.stringify(tareas));
            Get()
    }})
    
}

function confirmation(title){
    swal('¡Buen trabajo!', 'Sigue asi','success')
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    for(let i=0; i < tareas.length; i++){
        if(tareas[i].title == title){
            tareas.splice(i, 1);
        }
    }
    localStorage.setItem('tareas',JSON.stringify(tareas));
    Get()

}

let button= document.getElementById("boton-add");
button.addEventListener("click", Add);
