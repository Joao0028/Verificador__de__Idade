function calcular(){

var data = document.querySelector(".data")
var data = Number(data.value)
var dataAtual = new Date()
var dataAtual = dataAtual.getFullYear()
var idade = dataAtual - data

var generoRecebe = document.getElementsByName("sexoo")

var resultado = document.querySelector("#resultado")

resultado.style.fontSize = "20px"
resultado.style.color = "black"

//Função bebe 1 ano
if(generoRecebe[0].checked && idade == 1){
    generoRecebe = 'bebêzinho'
    resultado.innerHTML = `Você é um ${generoRecebe} de ${idade} ano.`
}else if(generoRecebe[1].checked && idade == 1){
    generoRecebe = 'bebêzinha'
    resultado.innerHTML = `Você é uma ${generoRecebe} de ${idade} ano.`

}
//Função criança até 9 anos
if(generoRecebe[0].checked && idade <= 9){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma criança de ${idade} anos.`

}else if(generoRecebe[1].checked && idade <= 9){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma criança de ${idade} anos.`

}
//Função pré-adolescente 10 até 14 anos
if(generoRecebe[0].checked &&  idade <= 14){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um pré-adolecente de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked &&  idade <= 14){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma pré-adolecente de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função adolecente 15 a 17
if(generoRecebe[0].checked && idade <= 17){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um adolecente de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked && idade <= 17){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma adolecente de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função jovem 18 a 24
if(generoRecebe[0].checked && idade <= 24){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um jovem de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked && idade <= 24){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma jovem de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função jovem adulto 24 a 29
if(generoRecebe[0].checked && idade <= 29){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um jovem adulto de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked && idade <= 29){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma jovem adulta de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função adulto 30 a 59
if(generoRecebe[0].checked && idade <= 59){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um adulto de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked && idade <= 59){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma adulta de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função jovem idoso 60 a 75
if(generoRecebe[0].checked && idade <= 75){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um jovem idoso de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked && idade <= 75){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma jovem idosa de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função idoso 76 a 90
if(generoRecebe[0].checked && idade <= 90){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um idoso de ${idade} anos.`
    resultado.style.fontSize = "18px"
}else if(generoRecebe[1].checked && idade <= 90){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é uma idosa de ${idade} anos.`
    resultado.style.fontSize = "18px"
}
//Função patrimônio historico kkk
if(generoRecebe[0].checked && idade <= 122){
    generoRecebe = 'masculino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um patrimônio histórico de ${idade} anos.`
    resultado.style.fontSize = "16px"
}else if(generoRecebe[1].checked && idade <= 122){
    generoRecebe = 'feminino'
    resultado.innerHTML = `Você tem o genêro ${generoRecebe}, e é um patrimônio histórico de ${idade} anos.`
    resultado.style.fontSize = "16px"
}
//Função pega mentiroso
if(generoRecebe[0].checked && idade >= 123){
    generoRecebe = 'mentiroso'
    resultado.innerHTML = `Você é um ${generoRecebe}, e é um patrimônio histórico de ${idade} anos kkk.`
    resultado.style.fontSize = "16px"
}else if(generoRecebe[1].checked && idade >= 123){
    generoRecebe = 'mentirosa'
    resultado.innerHTML = `Você é uma ${generoRecebe}, e é um patrimônio histórico de ${idade} anos kkk.`
    resultado.style.fontSize = "16px"
}
//Não colocar ano de Nascimento
if(data == 0 || data >= dataAtual){
    resultado.innerHTML = "Insira uma data de nascimento válida!"
    resultado.style.color = "red"
} 
}