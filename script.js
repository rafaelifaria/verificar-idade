function calcularMedia() {
    var numerosInput = document.getElementById("numeros").value;
    var numerosArray = numerosInput.split(",").map(Number);
    
    var total = 0;
    for (var i = 0; i < numerosArray.length; i++) {
      total += numerosArray[i];
    }
    
    var media = total / numerosArray.length;
    
    document.getElementById("resultado").innerHTML = '<div class="alert alert-info" role="alert">A média é: ' + media.toFixed(2) + '</div>';
  }
  