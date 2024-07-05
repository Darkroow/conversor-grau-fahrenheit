function calcular() {
  var temp = document.getElementById("valor").value;
  var res = document.getElementById("res");
  if (temp.lenght == 0) {
    window.alert("[erro]");
  } else {
    var grau = Number(temp * 1.8 + 32); // msm cálculo só que invertido
    let tempg = grau.toFixed(1);
    if (temp >= 26) {
      res.innerText = `${temp}° graus celsius é o mesmo que ${tempg}° fahrenheit, que calor! 😵😵😵`;
    } else if (temp <= 22) {
      res.innerText = `${temp}° graus celsius é o mesmo que ${tempg}° fahrenheit, urr que frio 🥶🥶🥶!`;
    } else {
      res.innerText = `${temp}° graus celsius é o mesmo que ${tempg}° fahrenheit`;
    }
  }
}
