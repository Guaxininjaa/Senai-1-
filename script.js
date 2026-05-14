const fundoModal = document.getElementById('fundoModal');
const tituloModal = document.getElementById('tituloModal');
const conteudoModal = document.getElementById('conteudoModal');

const exemplos = {
    aritmeticos: `// Protótipo: Cálculo de Potência e Resto
let cavalosDePotencia = 120;
let multiplicadorTurbo = 1.5;

// Exponenciação (**)
let forcaBruta = 10 ** 2; // 100

let hpTotal = cavalosDePotencia * multiplicadorTurbo;
console.log("Potência Total: " + hpTotal + "cv"); 

// Módulo (%) - Útil para descobrir se um número é par ou ímpar
let resto = hpTotal % 2; 
console.log("Resto da divisão: " + resto);`,

    atribuicao: `// Protótipo: Sistema de Pontuação
let nivelBateria = 100;

// O uso do GPS consumiu 15% (Subtrai e Atribui)
nivelBateria -= 15; 
console.log("Bateria após GPS: " + nivelBateria + "%"); 

// Carregador rápido dobrou a carga (Multiplica e Atribui)
nivelBateria *= 2; 

// Evitando passar de 100% usando um truque simples
if(nivelBateria > 100) nivelBateria = 100;
console.log("Carga Final: " + nivelBateria + "%");`,

    comparacao: `// Protótipo: Validação de Entrada
let senhaDigitada = "1234";
let senhaNoBanco = 1234; // Número, não texto!

// == Compara apenas o valor (Ignora o tipo)
console.log("As senhas parecem iguais? " + (senhaDigitada == senhaNoBanco)); // true

// === Compara Valor E Tipo (Muito mais seguro)
console.log("As senhas são idênticas? " + (senhaDigitada === senhaNoBanco)); // false`,

    logicos: `// Protótipo: Sistema de Acesso de Segurança
let biometriaOK = true;
let cartaoOK = false;
let portaTrancada = true;

// Precisa da Biometria OU do Cartão
let identificacaoValidada = biometriaOK || cartaoOK; // Retorna true

// A porta só abre se a identificação for validada E (!)NÃO estiver trancada
if (identificacaoValidada && !portaTrancada) {
    console.log("Acesso Liberado!");
} else {
    console.log("Acesso Bloqueado. Destranque a porta.");
}`,

    ternario: `// Protótipo: Estrutura IF/ELSE em 1 Linha (Operador Ternário)
let pressaoTurbo = 1.2;

// Sintaxe: condição ? se_verdadeiro : se_falso;
let alertaPainel = (pressaoTurbo >= 1.0) ? "PRESSÃO ALTA" : "PRESSÃO NORMAL";

console.log("Status do Painel: " + alertaPainel); 
// Resultado: "PRESSÃO ALTA"`,

    tipos: `// Protótipo: Verificação de Segurança de Variáveis
let codigoProduto = "HB20S-TURBO";
let anoModelo = 2017;
let temArCondicionado = true;

// typeof descobre o tipo de dado que está rolando na memória
console.log("Tipo do Código: " + typeof codigoProduto); // Retorna: "string"
console.log("Tipo do Ano: " + typeof anoModelo);       // Retorna: "number"
console.log("Tipo do Ar: " + typeof temArCondicionado); // Retorna: "boolean"`,

    relacionais: `// Protótipo: Manipulando um Objeto
let carro = {
    marca: "Hyundai",
    modelo: "HB20S",
    ano: 2017
};

// O operador 'in' verifica se existe uma propriedade dentro do objeto
let temModelo = "modelo" in carro;
console.log("O objeto possui modelo? " + temModelo); // Retorna: true

// O operador 'delete' arranca a propriedade da memória
delete carro.ano;
let temAno = "ano" in carro;
console.log("E agora, possui ano? " + temAno); // Retorna: false`,

    modernos: `// Protótipo: Evitando Erros com Operadores ES6+

// 1. Nullish Coalescing (??) - Define valor padrão se a variável for nula/vazia
let configuracaoUsuario = null;
let temaSite = configuracaoUsuario ?? "Tema Escuro Padrão";
console.log("Tema carregado: " + temaSite);

// 2. Optional Chaining (?.) - Impede o site de quebrar se um dado não existir
let sistema = {
    versao: "1.0",
    // Perceba que não temos a propriedade 'bancoDeDados' aqui
};

// Sem o ?., isso daria um erro vermelho no site. Com ele, retorna apenas 'undefined'
console.log("Conectado ao banco: " + sistema.bancoDeDados?.status);`
};

function abrirModal(tipo) {
    tituloModal.innerText = `Simulação: ${tipo.toUpperCase()}`;
    conteudoModal.innerText = exemplos[tipo];
    fundoModal.style.display = 'flex';
}

function fecharModal() {
    fundoModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === fundoModal) fecharModal();
}