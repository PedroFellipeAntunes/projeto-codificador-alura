# Decodificador
Este é um projeto de um decodificador web que permite criptografar e descriptografar textos usando substituições simples. A interface foi desenvolvida com HTML, CSS e JavaScript.

## Descrição
O aplicativo possui duas funcionalidades principais:
- **Criptografar**: Converte o texto inserido pelo usuário de acordo com um conjunto de substituições definidas.
- **Descriptografar**: Reverte o texto criptografado para o formato original usando um conjunto de substituições invertidas.

## Estrutura do Projeto

### 1. Arquivos
- `index.html`: O arquivo HTML principal que contém a estrutura da página.
- `style/style.css`: Arquivo de estilos CSS que define a aparência da página.
- `script.js`: Arquivo JavaScript que contém a lógica para criptografar, descriptografar e copiar texto.

### 2. Funções JavaScript
- **mostrarConteudoSecundario(mostrarOculto, texto)**: Alterna a visibilidade entre a mensagem genérica e o texto criptografado/descriptografado.
- **ler_texto(operacao)**: Função que determina se o texto deve ser criptografado ou descriptografado com base no botão clicado.
- **criptografarTexto(texto, substituicoes)**: Função que aplica as substituições ao texto.
- **copiar()**: Copia o texto criptografado/descriptografado para a área de transferência.

### 3. Estilos CSS
O layout é dividido em duas principais seções:
- `.conteudo__principal`: Contém a área de entrada de texto e os botões de ação.
- `.conteudo__secundario`: Exibe o resultado da criptografia ou descriptografia.

### 4. Responsividade
O projeto é adaptado para diferentes tamanhos de tela usando media queries:
- **Tablets**: Ajustes no layout e visibilidade de elementos para telas médias.
- **Celulares**: Ajustes adicionais para telas pequenas, como tamanho de fonte e espaçamento.
