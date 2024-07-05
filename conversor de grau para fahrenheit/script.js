function calcular() {
  var temp = document.getElementById("valor").value;
  var res = document.getElementById("res");
  if (temp.leng == 0) {
    window.alert("[erro]");
  } else {
    var grau = Number((temp - 32) / 1.8); //calculo 
    let tempg = grau.toFixed(1); //faz com que so tenha 1 número depois da vírgula
    if (temp >= 26) {
      res.innerText = `${temp}° fahrenheit é o mesmo que ${tempg}° graus celsius, que quente! 😵😵😵`;
    } else if (temp <= 22) {
      res.innerText = `${temp}° fahrenheit é o mesmo que ${tempg}° graus celsius, urr que gelo! 🥶🥶🥶`;
    } else {
      res.innerText = `${temp}° fahrenheit é o mesmo que ${tempg}° graus celsius`;
    }
  }
}
