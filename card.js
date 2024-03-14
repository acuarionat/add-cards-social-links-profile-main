const crearNodo = ()=>{

    const contenedor = document.createElement("div")
    contenedor.className="contenedor"
    const texto = document.createElement("div")
    texto.className="texto"

    const imagen = document.createElement("img")
    imagen.src="./assets/images/avatar-jessica.jpeg"
    const nombre = document.createElement("h2")
    const lugar = document.createElement("h3")
    const info = document.createElement("p")
    const nom = document.createTextNode('Jessica Randall')
    const lug = document.createTextNode('London, United Kingdom')
    const inf = document.createTextNode('Front-end developer and avid reader.')
    const botones = document.createElement("div")
    botones.className="botones"
    const boton1 = document.createElement("button")
    const boton2 = document.createElement("button")
    const boton3 = document.createElement("button")
    const boton4 = document.createElement("button")
    const boton5 = document.createElement("button")
    const btn1 = document.createTextNode('GitHub')
    const btn2 = document.createTextNode('Frontend Mentor')
    const btn3 = document.createTextNode('LinkedIn')
    const btn4 = document.createTextNode('Twitter')
    const btn5 = document.createTextNode('Instagram')

    texto.appendChild(imagen)
    nombre.appendChild(nom)
    lugar.appendChild(lug)
    info.appendChild(inf)
    texto.appendChild(nombre)
    texto.appendChild(lugar)
    texto.appendChild(info)

    boton1.appendChild(btn1)
    boton2.appendChild(btn2)
    boton3.appendChild(btn3)
    boton4.appendChild(btn4)
    boton5.appendChild(btn5)
    botones.appendChild(boton1)
    botones.appendChild(boton2)
    botones.appendChild(boton3)
    botones.appendChild(boton4)
    botones.appendChild(boton5)

    contenedor.appendChild(texto)
    contenedor.appendChild(botones)

    return contenedor
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(crearNodo())
}

addCardButton.addEventListener('click', addCard)
