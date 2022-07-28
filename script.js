const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = "LALALALALLAL"

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

const Atencao = elementoOndeVoceEsta.nextSibling;

const terceiroFIlho =  penultimoFIlho.previousElementSibling //ou const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;


const penultimoFIlho = elementoOndeVoceEsta.lastElementChild.previousElementSibling;
