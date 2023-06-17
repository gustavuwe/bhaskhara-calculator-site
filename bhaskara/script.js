var button = document.getElementById("calculateButton")

button.addEventListener("click", function(e) {
    e.preventDefault()

    console.log(e)

    var valorA = document.getElementById("aValue").value

    var valorB = document.getElementById("bValue").value

    var valorC = document.getElementById("cValue").value

    var deltaEl = document.getElementById("delta")

    var x1El = document.getElementById("x1")

    var x2El = document.getElementById("x2")

    var delta = (valorB ** 2) - (4 * valorA * valorC)

    console.log(delta)

    var x1 =  ((-1 * valorB) + (delta ** 0.5)) / (2 * valorA)

    if (x1 == NaN) {
        x1El.textContent = `Não há a raíz x1`
    } else {
        x1El.textContent = `x1 é igual a: ${x1}`
    }

    console.log(x1)

    var x2 = ((-1 * valorB) - (delta ** 0.5)) / (2 * valorA)

    if (x2 == NaN) {
        x2El.textContent = `Não há a raíz x2`
    } else {
        x2El.textContent = `x2 é igual a: ${x2}`
    }

    console.log(x2)

    deltaEl.textContent = `Delta é igual a: ${delta}`
})