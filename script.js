
const form = document.getElementById('sum-form')

form.addEventListener('submit', function(event){
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    alert(numero1 + numero2);
})