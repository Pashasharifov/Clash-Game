var oyuncununAdi=document.querySelector('.oyuncunun-adi')
var guc=document.querySelector('.guc')
var can=document.querySelector('.can')
var leqeb=document.querySelector('.leqeb')

var box1=document.querySelector('.box-1')
var box2=document.querySelector('.box-2')
var box3=document.querySelector('.box-3')
var box4=document.querySelector('.box-4')

var oyuncular=document.querySelector('.oyuncular')
var dusmenler=document.querySelector('.dusmenler')
var dusmeninAdi=document.querySelector('.dusmen-adi')
var ucuncuDiv=document.querySelector('.ucuncu-div')
var birinciSecilen=null
var ikinciSecilen=null
var box1BirinciDivinIcindedir=false
var box2BirinciDivinIcindedir=false
var box3BirinciDivinIcindedir=false
var box4BirinciDivinIcindedir=false

var dalas =document.querySelector('.dalas')
var container =document.querySelector('.container')
var war =document.querySelector('.war')
var heroOne=document.querySelector('.hero-1')
var heroTwo=document.querySelector('.hero-2')
var spec1=document.querySelector('.spec-1')
var spec2=document.querySelector('.spec-2')
var spec3=document.querySelector('.spec-3')
var spec4=document.querySelector('.spec-4')

var cye=document.querySelector('.cye')

var goToBack=document.querySelector('.goToBack')



box1.onclick=function(){
    if(birinciSecilen==null){
        if(box1BirinciDivinIcindedir==false){
            box1BirinciDivinIcindedir=true
            birinciSecilen=box1
            guc.innerText=`Guc:${this.dataset.power}`
        can.innerText=` Can:${this.dataset.health}`
        leqeb.innerText=`Leqeb:${this.dataset.nickname}`
        oyuncununAdi.innerText=`Sizin secdiyiniz oyuncu: ${this.dataset.name}`
        cye.style.display='block'
        dusmenler.append(box2)
        dusmenler.append(box3)
        dusmenler.append(box4)
        }
       
    }
    else if(ikinciSecilen==null){
        if(box1BirinciDivinIcindedir==false){
             ikinciSecilen=box1
        ucuncuDiv.append(box1)
        dusmeninAdi.innerText='Your enemy is '+ this.dataset.name
        dalas.style.display='block'
        }
       
    }
    
}
box2.onclick=function(){
    if(birinciSecilen==null){
        if(box2BirinciDivinIcindedir==false){
            box2BirinciDivinIcindedir=true
             birinciSecilen=box2
         guc.innerText=`Guc:${this.dataset.power}`
    can.innerText=` Can:${this.dataset.health}`
    leqeb.innerText=`Leqeb:${this.dataset.nickname}`
    oyuncununAdi.innerText=`Sizin secdiyiniz oyuncu: ${this.dataset.name}`
    cye.style.display='block'
    dusmenler.append(box1)
    dusmenler.append(box3)
    dusmenler.append(box4)
        }
       
    }
    else if(ikinciSecilen==null){
        if(box2BirinciDivinIcindedir==false){
             ikinciSecilen=box2
        ucuncuDiv.append(box2)
        dusmeninAdi.innerText='Your enemy is '+ this.dataset.name
        dalas.style.display='block'
        
        }
       
    }
   
}
box3.onclick=function(){ 
    if(birinciSecilen==null){
        if(box3BirinciDivinIcindedir==false){
            box3BirinciDivinIcindedir=true
              birinciSecilen=box3
         guc.innerText=`Guc:${this.dataset.power}`
    can.innerText=` Can:${this.dataset.health}`
    leqeb.innerText=`Leqeb:${this.dataset.nickname}`
    oyuncununAdi.innerText=`Sizin secdiyiniz oyuncu: ${this.dataset.name}`
    cye.style.display='block'
    dusmenler.append(box2)
    dusmenler.append(box1)
    dusmenler.append(box4)
        }
      
    }
    else if(ikinciSecilen==null){
        if(box3BirinciDivinIcindedir==false){
             ikinciSecilen=box3
        ucuncuDiv.append(box3)
        dusmeninAdi.innerText='Your enemy is '+ this.dataset.name
        dalas.style.display='block'
        }
       
    }
   
}
box4.onclick=function(){
    if(birinciSecilen==null){
        if(box4BirinciDivinIcindedir==false){
            box4BirinciDivinIcindedir=true
               birinciSecilen=box4
         guc.innerText=`Guc:${this.dataset.power}`
    can.innerText=` Can:${this.dataset.health}`
    leqeb.innerText=`Leqeb:${this.dataset.nickname}`
    oyuncununAdi.innerText=`Sizin secdiyiniz oyuncu: ${this.dataset.name}`
    cye.style.display='block'
    dusmenler.append(box2)
    dusmenler.append(box3)
    dusmenler.append(box1)
        }
     
    }
    else if(ikinciSecilen==null){
        if(box4BirinciDivinIcindedir==false){
             ikinciSecilen=box4
        ucuncuDiv.append(box4)
        dusmeninAdi.innerText='Your enemy is '+ this.dataset.name
        dalas.style.display='block'
        }
       
    }
   
}
dalas.onclick=function(){
    container.style.display='none'
    war.style.display='block'
    heroOne.append(birinciSecilen)
    heroTwo.append(ikinciSecilen)
    goToBack.style.display='none'
   

   
    spec1.innerText='Power: '+birinciSecilen.dataset.power
    spec2.innerText='Health: '+birinciSecilen.dataset.health

    spec3.innerText='Power: '+ikinciSecilen.dataset.power
    spec4.innerText='Health: '+ikinciSecilen.dataset.health
   
}
var shootToEnemy=document.querySelector('.duyme-1')
var defendYourself=document.querySelector('.duyme-2')
shootToEnemy.onclick=function(){
    ikinciSecilen.dataset.health=parseInt(ikinciSecilen.dataset.health)-parseInt(birinciSecilen.dataset.power)
    spec4.innerText='Health : '+ ikinciSecilen.dataset.health 
    if(parseInt(ikinciSecilen.dataset.health)<0){
        alert('Winner Winner Chicken Dinner')
        goToBack.style.display='block'

    }
}
defendYourself.onclick=function(){
    birinciSecilen.dataset.health=parseInt(birinciSecilen.dataset.health)-parseInt(ikinciSecilen.dataset.power)
    spec2.innerText='Health : '+ birinciSecilen.dataset.health
    
if(parseInt(birinciSecilen.dataset.health)<0){
    alert('Nice Try')
    goToBack.style.display='block'
}
}

goToBack.onclick=function(){
    container.style.display='block'
    war.style.display='none'
    oyuncular.append(box1)
    oyuncular.append(box2)
    oyuncular.append(box3)
    oyuncular.append(box4)
    dusmeninAdi.innerText=''
    guc.innerText=``
    can.innerText=``
    leqeb.innerText=``
    oyuncununAdi.innerText=``
    birinciSecilen=null
    ikinciSecilen=null
    box1BirinciDivinIcindedir=false
    box2BirinciDivinIcindedir=false
    box3BirinciDivinIcindedir=false
    box4BirinciDivinIcindedir=false
    cye.style.display='none'
    box1.dataset.power='90'
    box1.dataset.health='205'
    box2.dataset.power='127'
    box2.dataset.health='190'
    box3.dataset.power='62'
    box3.dataset.health='500'
    box4.dataset.power='200'
    box4.dataset.health='195'
    dalas.style.display='none'
    
}

