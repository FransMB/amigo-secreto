// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// //Aquí deberás desarrollar la lógica para resolver el problema.

    let  amigos = [];
    //funcion para agregar amigos en un arreglo
    function agregarAmigo() {
      const input = document.getElementById("amigo");
      const nombre = input.value.trim();

      if (nombre !== "") {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
      } else {
        alert("Ingrese un nombre válido");
      }
    }

    // Función para actualizar la lista de amigos
    function actualizarLista() {
      const ul = document.getElementById("listaAmigos");
      ul.innerHTML = "";

      amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
      });
    }
    // Función para sortear amigos de forma aleatoria
    function sortearAmigo(){

    const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
      }

      const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      const nombreGanador = amigos[indiceAleatorio];

      const li = document.createElement("li");
      li.textContent = `El amigo sorteado es: ${nombreGanador}`;
      resultado.appendChild(li);
}