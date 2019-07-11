
function novoElemento(tagName, clasName) {
    const elem = document.createElement(tagName);
    elem.className = clasName;
    return elem;
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');

    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;
        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
}

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3;
    this.animar = () => {
        this.pares.forEach(par =>{
            par.setX(par.getX() - deslocamento);

            //quando o elemento sair da tela
            if (par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length);
                par.sortearAbertura();
            }

            const meio = largura / 2;
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio;
            if (cruzouOMeio) notificarPonto();
        });
    }
}

function Passaro(alturaJogo) {
    let voando = false;
    
    this.elemento = novoElemento('img', 'passaro');
    this.elemento.src = "imgs/passaro.png";

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaximo = alturaJogo - this.elemento.clientHeight;

        if (novoY <= 0){
            this.setY(0);
        } else if (novoY > alturaMaximo) {
            this.setY(alturaMaximo);
        } else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }
    this.atualizarPontos(0);
}

function estaoSobrePostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();
    
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;
    return horizontal && vertical;
}

function colidiu(passaro, barreiras) {
    let colidiu = false;
    barreiras.pares.forEach(par => {
        if (!colidiu) {
            const superior = par.superior.elemento;
            const inferior = par.inferior.elemento;
            colidiu = estaoSobrePostos(passaro.elemento, superior) ||
             estaoSobrePostos(passaro.elemento, inferior); 
        }
    })
    return colidiu;
}

function Jogar() {
    let pontos = 0;

    const areaDoJogo = document.querySelector('[wm-flappy]');
    const altura = areaDoJogo.clientHeight;
    const largura = areaDoJogo.clientWidth;

    const progresso = new Progresso();
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos));
    const passaro = new Passaro(altura);

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par =>areaDoJogo.appendChild(par.elemento));

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar();
            passaro.animar();
            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador);
            }
        }, 20);
    }
}

new Jogar().start();

/*
const cenario = document.querySelector('[wm-flappy]');

const passaro = document.createElement('img');
passaro.src = "imgs/passaro.png"
passaro.alt = "passaro";

const div1 = document.createElement('div');
div1.style.height = '200px';
div1.classList.add('canoTop');

cenario.appendChild(passaro);
cenario.appendChild(div1);

passaro.style.position = 'absolute';
passaro.style.top = '15px';

const refreshData = function () {
    setPassaroTop(false, 10);
    setLeft(div1);
}

function setLeft(div) {
    let left = div.style.left || '0';
    if (left == '0') {
        left = '98';
    }
    let valor = Number(left.replace('px', '').replace('%', ''));
    valor -= 1;
    div.style.left = `${valor}%`;
    console.log('left', valor);
}

function setPassaroTop(ok, novoTop){
    let top = passaro.style.top || 0;
    if (top == '15px'){
        top = "0";
    }
    let valor = Number(top.replace('px', '').replace('%', ''));
    if (ok) {
      valor -= novoTop;
    } else {
        valor += novoTop;
    }
    if (valor >= 90) {
        valor = 90;
    } else if (valor <= 5) {
        valor = 5;
    }
    passaro.style.top = `${valor}%`;
    console.log('top', valor);
}

setInterval(refreshData, 1000);

document.onkeypress = function(e) {
    setPassaroTop(true, 2);
} */