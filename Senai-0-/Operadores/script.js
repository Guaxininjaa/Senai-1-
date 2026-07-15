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

    atribuicao: `// Protótipo: Sistema de Telemetria
let nivelCombustivel = 100;

// Acelerou (Subtrai e Atribui)
nivelCombustivel -= 15; 
console.log("Combustível restante: " + nivelCombustivel + "%"); 

// Abasteceu (Soma e Atribui)
nivelCombustivel += 10; 
console.log("Após abastecer: " + nivelCombustivel + "%");`,

    comparacao: `// Protótipo: Validação de Entrada
let senhaDigitada = "1234";
let senhaNoBanco = 1234; // Número, não texto!

// == Compara apenas o valor (Ignora o tipo)
console.log("Parecem iguais? " + (senhaDigitada == senhaNoBanco)); // true

// === Compara Valor E Tipo (Muito mais seguro)
console.log("São idênticas? " + (senhaDigitada === senhaNoBanco)); // false`,

    logicos: `// Protótipo: Sistema de Acesso
let biometriaOK = true;
let cartaoOK = false;
let portaTrancada = true;

// Precisa da Biometria OU do Cartão
let identificacaoValidada = biometriaOK || cartaoOK; // Retorna true

// A porta abre se a identificação for validada E (!)NÃO estiver trancada
if (identificacaoValidada && !portaTrancada) {
    console.log("Acesso Liberado!");
} else {
    console.log("Acesso Bloqueado. Destranque a porta.");
}`,

    strings: `// Protótipo: Montando o Perfil
let titulo = "Mestre dos ";
let nome = "Jarés";

// Operador de Concatenação (+)
let perfilCompleto = titulo + nome;
console.log("Usuário logado: " + perfilCompleto);

// += Adiciona ao texto existente
let aviso = "Atenção: ";
aviso += "Sistema iniciado com sucesso.";
console.log(aviso);`,

    ternario: `// Protótipo: Estrutura IF/ELSE em 1 Linha
let pressaoTurbo = 1.2;

// Sintaxe: condição ? se_verdadeiro : se_falso;
let alertaPainel = (pressaoTurbo >= 1.0) ? "PRESSÃO ALTA" : "PRESSÃO NORMAL";

console.log("Status do Painel: " + alertaPainel); 
// Resultado: "PRESSÃO ALTA"`,

    bitwise: `// Protótipo: Operação a nível de Bits (Avançado)
// Útil para criptografia e otimização extrema
let a = 5;  // Em binário: 0101
let b = 3;  // Em binário: 0011

// AND Bit a Bit (&) - Retorna 1 apenas onde ambos são 1
let resultado = a & b; // 0001 (Que é 1 em decimal)
console.log("Resultado do Bitwise AND: " + resultado);`,

    tipos: `// Protótipo: Identificação de Dados
let codigoVeiculo = "HB20S";
let anoFabricacao = 2017;
let motorLigado = false;

// typeof descobre o tipo de dado na memória
console.log("O Código é: " + typeof codigoVeiculo); // "string"
console.log("O Ano é: " + typeof anoFabricacao);    // "number"
console.log("Status do motor: " + typeof motorLigado); // "boolean"`,

    relacionais: `// Protótipo: Checando Objetos
let pescaria = {
    local: "Barra da Lagoa",
    horario: "Noturno"
};

// O operador 'in' checa se a propriedade existe no objeto
let temLocal = "local" in pescaria;
console.log("Definiu o local? " + temLocal); // true

let temIsca = "isca" in pescaria;
console.log("Definiu a isca? " + temIsca); // false`,

    memoria: `// Protótipo: Limpando a Memória
let inventario = {
    peixe1: "Robalo",
    peixe2: "Carapeva",
    lixo: "Bota velha"
};

// 'delete' arranca a propriedade da memória do sistema
delete inventario.lixo;

console.log(inventario); 
// O objeto agora só tem os peixes, a bota velha foi deletada!`,

    spread: `// Protótipo: Unindo Arrays facilmente
let peixesDia = ["Carapeva"];
let peixesNoite = ["Espada", "Robalo"];

// O operador Spread (...) espalha o conteúdo das listas
let pescariaTotal = [...peixesDia, ...peixesNoite];

console.log("Resultado da pescaria:");
console.log(pescariaTotal); 
// Retorna: ["Carapeva", "Espada", "Robalo"]`,

    modernos: `// Protótipo: Evitando Quebras de Sistema

// 1. Nullish Coalescing (??) - Define valor padrão se for nulo
let configUsuario = null;
let temaSite = configUsuario ?? "Tema Escuro";
console.log("Tema carregado: " + temaSite);

// 2. Optional Chaining (?.) - Evita erro se o dado não existir
let sistema = { versao: "1.0" };

// Sem o ?., o código quebraria. Com ele, retorna apenas 'undefined'
console.log("Banco conectado: " + sistema.bancoDeDados?.status);`
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