
  class Forca {
    
    vidas = 6
    palavra = ["_", "_", "_", "_", "_", "_", "_"]
    letrasChutadas = []
    palavraCompleta       
 
  chutar(letra){    

    if (letra == "a" || letra == "b" || letra == "c" || letra == "x" || letra == "i" && letra.length == 1 ){
      if(letra == "a"){
        this.palavra.splice(0, 1, 'a')
        this.palavra.splice(2, 1, 'a')
        this.palavra.splice(4, 1, 'a')
      }
      if(letra == "b"){
        this.palavra.splice(1, 1, 'b')
      }
      if(letra == "c"){
        this.palavra.splice(3, 1, 'c')
      }
      if(letra == "x"){
        this.palavra.splice(5, 1, 'x')
      }
      if(letra == "i"){
        this.palavra.splice(6, 1, 'i')
      }
      
      this.palavraCompleta = this.palavra[0].concat(this.palavra[1].concat(this.palavra[2].concat(this.palavra[3].concat(this.palavra[4].concat(this.palavra[5].concat(this.palavra[6]))))))
      
      if(this.letrasChutadas.includes(letra)){
        return
      }
       
       this.letrasChutadas.push(letra)
       return true

    }else{ 
      if(letra.length != 1){
        return

      }else{
        if(this.letrasChutadas.includes(letra)){
          return
        }        
       this.letrasChutadas.push(letra)
       this.vidas -= 1       
       return 0
      }
     }   
  }
  
  buscarEstado() {
    if(this.palavraCompleta == "abacaxi"){
      return "ganhou";
    }else if(this.vidas <= 0){
     return "perdeu";
    }
    else {
      return "aguardando chute:";
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo(){    

    return {
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas 
    }
  }
}
module.exports = Forca;