//posicionado na index

function createJSON(){
  let styleObj = {
    background: 'PaleGoldenrod',
    fontSize: '1.1em', 
    fontFamily: 'Montserrat'
  }
  let styleJson = JSON.stringify(styleObj);
  localStorage.setItem('style', styleJson);                     
  console.log("Instanciado com sucesso");
}

function startStorage(){
//Cria o starge se ele não existe na memória.
  if(localStorage.getItem('style') === null || localStorage.getItem('style') === undefined){
    createJSON();
    console.log("started")
  }
  else{
    console.log("Once started")
  }
}


function mudaBackground() {

let obj = JSON.parse(localStorage.getItem('style'));
console.log(obj)

// operário ? siggnifica se existir
let backgroundValue = document.getElementById("background")?.value;
if(backgroundValue == 'PaleGoldenrod'){
  obj.background = 'PaleGoldenrod';            
}
else if(backgroundValue == "DarkKhaki"){ 
  obj.background = 'DarkKhaki';    
}
else if(backgroundValue == "Honeydew"){
  obj.background = 'Honeydew';
}
console.log(obj);

let objText = JSON.stringify(obj);
console.log(objText)

localStorage.setItem('style', objText)

document.body.style.background = obj.background;
}


function mudaFonte() {
  let obj = JSON.parse(localStorage.getItem('style'));
  console.log(obj)

  let fonteValue = document.getElementById("fonte")?.value;

if(fonteValue == 'Montserrat'){
  obj.fontFamily = 'Montserrat';
}
else if(fonteValue == 'Arial'){
  obj.fontFamily = 'Arial';
}
else if(fonteValue == 'Rajdhani'){
  obj.fontFamily = 'Rajdhani';
}
console.log(obj);

let objText = JSON.stringify(obj);
console.log(objText)
localStorage.setItem('style', objText)

document.body.style.fontFamily = obj.fontFamily;
}


function mudaTamanho() {

  let obj = JSON.parse(localStorage.getItem('style'));
  console.log(obj)

  let tamValue = document.getElementById("tamanho")?.value;

if(tamValue == "pequeno"){
  obj.fontSize = "1.1em";
}
else if(tamValue == "medio"){
  obj.fontSize = "1.4em";
}
else if(tamValue == "grande"){
  obj.fontSize = "1.7em";
}
console.log(obj);
let objText = JSON.stringify(obj);
console.log(objText)
localStorage.setItem('style', objText)

document.body.style.fontSize = obj.fontSize;
}

function allPages(){
mudaBackground()
mudaFonte()
mudaTamanho()
}

//Utilização da função
startStorage();
