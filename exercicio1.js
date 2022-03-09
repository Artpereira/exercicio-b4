const myName = "Arthur";
const birthCity = "São Paulo";
let birthYear = 1992;

console.log(`Meu nome é ${myName}, nasci em ${birthCity}, no ano de ${birthYear}`);

// alterando o valor da variável birthYear e reimprimindo no console
birthYear = 2030;
console.log(birthYear);

// alterando o valor da constante birthCity e reimprimindo no console (gera um erro pois a constante é imutável)
birthCity = "Lindóia"
console.log(birthcity);