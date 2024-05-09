
const buttonInviaEl= document.querySelector("div > button");

buttonInviaEl.addEventListener("click" , function() {

    const kmUtente=parseFloat(document.querySelector("div > input").value);

    const etaUtente=parseInt(document.getElementById("richiesta-eta").value);

    let costoUtente=0.267113;

    if (etaUtente < 21){
        let prezzo=((costoUtente - costoUtente / 100 * 24.552) * kmUtente).toFixed(2); 
     
        document.getElementById("km").innerHTML= "km percorsi dall\'utente: " +  kmUtente;
    
        document.getElementById("eta").innerHTML= "età del passeggero: " + etaUtente;
    
        document.getElementById("costo").innerHTML= "costo del biglietto: " + prezzo;
    
    }else if (etaUtente > 63 ){
        prezzo=((costoUtente - costoUtente / 100 * 33.893) * kmUtente).toFixed(2); 
    
        document.getElementById("km").innerHTML= "km percorsi dall\'utente: " +  kmUtente;
    
        document.getElementById("eta").innerHTML= "età del passeggero: " + etaUtente;
    
        document.getElementById("costo").innerHTML= "costo del biglietto: " + prezzo;
    
    }else {
        prezzo =(kmUtente * costoUtente).toFixed(2); 
    
        document.getElementById("km").innerHTML= "km percorsi dall\'utente: " +  kmUtente;
    
        document.getElementById("eta").innerHTML= "età del passeggero: " + etaUtente;
    
        document.getElementById("costo").innerHTML= "costo del biglietto: " + prezzo;
    
    }


})