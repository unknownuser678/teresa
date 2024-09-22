
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [

 
  
    { text: "[Música]", time: 1.13 },
    { text: "él la estaba esperando con una flor amarilla", time: 17.35 },
    { text: " ella lo estaba soñando con la", time: 24.19 },
    { text: "luz en su pupila", time: 28.16 },
    { text: "y el amarillo del sol iluminaba la", time: 33.07 },
    { text: "esquina lo sentía tan cercano lo sentía", time: 40.20 },
    { text: "desde niña ella sabía que sabía que algún día", time: 44.32 },
    { text: "pasaría que vendría a buscarla con sus", time: 51.28 },
    { text: "flores amarillas", time: 54.84 },
    { text: "No te apures no detengas el instante del", time: 60.19 },
    { text: "encuentro está dicho que es un hecho no", time: 63.39 },
    { text: "la pierdas No hay derecho no te olvides", time: 66.24 },
    { text: "que la vida casi nunca está dormida", time: 69.84 },
    { text: "[Música]", time: 81.65 },
    { text: "[Música]", time: 89.13 },
    { text: "en ese bar tan desierto y se esperaba el", time: 94.07 },
    { text: "encuentro", time: 98.79 },
    { text: "Ella llegó en limusina amarilla", time: 101.11 },
    { text: "por supuesto él se acercó de repente y la", time: 104.47 },
    { text: "miró tan de frente", time: 108.96 },
    { text: "toda una vida so y no pudo decir nada", time: 112.92 },
    { text: "ella sabía que sabía que algún día", time: 118.00 },
    { text: "pasaría que vendría a buscarla con sus", time: 121.56 },
    { text: "flores", time: 124.84 },
    { text: "amarillas No te apures no detengas el", time: 127.84 },
    { text: "instante del encuentro está dicho que es", time: 130.16 },
    { text: "un hecho no la pierdas No hay derecho no", time: 132.08 },
    { text: "te olvides que la vida casi nunca está", time: 134.95 },
    { text: "[Aplausos]", time: 152.31 },
    { text: "[Música]", time: 152.88 },
    { text: "dormida", time: 159.87 },
    { text: "flas", time: 167.68 },
    { text: "ella sabía que sabía que algún día", time: 169.36 },
    { text: "pasaría que vendría a buscarla con sus", time: 173.23 },
    { text: "flores amarillas", time: 176.76 },
    { text: "No te apures no detengas el instante del", time: 179.12 },
    { text: "encuentro está dicho que es un hecho no", time: 182.40 },
    { text: "la pierdas No hay derecho no te olvides", time: 185.87 },
    { text: "que la vida casi nunca está", time: 188.40 },
    { text: "[Música]", time: 190.68 },
    { text: "dormida él ya sabía que él sabía", time: 192.68 },
    { text: "sabía ya sabía que sabía ya sabía y Se", time: 196.08 },
    { text: "olvidaron de sus flores amarillas", time: 199.28 },
    { text: "[Música]", time: 203.50 }





];
function updateLyrics() {
  var time = audio.currentTime; // Mantén el tiempo en formato decimal
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


// Animar las letras
/* function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
} */

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);