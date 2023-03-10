const choix = document.querySelector('.tailleDuPW')
const passw = document.querySelector('.pw')
const upper = document.getElementById('maji')
const lower = document.getElementById('mini')
const nombre = document.getElementById('nmbre')
const spec = document.getElementById('special')
const generatr = document.querySelector('.generButn')
const notif = document.querySelector('.notif')
const copy = document.querySelector('.copy')
const copied = document.querySelector('.copied')




// copy.style.visibility = 'hidden'
const getFunction ={
    Min: getRandomLower,
    Maj: getRandomUpper,
    Nbr:getRandomNumber,
    Chr:getRandomCharact
}

generatr.addEventListener("click",()=>{
    const taillePW = +choix.value
    const isUpper = upper.checked
    const isLower = lower.checked
    const isNum = nombre.checked
    const isSymbol = spec.checked
    const comp = isLower+isUpper+isNum+isSymbol

   

   passw.innerText= pwGener(isUpper,isLower,isNum,isSymbol,taillePW)
   
})



function pwGener(Maj,Min,Nbr,Chr,length){
    const compteur = Maj + Min+ Nbr+Chr
    if(length > 20 || length <1 || length <compteur ){
        notif.classList.add('notifUP')
        return ''
    }
    let PW = ''
    
    const Tous = [{Maj},{Min},{Nbr},{Chr}].filter(elem => Object.values(elem)[0]);
    
    


    if (compteur===0){
        return ''
    }
    for(let i=0;i<length;i+=compteur){
        Tous.forEach(type => {
            const nomFonct = Object.keys(type)[0]
            console.log('nom de la fonction', nomFonct)
            PW+=getFunction[nomFonct]()

        })
        

    }
    return PW

    //const eachOf = Math.floor(length/4)
   
  

    // for(let i=0;i<5;i++){
    //     const U = getRandomUpper()
    //     const L = getRandomLower()
    //     const N = getRandomNumber()
    //     const C = getRandomCharact()
    //     Tab = [U,L,N,C]
    //     console.log(Tab) 
    // }

}
function Delai(element,x){
    setTimeout(() => {
        element.style.visibility = 'hidden';
        
         }, x);
}

passw.addEventListener('mouseover',()=>{
    console.log(passw.textContent)
    if(passw.textContent.trim()!==''){copy.style.visibility='visible'
     Delai(copy,2000)
     
      copy.addEventListener('click',()=>{
        copied.style.visibility='visible'
        Delai(copied,1000)
        
      })
     
    }
    
    
})




function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
   
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
   
}


function getRandomNumber(){
    return Math.floor(Math.random()*10)
   
}
function getRandomCharact(){
 return String.fromCharCode(Math.floor(Math.random()*15)+33)
   
}
//  taille 15
//  upper lower char
// chine=''
//  for 15{
//  math ram *2
//  0 2 1 1 2 1

//  var = tab[0]

// si var =  upper 
// chaine+=
//  }