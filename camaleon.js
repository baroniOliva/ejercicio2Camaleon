const cambioBTN = document.querySelector("button");
const cambioFondo =() => {
    const codigoColor = Math.floor(Math.random()* 0xffffff).toString(16);
    
    document.body.style.background = `#${codigoColor}`;
    console.log(codigoColor)
    
   document.getElementById("color").innerHTML = `El color de fondo es # ${codigoColor}` ;
}
cambioBTN.addEventListener('click', cambioFondo);


