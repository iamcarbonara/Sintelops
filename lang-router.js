// lang-router.js
// Eseguito staticamente nell'header per evitare sfarfallii visivi (FOUC).

(function() {
  // Controlliamo se l'utente ha forzato una lingua esplicitamente in passato
  var userPref = localStorage.getItem('preferredLang');
  
  if (userPref) {
    // Se ha scelto l'inglese ma attualmente la path è /it/, questo blocco NON si attiva
    // perché questo script è caricato ESCLUSIVAMENTE sulla root in inglese.
    
    // Se l'utente atterra sulla root e ha preferenza 'it', lo forziamo verso l'italiano
    if (userPref === 'it') {
      window.location.replace('/it/');
    }
  } else {
    // Nessuna preferenza salvata -> Controlliamo la lingua nativa del browser
    var browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.toLowerCase().startsWith('it')) {
      // Impostiamo tacitamente la sua preferenza e reindirizziamo
      localStorage.setItem('preferredLang', 'it');
      window.location.replace('/it/');
    }
  }
})();
