var botao = document.querySelectorAll('button')
var visor = document.querySelector('.visor')
var visorP = document.createElement('p')
visorP.textContent = ''
visor.appendChild(visorP)

for (let i = 0; i < botao.length; i++) {
    const element = botao[i];
    captureClick(element)
}

function captureClick(value) {
    value.addEventListener('click', function(){
       showVisor(value.innerText)  
  })
}

function showVisor(botao) {
    if (botao >= 0||botao <= 9 || botao == ',' ) {
        visorP.textContent += botao
    }
    else if (botao == 'AC') {
        visorP.textContent = ''
    }
    else if (botao == '=') {
        splitValueVisor()
    }
    else {
        visorP.textContent += ` ${botao} ` 
    }
}

function splitValueVisor() {
    var words = visorP.textContent.split(' ') 
    console.log(words) 
    for (let i = 0; i < words.length; i++) {
        var retorno = calcOperators(Number(words[0]), words[1], Number(words[2]))
    } 
    visorP.textContent = retorno
}

function calcOperators (number1, operator, number2) {
    var results 
    switch (operator) {
        case '*':
          return results = number1 * number2
            break;
        case '/':
            return results = number1 / number2
            break;
        case 'X²':
            return results = Math.pow(number1,number2)
            break;
        case '√':
            return results = Math.sqrt(number1,number2) 
            break;
        case '+':
            return results = number1 + number2
            break;
        case '-':
            return results = number1 - number2
            break;
        case '=':
            visorP.textContent += '='
            break;
    
        default:
            break;
    }
}
