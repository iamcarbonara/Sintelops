# 🌍 Internazionalizzazione (Lancio Sito Inglese)

Il piano prevede l'ingresso sul mercato globale. Per posizionarci come "Boutique Internazionale", non basterà un plugin di traduzione automatica. Dovremo usare traduzioni umane di altissimo calibro (C-Level English) e un'infrastruttura tecnica corretta.

## Architettura del Sito (Subfolder strategy)
Utilizzeremo la strategia delle cartelle secondarie (`/en/`), in quanto permette al dominio madre di consolidare tutto il suo Domain Authority. 

La struttura diventerà:
- Italiano (IT): `www.sintelops.com/`
- Inglese (EN): `www.sintelops.com/en/`

## Implementazione Hreflang (FONDAMENTALE)
Per evitare che Google penalizzi il dominio per contenuti duplicati e per fargli capire quale lingua mostrare all'utente in base alla sua country, **OGNI SINGOLA PAGINA** dovrà contenere i tag `hreflang` nel tag `<head>`.

**Esempio di codice da implementare nel tag `<head>` della Home Page ITA:**
```html
<link rel="alternate" href="https://www.sintelops.com/" hreflang="it-IT" />
<link rel="alternate" href="https://www.sintelops.com/en/" hreflang="en-GB" />
<link rel="alternate" href="https://www.sintelops.com/" hreflang="x-default" />
```

## Checklist Operativa di Lancio:
1. [ ] **Clonazione Cartella:** Creare una cartella chiamata `en` all'interno della directory `public_html`.
2. [ ] **Traduzione URL Slugs:** I file all'interno di `/en/` devono avere il nome in inglese. 
   *(es. `chi-siamo.html` diventerà `/en/about-us.html`)*
3. [ ] **Cross-linking:** Il tag di navigazione della lingua (le bandierine IT | EN nel menu) devono puntare esattamente all'equivalente di quella pagina, non genericamente alla homepage.
4. [ ] **Asset e Form:** Tradurre i placeholder e i messaggi di conferma nei form contatti. Collegare i form a mailing list/tag CRM inglesi per non innescare automazioni in italiano.
