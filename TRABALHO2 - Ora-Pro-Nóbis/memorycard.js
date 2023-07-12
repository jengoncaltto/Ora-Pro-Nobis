
var maximo  = 16;
var largura = 120;
var altura  = 200;
var margem  = 20;
var viradas = 0;
var ctx;
var ordem   = []; // ordem em que as cartas aparecem
var imagens = [
    "imagens/cartas1a.jpg", "imagens/carta1b.jpg",
    "imagens/carta2a.jpg", "imagens/carta2b.jpg",
    "imagens/carta3a.jpg", "imagens/carta3b.jpg",
    "imagens/carta4a.jpg", "imagens/carta4b.jpg",
    "imagens/carta5a.jpg", "imagens/carta5b.jpg",
    "imagens/carta6a.jpg", "imagens/carta6b.jpg",
    "imagens/carta7a.jpg", "imagens/carta7b.jpg",
    "imagens/carta8a.jpg", "imagens/carta8b.jpg"
]

function embaralhaCartas(){
    // Vertor ordenado de valores
    var i, verso = [];
    for (i = 0; i < maximo; i++) {
        ordem[i]  = i;
    }
    // Embaralha as cartas
    var n, tmp;
    for (i = ordem.length; i;) {
        n = Math.random() * i-- | 0;
        tmp = ordem[n];
        ordem[n] = ordem[i];
        ordem[i] = tmp;
    }
}

function viraCarta(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    nx = Math.floor(x / (largura + margem));
    x_inf = (nx + 1) * margem + nx * largura;
    x_sup = x_inf + largura;

    // Verifica se o clique está na segunda linha
    if (y > altura + margem){
        nx += 8;
        y_inf = altura + margem;
        y_sup = y_inf + altura;
    }
    else {
        y_inf = 0;
        y_sup = altura;
    }

    if ((x  >= x_inf && x <= x_sup) && 
         (y >= y_inf && y <= y_sup)){
        var ctx = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = imagens[ordem[nx]];
        img.onload = function (){
            ctx.drawImage(img, x_inf, y_inf, largura, altura);
        }
    }
}

function criaImagem(i, x, y){
    var ctx = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = "imagens/geral.jpg";
        img.onload = function (){
            ctx.drawImage(img, x, y, largura, altura);
        }
    }
}

function montaPainel(){
    var x = margem;
    var y = 0;
    for (var i = 0; i < maximo; i++){
        criaImagem(i, x, y);
        x += largura + margem;
        if (i > (maximo / 2) - 2 && y == 0){
            x = margem;
            y += altura + margem;
        }
    }
}

function init(){
    // O metodo HTMLCanvasElement.getContext() retorna um contexto de desenho no canvas,
    // ou null se o contexto identificado não é suportado
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "blue";
    ElementoCanvas = document.getElementById('canvas');
    ElementoCanvas.addEventListener('mousedown', function(e){
            viraCarta(ElementoCanvas, e);
        });      
    embaralhaCartas();
    montaPainel();   
}