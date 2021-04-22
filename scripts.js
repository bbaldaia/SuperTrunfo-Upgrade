var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c4/02/37/c4023773cb9052b8f9946ed91d432854.gif",
    som: "https://www.myinstants.com/media/sounds/saint-seiya.mp3",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    som: "https://www.myinstants.com/media/sounds/bulbasaur-1.mp3",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/12/04/armadura-de-darth-vader-abre.jpg",
    som: "https://www.myinstants.com/media/sounds/dark_side_calling_u223.mp3",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaBruno = {
    nome: "Saitama",
    imagem: "https://www.sirinerd.com.br/wp-content/uploads/2018/09/saitamamain-625x352.png",
    som: "https://www.myinstants.com/media/sounds/tmpjmo4h_fb.mp3",
    superTrunfo: true,
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaBruno]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 4)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 4)
    }
    cartaJogador = cartas[numeroCartaJogador]
  
    if (cartaJogador.superTrunfo) {
        
        exibeCartaJogador()
        document.getElementById('btnSortear').disabled = true 
        document.getElementById('btnJogar').disabled = true       
        let divResultado = document.getElementById('resultado')
        htmlResultado = '<p class="resultado-final">Super Trunfo! Você venceu!</p>'
        divResultado.innerHTML = htmlResultado
      } else {
        document.getElementById('btnSortear').disabled = true
        document.getElementById('btnJogar').disabled = false        
      }
   
    exibeCartaJogador()
  }


function exibeCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'" + ">"
  
  divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    
    var html = "<div id ='opcoes' class='carta-status'>"
  
    divCartaJogador.innerHTML = nome + moldura + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado") 
  var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final"> Venceu! </p>'
        var som = new Audio(cartaJogador.som)
        som.play()  
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final"> Perdeu! </p>'
        var som = new Audio("https://www.myinstants.com/media/sounds/nooo.mp3")
        som.play()  
    } else {
       htmlResultado = '<p class="resultado-final"> Empatou! </p>'
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
}

function exibeCartaMaquina () {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'" + ">"
  
  divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
    
    var html = "<div id ='opcoes' class='carta-status'>"
  
    divCartaMaquina.innerHTML = nome + moldura + html + opcoesTexto + '</div>'
}
