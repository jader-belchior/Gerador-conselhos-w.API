const randomAdvice = 'https://api.adviceslip.com/advice'
const areaNumber = document.getElementById('number')
const areaAdvice = document.getElementById('advice')
const button = document.getElementById('dice').addEventListener('click', postAdvice) // programar botao

async function getAdvice() {
    let resposta = await (await fetch(randomAdvice)).json()
    return { advice: resposta.slip.advice,
             number: resposta.slip.id}
}

async function postAdvice(){
    let resposta = await getAdvice()
    areaAdvice.innerText = resposta.advice
    areaNumber.innerText = `ADVICE #${resposta.number}`
}