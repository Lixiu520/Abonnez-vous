console.log('connecté!');
console.log("Hello!");
const icone=document.querySelector('i');
console.log(icone);
icone.addEventListener('click',function(){
    console.log('icone cliquee!');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
})
const bouton=document.querySelector('.btn');
bouton.addEventListener('click',function(){
    bouton.classList.toggle('abonne');
    console.log('bouton clique');
    if(bouton.innerText==='Abonné'){//innerText fixe la nouvelle valeurm ne ous laisse aucune solution pour revenir à l'etat initial
        bouton.innerText='Abonnez-vous!'
    }else{
        bouton.innerText='Abonné';
    };
    
});
