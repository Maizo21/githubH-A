alert("Hola! Este es un pequeño proyecto que hice de antesala al halloween. 👻 😈") 
alert("Si te gustó, el fantasma tiene mis rrss 👻. Ahora si, haz click en el libro y que comience el terror. 🎃")

function historia() {
    story.innerHTML = '';
    
    let stories = [
        
    "Una cara sonriente me está espiando desde la oscuridad, detrás de la ventana de mi dormitorio.<br><br> No seria para nada un problema si no fuese porque vivo en un noveno piso. <br> <img src='https://d.wattpad.com/story_parts/3/images/14cca5c116141672527199415465.jpg'>",
    
    "'No puedo dormir', me susurró ella, mientras le hacia un espacio en la cama conmigo. <br><br> Desperté con frío, abrazando el vestido con el que fue sepultada hace 2 meses. <br> <img src = 'https://estaticos.elmundo.es/assets/multimedia/imagenes/2017/02/13/14869916219776.jpg'> ", 
    
    "Mi hijo me despertó en la madrugada, 'papá, hay un monstruo debajo de mi cama'.<br><br> No quedo de otra, fui a mirar y allí no había nada, como era de esperar, entonces escuché a mi hijo con voz temblorosa: 'papá, hay un monstruo sobre mi cama'. <br> <img src='https://1.bp.blogspot.com/-xYU3KBxZeWs/WpJD3ybvxsI/AAAAAAAAHTY/3buSmIyNUH8KBw_Al4GA8Frhb3aMLUxZACLcBGAs/s1600/fantasma-cama.jpg'>",

    "Nunca antes había visto a una niña llorar tan desconsoladamente. <br><br> Y menos aún en un hospital abandonado. <br> <img src='https://www.roastbrief.com.mx/wp-content/uploads/2017/10/roastbrief-3-teor%C3%ADas-sobre-la-%E2%80%9Cni%C3%B1a-fantasma%E2%80%9D-que-se-aparece-en-las-agencias-de-publicidad.jpg'>",
    
    
    "Mi hermana todos los dias me dice que mamá la mató. <br><br> Mamá siempre dice que yo no tengo ninguna hermana.<br> <img src='https://a.wattpad.com/cover/122739679-288-k689313.jpg'>",
    
    "Anoche tardé mucho en dormirme por culpa de las tétrica mirada del hombre de aquel cuadro. <br><br> Esta mañana me percaté de que no era un cuadro, sino una ventana.<br> <img src='https://i.pinimg.com/236x/dd/c6/e0/ddc6e04fe8224b15b34d52d18af83a41--scary-stuff-creepy-things.jpg'>",
    
    "Me desperté al escuchar como alguien llamaba al cristal de la ventana. Al principio pensé que era la ventana, hasta que volvieron a llamar desde el espejo.<br> <img src='https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201810/mirror-fb_102618012327.jpg'>",
    
    "Después de llevar tantos años viviendo solo en una casa tan grande, llegué a una sorprendente conclusión: <br><br> Siempre cerraba muchas más puertas de las que abría.<br> <img src='https://elsoldesanjuan.com.ar/wp-content/uploads/2019/08/2019-08-26_111405.jpg'>",
    
    "Después del apocalipsis, el último humano de la Tierra estaba en su habitación. <br><br> Justo en ese momento alguien llamó a la puerta.<br> <img src='https://img.freepik.com/foto-gratis/silueta-oscura-nino-detras-vidrio-luz-verde-sobrenatural-cerrado-solo-habitacion-detras-puerta-halloween-pesadilla-nino-extraterrestres-monstruos-fantasmas-mal-hogar-dentro-casa-embrujada_102332-3035.jpg?size=626&ext=jpg'>",
    
    "En la tele hay un ente devorando a una persona. <br><br> Me aterra el darme cuenta de que es mi cámara de seguridad. <br> <img src='https://fotografias.lasexta.com/clipping/cmsimages01/2016/07/01/20947063-BAAF-40D9-91A2-93E5850968A7/58.jpg'>",
    
    "Alguien lleva una hora mirando mi ventana desde la calle. <br><br> Es inquietante vivir frente a un cementerio.<br> <img src='https://www.diariodecadiz.es/2019/08/09/cadiz/cementerio-San-Jose-demolicion-cuarteladas_1380772334_103573347_667x375.jpg'>",
    
    "No me detuve ni un segundo ante aquella chica haciendo autostop de madrugada. <br><br> Lo habría hecho de no haber sido porque sus pies no tocaban el asfalto.<br> <img src='https://www.mejorinformado.com/u/fotografias/m/2020/7/17/f608x342-77987_107710_15.jpg'>",
    
    "Vives en latinoamerica? <br><br> Nada mas que decir. <br> <img src='https://pm1.narvii.com/7256/f1a6142383783ba4db9396eaf2fb6e4924177956r1-540-540v2_hq.jpg'>",
    
    "Durante toda la pandemia me hice el habito de hablarme a mí mismo, no es tan raro como parece y hace mas llevadero el encierro <br><br> Sin embargo, dejé de hacerlo desde el día que me empezaron a responder. <br><img src='https://i.pinimg.com/originals/5b/19/d9/5b19d96c16bc206acb6308eb47365fb8.jpg'>",
    
    "Hace unas noches recibi una llamada de skype de un número desconocido<br><br>Lo desconcertante fue que la llamada mostraba la vista desde fuera de mi ventana. <br> <img src='https://rosarioplus-assets.tadevel.xyz/5f4b79c012b5372badfeb982/image.jpeg'>"
    
        ];
        
        let random = Math.floor(Math.random() * stories.length)
        
        let selection = stories[random];
        
        story.innerHTML += (`<span>Historia:</span> <br><br> ${selection} <br><br> <span>¿Quieres mas? Presiona el libro </span>`);
    }
    let story = document.getElementById("story");
    
    let button = document.getElementById("button");
    button.addEventListener("click",historia);