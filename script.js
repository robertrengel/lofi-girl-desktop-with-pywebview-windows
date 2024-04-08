var player;
var cerrarVentanaElemento = document.getElementById("cerrar");
var minVentanaElemento = document.getElementById("min");
var maxVentanaElemento = document.getElementById("max");
var menuYoutubeChannel = document.querySelector(".youtube-channels")
var menuWindow = document.getElementById("menu_window")
var listYoutubeChannels = document.querySelector('.list-youtube-channels')
var iframeYoutube = document.getElementById('youtubePlayer')

channels = {
    lofi_boy: ['lofi Boy','4xDzrJKXOOY?si=ajAfJLmGoahxPGgB',"img/lofi-boy-1.jpeg"],
    lofi_girl: ['lofi Girl','jfKfPfyJRdk?si=jFqcJjCsOQvFq5uIB',"img/lofi-girl-1.jpeg"],
    lofi_girl_sleep: ['lofi Girl Sleep','rUxyKA_-grg?si=Y1RC8xgncGvCjqcC', "img/lofi-girl-3.jpeg"],
    lofi_girl_piano: ['lofi Girl Piano','vMxYL4Cj85Y?si=IuFK-2xdieHj--0c', "img/lofi-girl-3.jpeg"],
    lofi_boy_dark: ['lofi boy dark','S_MOd40zlYU?si=paos2rVLaKt-VhFL', "img/lofi-boy-2.jpeg"]
}

link_channels = 'https://www.youtube.com/embed/'
api_call = '&enablejsapi=1'

menuYoutubeChannel.style.left = '-212px'

for (var clave in channels){
    if (channels.hasOwnProperty(clave)){
        var valor = channels[clave][0]
        var link = channels[clave][1]
        var img_link = channels[clave][2]
        var elementoLi = document.createElement("li")
        var elementoImg = document.createElement("img")
        var elementoP = document.createElement("p")
        var texto = document.createTextNode(valor)

        elementoImg.src = img_link
        elementoP.appendChild(texto)
        elementoLi.appendChild(elementoImg)
        elementoLi.appendChild(elementoP)
        elementoLi.classList.add("element-list-youtube-channels")
        elementoLi.setAttribute("data-idyoutube", link)
        listYoutubeChannels.appendChild(elementoLi)

        elementoLi.addEventListener("click", function(){
            var linkClick = this.getAttribute("data-idyoutube")
            console.log(this.getAttribute("data-idyoutube"))
            iframeYoutube.src = link_channels + linkClick + api_call
        })
    }
}

cerrarVentanaElemento.addEventListener("click", function() {
    // Enviar un mensaje al backend para cerrar la ventana
    console.log("se hace click en cerrar")
    pywebview.api.cerrar_ventana();
  });

minVentanaElemento.addEventListener("click", function() {
    // Enviar un mensaje al backend para minimizar la ventana
    console.log("se hace click en min")
    pywebview.api.min_ventana();
  });

maxVentanaElemento.addEventListener("click", function() {
    // Enviar un mensaje al backend para maximizar la ventana
    console.log("se hace click en max")
    pywebview.api.max_ventana();
  });

menuWindow.addEventListener("click", function(){
    if(menuYoutubeChannel.style.left == '-212px'){
        menuYoutubeChannel.style.left = '0px'
    } else {
        menuYoutubeChannel.style.left = '-212px'
    }
});


// Llama a esta función cuando se cargue la API de YouTube
function onYouTubeIframeAPIReady() {
    // Crea un nuevo reproductor de YouTube
    player = new YT.Player('youtubePlayer', {
        origin: 'http://127.0.0.1:11967',  // Agrega tu URL de origen aquí
        events: {
            'onReady': onPlayerReady
        },
        playerVars: {
            // 'autoplay': 1,
            // 'controls': 1,
            // 'showinfo': 0,
            // 'autohide': 1,
            // 'fs': 0,
            // 'rel': 0,
            // 'modestbranding': 1,
            'suggestedQuality': 'hd720'  // Puedes ajustar la calidad aquí
        }
    });
}

function onPlayerReady(event) {
    player.playVideo();
}

// Función para permitir que el usuario inicie la reproducción
function startVideo() {
    // Reproduce el video al hacer clic en un botón
    player.playVideo();
}

// Función para simular clic automático en el botón de reproducción
function autoPlayVideo() {
    // Espera 1 segundo antes de simular clic para asegurar que todo se haya cargado completamente
    setTimeout(function() {
        startVideo();
    }, 500);
}



