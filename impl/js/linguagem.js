let nome = prompt

elementos = {
    qntHP: 0,
    qntSG: 0,
    qntO: 0,
    qntB: 0,
    qntD: 0,
    linguagem: 0,
    Date : 0,
    classificar:function () {
        let mensagem = ''
        if (this.linguagem == 'O') {
            this.qntO++
        } else if (this.linguagem == 'HP') {
            this.qntHP++
        } else if (this.linguagem == 'SG') {
            this.qntSG++
        } else if (this.linguagem == 'B') {
            this.qntB++
        } else if (this.linguagem == 'D') {
            this.qntD++
        } else {
         
        } return mensagem = `Quantidade de toner HP recarregado: ${this.qntHP} 
        
        Quantidade de Toner Sansung Recarregado : ${this.qntSG}


        Quantidade de toner Brother recarregado : ${this.qntB}

        Quantidade de Drum Substituido: ${this.qntD}

        Quantidade de Toner Recarregados "Modelos fora Base de Dados" : ${this.qntO}`

    }
}
controle = {
    lerDados: function () {
        let linguagens = document.getElementById('linguagem').value;
        return { nome, linguagens, }
    },
    exibirResultado: function (mensagem) {
        document.getElementById('resultado').innerText = mensagem;
    }
}

function main() {
    let dados = controle.lerDados();
    elementos.linguagem = dados.linguagens;
    let classificacao = elementos.classificar();
    controle.exibirResultado(classificacao);
}

indow.print() 

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];