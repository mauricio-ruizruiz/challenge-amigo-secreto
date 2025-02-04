// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let amigoUsuario = document.getElementById("amigo").value;

  if (amigoUsuario === "") {
    alert("Por favor, inserte un nombre");
  } else if (amigoUsuario !== "") {
    amigos.push(amigoUsuario);
  }
  //   console.log(amigoUsuario);
  //   console.log(typeof amigoUsuario);
  console.log(amigos);
  return;
}

function actualizaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function limpiarValor() {
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.innerHTML = "No hay amigos en la lista para sortear.";
    return;
  } else {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
  }
}
