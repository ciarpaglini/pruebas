"use strict";

document.querySelector('#nuevo').innerHTML += "<div class='row'>"
+"<div id='img' class='col-md-4'><img id='imagen' class='img img-fluid' src='#'></div>" //imagen insertada desde documento
+"<div id='img' class='col-md-4'><img id='imagen' class='img img-fluid' src='https://picsum.photos/200/300'></div>"
+"<div id='img' class='col-md-4'><img id='imagen' class='img img-fluid' src='https://picsum.photos/200/300'></div>"
+"</div>"

document.querySelector('#nuevo div div img').src='https://picsum.photos/200/300'; //insercion de imagen en el innerHTML

let $miNuevo = document.querySelector('#miNuevo');

let miDiv = document.createElement('div');
miDiv.classList.add('row');

let miCol1 = document.createElement('div');
miCol1.classList.add('col-md-6');

let miCol2 = document.createElement('div');
miCol2.classList.add('col-md-6');

let img1 = document.createElement('img');
img1.classList.add('img', 'img-fluid');
img1.setAttribute('src', 'https://picsum.photos/200/300');

let img2 = document.createElement('img');
img2.classList.add('img', 'img-fluid');
img2.setAttribute('src', 'https://picsum.photos/200/300');

miCol1.appendChild(img1);
miCol2.appendChild(img2);
miDiv.appendChild(miCol1);
miDiv.appendChild(miCol2);
$miNuevo.appendChild(miDiv);


/*==============================uno==================================*/
document.getElementById("demo").innerHTML = "Paragraph changed!";

/*===============================dos=================================*/
//no entra si esta anidado 
document.getElementById("image").src="https://picsum.photos/200/300";

/*================================tres================================*/

//document.getElementById("demo image").src="https://picsum.photos/200/300"; //no funciona

// entra si esta anidado buscando primero el id luego las etiquetas html
document.querySelector('#demo img').src="https://picsum.photos/200/300"; //funciona

/*===============================cuatro================================*/

document.getElementById("demo").style.color = "blue"; //funciona

document.querySelector('#demo').style.color = "red" //funciona

/*===============================cinco================================*/

function myMove() {
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 550) {
        clearInterval(id);
        document.getElementById("bot").style.display = "block"; //añadido funcinal
      } else {
        document.getElementById("bot").style.display = "none"; //añadido funcional
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }

/*===============================seis================================*/

function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }


function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
function mUp(obj) {
    obj.style.backgroundColor="#cd43";
    obj.innerHTML="Thank You";
  }

/*===============================siete================================*/

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

/*===============================ocho================================*/


var para = document.createElement("p");
var node = document.createTextNode("This is new dos.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para,child);

/*var elmnt = document.getElementById("p1"); //remover por elemento funciona
elmnt.remove();*/ 

/*var parent = document.getElementById("div1"); //remover por child funciona 
var child = document.getElementById("p2");
parent.removeChild(child);*/

/*===============================nueve================================*/

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
 }
var i=1;
for(i ; i<=100 ; i++){
  if(i%3 == 0 && i%5 == 0){
    console.log('BizzFizz');
  }else{
  if(i%3 == 0){
    console.log('Fizz');
  }else if(i%5 == 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}
  
}
/*===============================diez================================*/

let f;
//closure
if(true){
  let y = 1;
  f = () => {
    console.log("el valore de y es:"+y);
  }
}
console.dir(f);

f();

/*===============================once================================*/
let g = () => {
  let z=1;
  return () =>{
    console.log(z);
  }
}
console.dir(g());

/*===============================doce================================*/
for(let x = 0; x<3; x++){
  const m = () => {
    console.log(x);
  }
  m();
}
/*===============================trece================================*/
for(let v = 0; v<3; v++){
  setTimeout( () => {
    console.log(v);
  },5000);
}
/*===============================catorce================================*/

function search(array){

  if(array.find(element => element = el)){
      return True;
  }else{
      return False;
  }
}

const arrays = ['arr', 'el'];

function search(arrays){
var index = arrays.findIndex(array => array == 'el');

if(index == 1){
 console.log('true');
}else{
  console.log('false');
}
}
search(arrays);

/*===============================Quitar y poner una class con randon tiempo ================================*/

      /*function doSomething() {
                var element = document.querySelector("#random");
                if (element.classList.contains('neon')) {
                    
                    var element = document.getElementById("random");
                    element.classList.remove('neon');
                } else {
                    
                    var element = document.getElementById("random");
                    element.classList.add("neon");
                }
              }

              (function loop() {
                  var rand = Math.round(Math.random() * (5000 - 500)) + 500;
                  setTimeout(function() {
                          doSomething();
                          loop();  
                  }, rand);
              }());*/

