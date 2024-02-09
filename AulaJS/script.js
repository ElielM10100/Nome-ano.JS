const idade = Number(prompt("Digite sua idade"))

const ano_atual = new Date().getFullYear()

const ano_nascimento = ano_atual - idade

console.log(ano_nascimento)
