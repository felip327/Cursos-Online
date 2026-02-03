//Cursos Online

//começando por aqui, temos uma tabela dos alunos que mostra o nome deles, o curso, a categoria e a porcentagem de presença
const listaAlunos = [
  { id: 1, nome: "Goes", curso: "JS Básico", categoria: "Basico", presenca: 100 },
  { id: 2, nome: "Murilo", curso: "JS Avançado", categoria: "Avancado", presenca: 75 }, 
  { id: 3, nome: "Gabriel", curso: "Node.js", categoria: "Avancado", presenca: 100 },
  { id: 4, nome: "Gustavo", curso: "React", categoria: "Intermediario", presenca: 100 }, 
  { id: 5, nome: "Felipe", curso: "HTML/CSS", categoria: "Basico", presenca: 85 }
];

//já aqui temos outra tabela de preços de cada categoria
const tabelaPrecos = {
    "Basico": 10.00,
    "Intermediario": 20.00,
    "Avancado": 35.00
};

//filter
//aqui vamos filtrar os alunos para que so nos mostre apenas os alunos com 100% de presença
const alunosPresenca = listaAlunos.filter(aluno => aluno.presenca === 100);

//map
//aqui, dos alunos com 100% de presença, vamos querer que apareça o custo de emissão de cada um segundo a tabela de preços
const alunosComCusto = alunosPresenca.map(aluno => {
    return {
        ...aluno, 
        custoEmissao: tabelaPrecos[aluno.categoria] 
    };
});
console.log(alunosComCusto);

//reduce
//por fim, aqui vamos somar as emissões obtidas para que nos mostre o total
const custoTotal = alunosComCusto.reduce((total, aluno) => {
    return total + aluno.custoEmissao;
}, 0);

console.log(`----RELATÓRIO ---`)
console.log(`Alunos analisados : ${alunosComCusto.length}`);
console.log("Custo Total das Emissões: R$", custoTotal);
//