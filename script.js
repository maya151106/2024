const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Homofobia são atos preconceituosos contra pesssoas que tem orientação sexual diferente da heterossexual.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A homofobia se manifesta na sociedade atraves de discriminação, violência, negligência nos serviços de saúde e legislação discriminatória.",
        alternativas: [
            {
                texto: "próximo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O respeito à diversidade de gênero é importante para garantir igualdade de direitos, reconhecera multiplicidade de experiências humanas, reduzir a discriminação e promover o bem estar.",
        alternativas: [
            {
                texto: "próximo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "a homofobia pode causar ansiedade, depressão, isolamento social, trauma psicológico, barreiras ao acesso de serviços de saúde e estresse crônico.",
        alternativas: [
            {
                texto: "próximo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Agora você está ciente sobre o que é a Homofobia e o que ela causa.",
        alternativas: [
            {
                texto: "Fim.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
