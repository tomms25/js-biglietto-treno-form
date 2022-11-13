let buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {

 let inputEta = document.getElementById("fascia-eta");
 let eta = inputEta.value;
  console.log(eta);

 let inputNome = document.getElementById("nome-utente");
 let nomeUtente = inputNome.value;
  console.log(nomeUtente);


 let inputKm = document.getElementById("km");
 let percorrenza = parseInt(inputKm.value);
  console.log(percorrenza);

 let prezzoAlKilometro = 0.21;
 let prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
  console.log(prezzoBigliettoSenzaSconto);

 let offerta = "Tariffa Standard"

  //let eta = parseInt(prompt("Quanti anni hai ?"));
  //let prezzoAlKilometro = 0.21;
  //let prezzoBigliettoSenzaSconto = prezzoAlKilometro * percorrenza;
  //let scritto = "Il prezzo del biglietto è "
  //let euro = " Euro"
  // console.log(prezzoBigliettoSenzaSconto);
  // 2 Il prezzo del biglietto è definito in base ai km (0.21 € al km),
  // ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

  if (eta == "minorenne") {
   ((prezzoBigliettoSenzaSconto / 100) * 80);
   offerta = "Sconto Minorenne";
  } else if (eta == "over65") {
   ((prezzoBigliettoSenzaSconto / 100) * 60);
   offerta = "Sconto Maggiorenne";
  } else {
   (prezzoBigliettoSenzaSconto);
  }

 let carrozza = Math.floor(Math.random() * 9) +1;
 let cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;


  document.getElementById('nome-passegero').innerHTML = nomeUtente;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('costo-biglietto').innerHTML = prezzoBigliettoSenzaSconto.toFixed(2);
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('codice-cp').innerHTML = cp;

  var bigliettoDiv = document.getElementById('biglietto');
  bigliettoDiv.classList.remove('hidden');
  bigliettoDiv.classList.add('show');

 }

);


let buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener( 'click',
  function() {
    document.getElementById('nome-passegero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';


    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';
    
    var bigliettoDiv = document.getElementById('biglietto')
    bigliettoDiv.classList.remove('show');
    bigliettoDiv.classList.add('hidden');
  }
);