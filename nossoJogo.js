/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    const carta1 = comprarCarta() 
    const carta2 = comprarCarta()  
    const carta3 = comprarCarta()  
    const carta4 = comprarCarta()  
    
    const pontosUsuario = carta1.valor + carta2.valor     
    const pontosComputador = carta3.valor + carta4.valor   
    
    
    
    console.log(`Boas vindas ao jogo BlackJack!`)
    
    if (confirm(`Quer iniciar uma nova rodada?`)) {
    
       console.log(`Resultado da rodada ↓`)
    
       console.log(`Usuário: ${carta1.texto} ${carta2.texto} = ${pontosUsuario}`)
       console.log(`Computador: ${carta3.texto} ${carta4.texto} = ${pontosComputador}`)
    
    if(pontosUsuario > 21){
       console.log(`O computador ganhou!`)
    } else if (pontosUsuario > pontosComputador && pontosUsuario <= 21){
       console.log(`O usuário ganhou!`)
    }else if (pontosComputador > 21) {
       console.log(`O usuário ganhou!`)
    }else if (pontosUsuario < pontosComputador && pontosComputador <= 21){
       console.log(`O computador ganhou!`)
    }else if (pontosUsuario = pontosComputador){
       console.log(`Deu empate!`)
    }
    }else{
       console.log (`O jogo acabou`)
    }
    