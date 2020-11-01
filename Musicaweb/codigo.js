function correo() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msj = document.getElementById('msj').value;
    if(name != ('') && email != ('') && msj != ('')){
        document.getElementById('audio').play()
        setTimeout(function(){
            alert(`Ahoy! soon u will know about us, ${name}. `)
        }, 1000)
        
    }else{
        alert('Argh groomate! Check the dates')        
    }
    
}