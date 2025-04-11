function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = document.getElementById('res')
  if(fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')

  }  else {
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
  var gênero = ''
  var img = document.createElement('img')
  img.setAttribute ('id','foto')
  img.style.width = '300px';
  img.style.height = '300px';
  img.style.borderRadius = '50%';


  if(fsex[0].checked){
    gênero = 'Homem'
    if(idade >=0 && idade <10){
       //criança
    img.setAttribute('src','img/homen criança.jpg')
    }else if(idade <21) {
    //Joven
    img.setAttribute('src','img/homen joven.jpg')
    }else if (idade < 50){
        //adulto
        img.setAttribute('src','img/homen adulto.jpg')
    }else{
        //idoso
        img.setAttribute('src','img/homen idoso.jpg')
    }

  }else if (fsex[1].checked){
     gênero = 'Mulher'
     if(idade >=0 && idade <10){
        //criança
        img.setAttribute('src','img/mulher criança.jpg')
     }else if(idade <21) {
     //Joven
     img.setAttribute('src','img/mulher joven.jpg')
     }else if (idade < 50){
         //adulto
         img.setAttribute('src','img/mulher adulta.jpg')
     }else{
         //idoso
         img.setAttribute('src','img/mulher idosa.jpg')
     }
 

  } 
  
     res.style.textAlign ="center"
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img)

}
}