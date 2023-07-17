/*
    o que precisamos fazer? - quando clicarmos no botao de troca de tema temos que alterar a cor do tema da pagina para as cores do tena claro ou do tema escuro

    - objetivo 01 - quando clicar no botao de troca de tema adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
        -passo 01 - pegar no JS o elemento HTML correspondente ao botao de troca de tema 
        -passo 02 - dar um jeito de pegar no JS o elemento HTML correspondente a body
        -passo 03 - dar um jeito de identificar ol clique do usuario no botao de troca de tema
        -passo 04 - adicionar a classe modo-escuro no body
        -passo 05 - trocar a imagem do botao de alterar tema para a lua
    
    - objetivo 02 - quando clicar no boatyao troca de tema, caso o body ja tenha a classe modo-escuro, rmover a classe para mudar para o modo claro e mudar a imagem para o sol
        -passo 06 - verificar se o boby ja tem a classe modo-escuro
        -passo 07 -remover a classe modo-escuro do body
        -passo 08 - trocar a imagem do botao de alterar tema para sol
*/

// - objetivo 01 - quando clicar no botao de troca de tema adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para lua

// -passo 01 - pegar no JS o elemento HTML correspondente ao botao de troca de tema 
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// -passo 02 - dar um jeito de pegar no JS o elemento HTML correspondente a body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// -passo 03 - dar um jeito de identificar ol clique do usuario no botao de troca de tema
botaoAlterarTema.addEventListener("click", () => {


    //-passo 06 -remover a classe modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo){
        // -passo 07 -remover a classe modo-escuro do body
       // body.classList.remove("modo-escuro");

        //-passo 08 - trocar a imagem do botao de alterar tema para sol
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");

    } else{
        
    //-passo 04 - adicionar a classe modo-escuro no body
    //body.classList.add("modo-escuro");

    //-passo 05 - trocar a imagem do botao de alterar tema para a lua
   imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png");

    }
} );
