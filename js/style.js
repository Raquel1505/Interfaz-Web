let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let deplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= deplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-140px"
    }
    ubicacionPrincipal = deplazamientoActual;
})