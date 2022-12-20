function calcularAreaQuadrado(lado) {
  const area = Math.pow(lado, 2);
  return area;
}

function CalcularPerimetroQuadrado(lado) {
  const perimetro = lado + lado + lado + lado;
  return perimetro;
}

let area = calcularAreaQuadrado(3);

console.log(`A area do quadrado é ${area}`);

let perimetro = CalcularPerimetroQuadrado(3);

console.log(`O perímetro do quadrado é ${perimetro}`);
