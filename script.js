let resultados = document.getElementById('resultados')

function appendCharacter(char) {
    if (resultados.innerText == "0" && char != ".") {
        resultados.innerText = char
    } else {
        if (!(char != "." && char == resultados.innerText[resultados.innerText.length - 1] == ".")) {
            resultados.innerHTML += char
        }
    }
}

function clearResultados() {
    resultados.innerText = "0"
}

function calcularResultado() {
    resultados.innerText = eval(resultados.innerText)
}