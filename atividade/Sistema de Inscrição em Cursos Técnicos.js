let nome = "Sophia Silva";
let idade = 18;
let curso = "Técnico em Informática";
let mensalidade = 720;
let vagas = 5;
let desconto = true;

console.log("Inscrição de cursos");
console.log("Nome: " + nome);
console.log("Idade: " + idade + " anos");
console.log("Curso: " + curso);

if (idade < 16) {
  console.log("Inscrição não permitida.");
} else if (idade < 18) {
  console.log("Necessita de autorização do responsável.");
} else {
  console.log("Inscrição permitida.");
}

if (vagas > 0) {
  console.log("Existem vagas disponíveis.");
} else {
  console.log("Não existem vagas disponíveis.");
}

let valorFinal = mensalidade;
console.log("Mensalidade original: R$ " + mensalidade);

if (desconto == true) {
  valorFinal = mensalidade - mensalidade * 0.15;
  console.log("Desconto aplicado: 15%");
} else {
  console.log("Sem desconto.");
}

console.log("Mensalidade final: R$ " + valorFinal);

if (mensalidade <= 300) {
  console.log("Classificação: Curso econômico");
} else if (mensalidade <= 600) {
  console.log("Classificação: Curso intermediário");
} else {
  console.log("Classificação: Curso premium");
}

if (idade >= 16) {
  if (vagas > 0) {
    if (idade < 18) {
      console.log("Situação: Inscrição pendente de autorização do responsável.");
    } else {
      console.log("Situação: Inscrição confirmada!");
    }
  } else {
    console.log("Situação: Inscrição não realizada, sem vagas.");
  }
} else {
  console.log("Situação: Inscrição não realizada, idade insuficiente.");
}

console.log("================================");