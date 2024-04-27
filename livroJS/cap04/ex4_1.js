const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome  = frm.nome.value
    const nota1 = parseFloat(frm.nota1.value)
    const nota2 = parseFloat(frm.nota2.value)

    const media = (nota1 + nota2)/2
    
    resp1.innerText = `Parabéns sua média é ${media.toFixed(2)}`

    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}, você foi aprovado (a)!`
        resp2.style.color = "blue"
    }else{
        resp2.innerText =`Ops ${nome} você foi reprovado (a)`
        resp2.style.color = "red"
    }
     
})