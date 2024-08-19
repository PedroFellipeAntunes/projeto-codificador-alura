// Define um array com as substituições e seus valores
const substituicoes = [
    { chave: 'e', valor: 'enter' },
    { chave: 'i', valor: 'imes' },
    { chave: 'a', valor: 'ai' },
    { chave: 'o', valor: 'ober' },
    { chave: 'u', valor: 'ufat' }
];

const substituicoesInvertidas = [
    { chave: 'ufat', valor: 'u' },
    { chave: 'ober', valor: 'o' },
    { chave: 'ai', valor: 'a' },
    { chave: 'imes', valor: 'i' },
    { chave: 'enter', valor: 'e' }
];


// Função para alternar a visibilidade do conteúdo secundário
function mostrarConteudoSecundario(mostrarOculto, texto) {
    const conteudoSecundarioGenerico = document.querySelector('.conteudo__secundario__generico');
    const conteudoSecundarioOculto = document.querySelector('.conteudo__secundario__oculto');

    if (mostrarOculto) {
        conteudoSecundarioGenerico.style.display = 'none';
        conteudoSecundarioOculto.style.display = 'flex';

        // Atualiza o texto no conteudo__secundario__oculto
        conteudoSecundarioOculto.querySelector('p').innerText = texto;
    } else {
        conteudoSecundarioGenerico.style.display = 'flex';
        conteudoSecundarioOculto.style.display = 'none';
    }
}

// Função para criptografar ou descriptografar
function ler_texto(operacao) {
    const textarea = document.querySelector('.conteudo__principal__texto');
    let texto = textarea.value.trim(); // Remove espaços em branco

    if (texto) {
        // Se o texto não estiver vazio, decriptografar e mostra o conteúdo oculto
        if (operacao) {
            texto = criptografarTexto(texto, substituicoes);
        } else {
            texto = criptografarTexto(texto, substituicoesInvertidas);
        }

        mostrarConteudoSecundario(true, texto);
    } else {
        // Se o texto estiver vazio, mostra o conteúdo genérico
        mostrarConteudoSecundario(false, '');
    }
}

function criptografarTexto(texto, substituicoes) {
    // Cria uma nova string para armazenar o resultado
    let textoCriptografado = texto;

    // Itera sobre cada substituição
    for (const substituicao of substituicoes) {
        // Substitui cada ocorrência do valor pelo texto da chave correspondente
        textoCriptografado = textoCriptografado.split(substituicao.chave).join(substituicao.valor);
    }

    return textoCriptografado;
}

// Função para copiar o texto para a área de transferência
function copiar() {
    const textoParaCopiar = document.querySelector('.conteudo__secundario__oculto p').innerText;

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        console.log('Texto copiado para a área de transferência');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}