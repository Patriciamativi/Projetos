function calculateIMC() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const imc = weight / (height * height);
  if (imc <= 18.5) {
    document.getElementById("message").style.color = "#ff0000";
    document.getElementById("message").innerHTML = `Seu imc é: ${
      Math.round(imc * 100) / 100
    }, a classificação do seu peso é Magreza`;
  } else if (imc > 18.5 && imc <= 24.9) {
    document.getElementById("message").style.color = "#3CB371";
    document.getElementById("message").innerHTML = `Seu imc é: ${
      Math.round(imc * 100) / 100
    }, a classificação do seu peso é Normal`;
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById("message").style.color = "#B22222";
    document.getElementById("message").innerHTML = `Seu imc é: ${
      Math.round(imc * 100) / 100
    }, a classificação do seu peso é Sobrepeso`;
  } else if (imc >= 30 && imc <= 39.9) {
    document.getElementById("message").style.color = "#B22222";
    document.getElementById("message").innerHTML = `Seu imc é: ${
      Math.round(imc * 100) / 100
    }, a classificação do seu peso é Obesidade I`;
  } else if (imc >= 40) {
    document.getElementById("message").style.color = "#B22222";
    document.getElementById("message").innerHTML = `Seu imc é: ${
      Math.round(imc * 100) / 100
    }, a classificação do seu peso é Obesidade II`;
  } else {
    document.getElementById("message").innerHTML = "Preencha os campos";
  }
}
