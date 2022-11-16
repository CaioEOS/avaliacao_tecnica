const pessoas = [
  {
    name: "Fabiana Araújo",
    age: 33,
    profissao: "Professora",
    email: "Fabiana@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
  {
    name: "Gabriel Gomes",
    age: 25,
    profissao: "Desenvolvedor",
    email: "Gabriel@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
  {
    name: "Fernando Henrique",
    age: 17,
    profissao: "Estudante",
    email: "Fernando@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
  {
    name: "Ana Luiza",
    age: 2,
    profissao: "Nenhuma",
    email: "Ana@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
  {
    name: "Geralda do Nascimento",
    age: 93,
    profissao: "Aposentada",
    email: "Geralda@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
  {
    name: "Miguel Souza",
    age: 70,
    profissao: "Aposentado",
    email: "Miguel@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
  {
    name: "Antonio Miguel",
    age: 69,
    profissao: "Aposentado",
    email: "Antonio@gmail.com",
    telefone: "(99) 99999-9999",
    datapreec: "19/10/2022",
  },
];

function adicionar() {
  var nome = document.getElementById("nome").value;
  var idade = Number(document.getElementById("idade").value);
  var profissao = document.getElementById("profissao").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  const hoje = new Date()
  const dia = hoje.getDate().toString().padStart(2,'0')
  const mes = String(hoje.getMonth() + 1).padStart(2,'0')
  const ano = hoje.getFullYear()
  const dataAtual = `${dia}/${mes}/${ano}`
  pessoas.push({name:nome, age:idade, profissao:profissao, email:email, telefone:telefone, datapreec:dataAtual});
  console.log(pessoas);
}

/* 3 */ const pessoa = pessoas.find((pessoa) => pessoa.name === "Gabriel Gomes");
console.log(pessoa);

/* 4 */ const criarVetor = pessoas.map((pessoa) => pessoa.name);
console.log(criarVetor);

/* 5 */ const pessoasComId = pessoas.map((pessoa, index) => { return {id: index + 1, ...pessoa, };
});
console.log(pessoasComId);

/* 6 */ const pessoasMaiorIdade = pessoas.filter((pessoa) => pessoa.age > 18);
console.log(pessoasMaiorIdade);

/* 7 */ const mediaIdade = pessoas.reduce((soma, pessoa) => soma + pessoa.age, 0) / pessoas.length;
console.log(mediaIdade.toFixed(0));
