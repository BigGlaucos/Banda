function fecharModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("noodle1").style.display = "block";
  document.getElementById("noodle2").style.display = "block";
}
function abrirModal() {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("noodle1").style.display = "none";
  document.getElementById("noodle2").style.display = "none";
}

function menos() {
  document.getElementById("read-more").style.display = "none";
}
function mais() {
  document.getElementById("read-more").style.display = "flex";
}
