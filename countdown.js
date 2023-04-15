const dia = document.getElementById('dia') //armazenando as variaveis que estao no documento
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const diaFinal = "27 march 2024" //declarando a data que ira finalizar a contagem regressiva  

function countDown(){
    const dataLancamento = new Date(diaFinal) //transforamando a string em uma nova data
    const dataHoje = new Date()//criando a constante da data e hora atual, função Date ja entende que é a data hora atual

    const totals = (dataLancamento - dataHoje)/1000; //convertendo os milisegundos em segundos

    const  finalDias = Math.floor (totals /60 /60 /24);
    const  finalHoras = Math.floor (totals /60 /60) %24;
    const  finalMinutos = Math.floor (totals /60) %60;
    const  finalSegudos = Math.floor (totals) %60;

    
    dia.innerHTML = `${finalDias}D`
    hora.innerHTML = `${formatoTempo(finalHoras)}H` 
    minuto.innerHTML =  `${formatoTempo(finalMinutos)}M`
    segundo.innerHTML =  `${formatoTempo(finalSegudos)}S`

}

    function formatoTempo(tempo){
        return tempo <10? `0${tempo}` : tempo;
    }

countDown();
setInterval(countDown, 1000)
