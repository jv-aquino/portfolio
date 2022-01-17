var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementById("menos").addEventListener("click", function(){
    if (currentNumber >= 0) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        alert('Contagem mínima atingida!');
    }
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
});
document.getElementById("mais").addEventListener("click", function() {
    if (currentNumber <= 10) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        alert('Contagem máxima atingida!');
    }
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
});