
/////////////////////// [NÃO É REFERENTE AOS EXERCICIOS DESSE DIA]
// function saberSeEoFim(palavra, fim) {
//     let reversoPalavra = palavra.split("").reverse("");
//     let reversoFim = fim.split("").reverse("");
//     let resultado = false;
//     for (let i = 0; i < reversoFim.length; i++) {
//       if (reversoFim[i] == reversoPalavra[i]) {
//         resultado = true;
//       }
//     }
//     return resultado;
//   }
//   console.log(saberSeEoFim("josiel", "iel"));

//////////////////////////////////////////////////////
// trocando a letra "i" do parametro "iel" por "x" e retornou true, o q não era para acontecer, 
// fiz mais alguns testes e cheguei a conclusão que enquanto pelo menos um dos caracteres de "iel" for "true" 
// o retorno sera true independentemente dos outros dois . Reescrevi aqui, se puder, da uma olhada, abraço. (editado) 
/////////////////////////////////////////////////////


// function saberSeEoFim(palavra, fim) {
//     let reversoPalavra = palavra.split("").reverse("");
//     let reversoFim = fim.split("").reverse("");
//     let resultado = false;
//     for (let i = 0; i < reversoFim.length; i++) {
//       if (reversoFim[i] == reversoPalavra[i]) {
//         resultado = true;    ///// return no caso de false encerra e o resolve o problema do codigo acima
//       } else {
//         return resultado = false
//       }
//     } return resultado
  
//   }
//   console.log(saberSeEoFim("baralho", "ralhx"));
//   console.log(saberSeEoFim("baralho", "ralho"));
//   console.log(saberSeEoFim("baralho", "bbbbb"));







// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// const pai = elementoOndeVoceEsta.parentElement;
// pai.style.color = 'red';

// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// primeiroFilhoDoFilho.innerText = "LALALALALLAL"

// const primeiroFilho = pai.firstElementChild;

// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// const Atencao = elementoOndeVoceEsta.nextSibling;

// const terceiroFIlho =  penultimoFIlho.previousElementSibling //ou const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;


// const penultimoFIlho = elementoOndeVoceEsta.lastElementChild.previousElementSibling
//==========================================

// foguetaço
const pai = document.getElementById('pai') //--- recupere o elemento pai
const irmaoDoElementoOndeVoceEsta = document.createElement('section'); // crie um novo elemento
irmaoDoElementoOndeVoceEsta.id = 'irmaoDoElementoOndeVoceEsta'; // defina id
pai.appendChild(irmaoDoElementoOndeVoceEsta);  // fixe esse apendice 

const elementoOndeVoceEsta = documento.getElementById('elementoOndeVoceEsta');
const filhoDaondeEstou = document.createElement('section');
filhoDaondeEstou.id = 'filhoDaondeEstou';
elementoOndeVoceEsta.appendChild(filhoDaondeEstou);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const neto = document.createElement('section');
neto.id = 'neto';
primeiroFilhoDoFilho.appendChild(neto);

const terceiroFilho = primeiroFilhoDoFilho
.parentElement //primeiroFilhoDoFIlho
.parentElement // elementoOndevcEsta
.nextElementSibling;
console.log(terceiroFilho)


//====================================

// Remova todos os elementos filhos de paiDoPai exceto pai, 
// elementoOndeVoceEsta e primeiroFilhoDoFilho. 1: Recupere o elemento com o id pai
// const pai = document.getElementById('pai');  2: Utilize o .childNodes para retornar uma coleção viva de nós filhos do elemento pai.

// 3: Utilize uma estrutura de repetição para iterar sob o nodeList todosOsFilhos do último ao primeiro elemento. Nesse aspecto, o nodeList se comporta como um array, acessível por índice numérico.
//Utilize o .length para verificar o tamanho que todosOsFilhos possui;
//Como a primeira posição de um nodeList (assim como no array) é a posição 0, subtraia 1 do tamanho de todosOsFilhos para obter a expressão inicial (índice);
//Decremente o index a cada iteração.
//
// for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
//   const filhoAtual = todosOsFilhos[index]; : 4 Armazene o filho atual em uma variável.
//    if (filhoAtual.id !== 'elementoOndeVoceEsta') { 5 Verifica se o id do filho atual é diferente de 'elementoOndeVoceEsta'
//      filhoAtual.remove(); 6  Remove o filhoAtual
//   }
// }

//  const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); 7 recupera id 

// segundoEUltimoFilhoDoFilho.remove(); Remove o segundo filho do filho
