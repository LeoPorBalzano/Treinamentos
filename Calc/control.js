var result = "", resultSalvo = 0.0, op; /* variaveis para auxilio da opeção */
var salvo=0,deleteBlock=0,resolvido=0; /* salvo sera a variavel que nos permitira checar se o usuario ja clicou no sinal de igual ou se ele esta clicando em calculos subsequentes*/
var tela = document.getElementById('tela');/* tela e mem apontam para elementos da tela */
var mem = document.getElementById('memoria');

/* Escreve o numero digitado na 'tela' e salva o resulado em uma variavel 'result', também desbloqueia a opção de apagar digitos caso bloqueada */

function digitaNumero(num) {  
    if(resolvido==1){result=''}                                                      
    deleteBlock=0;
    result = result + num;
    document.getElementById('tela').innerHTML = ""+result;
    resolvido=0;
}

/* Função unica para virgula que checa se o numero já não é mais inteiro */

function virgula(num){                                                              
    if(parseFloat(tela.innerHTML) % 1 == 0 ){
        result = result + num;
        document.getElementById('tela').innerHTML = ""+result;
    }
}

/* função que opera as diferetentes funçoes da calculadora, com exceção de clear e delete,
os calculos rodam a função 'save()' com seu respectivo parametro para exibição
e informa a 'op' para ser usada no calculo */

function realizaOperacao(operacao){                                                 
    if(operacao == 'clear'){
        op = "";
        salvo=0;
        result='';
        resultSalvo = 0.0;
        mem.innerHTML = '';
        tela.innerHTML = 'Tela da Calculadora';
    }if(operacao == 'delete'){
        if(deleteBlock==0){
            if(tela.innerHTML.length>0){
                var str = tela.innerHTML;
                str = str.substring(0, str.length-1);
                tela.innerHTML = str;
                result = str;
            }
        }
    }if(operacao == 'resto'){
        save('%');
        op='resto'
    }if(operacao == 'divisao'){
        save('/');
        op='divide'
    }if(operacao == 'multiplica'){
        save('*');
        op='multiplica'
    }if(operacao == 'subtrai'){
        save('-');
        op='subtrai'
    }if(operacao == 'soma'){
        save('+');
        op='soma'
    }
}

/* salva o valor na variavel e o expõe na tela, de o usuario ja tiver 
feito algum calculo, ele antes resolve o antigo para depois expo-lo na tela*/

function save(simbolo){
    if(salvo==1){
        resolve(0);
    }
    result='';
    resultSalvo = parseFloat(tela.innerHTML);
    mem.innerHTML = resultSalvo + ' ' + simbolo  + ' ';
    salvo=1;
}

/* resove a operação usando as variaveis result resultSalvo, op 
e bloqueia o botao de delete */

function resolve(btn){
    if(op!==""){
        if(btn==1){salvo=0}
        deleteBlock=1;
        if(op=='subtrai'){
            resultSalvo = resultSalvo - parseFloat(result);
        }if(op=='resto'){
            resultSalvo = resultSalvo % parseFloat(result);
        }if(op=='soma'){
            resultSalvo = resultSalvo + parseFloat(result);
        }if(op=='multiplica'){
            resultSalvo = resultSalvo * parseFloat(result);
        }if(op=='divide'){
            resultSalvo = resultSalvo / parseFloat(result);
        }
        resolvido=1;
        mem.innerHTML = resultSalvo ;
        tela.innerHTML = mem.innerHTML ;
    }
}