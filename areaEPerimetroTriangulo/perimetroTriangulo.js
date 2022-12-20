function calculaePerimetroTriangulo(lado1, lado2, lado3) {
  const perimetro = lado1 + lado2 + lado3;
  return perimetro;
}

let perimetro = calculaePerimetroTriangulo(3, 3, 3);

console.log(`O perimetro do triangulo é ${perimetro} `);
