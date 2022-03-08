function calculadora() {
const operacao =Number(prompt('Escolha uma operação: \n\n 1- Soma(+) \n 2- Substração(-) \n 3- Multiplicação (*)\n 4- Divisão real(/)\n 5- Divisão Inteira(%)\n 6- Potenciação(**)'));

    if(!operacao || operacao >= 7){
        alert('Operação Inválida!');
        calculadora();
    } else {

    let n1 = Number(prompt('Insira o primeiro número:\n'));
    let n2 = Number(prompt('Insira o segundo número:\n'));
    let resultado;

    if (!n1 || !n2){
        alert('Erro, Parametros inválidos')
        calculadora();
    } else{
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`) // templateStrings passando crases ao invés de aspas simples ou duplas, para utilizar strings juntamente com expressões e variáveis.
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
            
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} x ${n2} = ${resultado}`)
            novaOperacao();
            
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            alert(` O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(` o número ${n1} elevado a ${n2} é igual a ${resultado}`)
            novaOperacao();
        }
     //Valida se após finalizado uma operação deseja continuar ou encerrar   
      function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação ? \n 1- Sim \n 2- Não');
    
            if (opcao ==1){
                calculadora();
            } else if (opcao ==2){
                alert('Até Logo!!');
            } else {
                alert('Digite 1 para continuar ou 2 para finalizar');
                novaOperacao();
            }     

    }

    
    }
// Verificador de operações digitadas
    if (operacao ==1){
        soma();
    } else if (operacao == 2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao == 4){
        divisaoReal();
    } else if (operacao == 5){
        divisaoInteira();
    } else if (operacao == 6){
        potenciacao();
        
    }
    }

    
}

calculadora();




