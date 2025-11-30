function adicionar(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Erro";
  }
}

function porcentagem() {
  let valor = document.getElementById("display").value;
  if (valor) {
    document.getElementById("display").value = eval(valor) / 100;
  }
}

function raiz() {
  let valor = document.getElementById("display").value;
  if (valor) {
    document.getElementById("display").value = Math.sqrt(eval(valor));
  }
}

// Suporte ao teclado
document.addEventListener("keydown", function(event) {
  const display = document.getElementById("display");

  if (!isNaN(event.key) || ["+", "-", "*", "/", "."].includes(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    calcular();
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key === "%") {
    porcentagem();
  }
});