
//------------------------------------------------

function separarCifras(numeroInput) {
  return numeroInput.value.toString().split('').map(Number);
}

//------------------------------------------------

function encriptar(numero){
let cifraDiv=[];

for(var i=0;i<numero.length;i++){

  cifraDiv[i] = (numero[i]+7)%10;

}if(cifraDiv.length>3){
save1=cifraDiv[2];
cifraDiv[2]=cifraDiv[0];
cifraDiv[0]=save1;

save2=cifraDiv[3];
cifraDiv[3]=cifraDiv[1];
cifraDiv[1]=save2;


for(var i=0;i<cifraDiv.length;i++){
  var zona = document.getElementById('zona');
  zona.innerHTML = "su numero es encriptado " + cifraDiv;
 }
}else{
  var zona = document.getElementById('zona');
  zona.innerHTML = "su numero es invalido";
 }
}

//------------------------------------------------

function desEncriptar(numero){
  let cifraDiv=[];
  
  for(var i=0;i<numero.length;i++){
  
    cifraDiv[i] = numero[i] + 10 - 7 ;
    if(cifraDiv[i]>9){
      cifraDiv[i] = cifraDiv[i] - 10 ;
    }
  }if(cifraDiv.length>3){
 
  save1=cifraDiv[2];
  cifraDiv[2]=cifraDiv[0];
  cifraDiv[0]=save1;
  
  save2=cifraDiv[3];
  cifraDiv[3]=cifraDiv[1];
  cifraDiv[1]=save2;
  
  for(var i=0;i<cifraDiv.length;i++){
    var zona = document.getElementById('zona');
    zona.innerHTML = "su numero es desencriptado " + cifraDiv;
   }
   }else{
    var zona = document.getElementById('zona');
    zona.innerHTML = "su numero es invalido";
   }
  }

//------------------------------------------------




