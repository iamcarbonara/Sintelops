# ⚙️ Automazioni C-Level

Sintelops non vende servizi a basso costo, pertanto l'approccio alla generazione dei lead deve essere *chirurgico*, silenzioso e di altissimo valore (White-Glove approach).

Questa documentazione definisce come vanno gestite tecnicamente le lead.

## Entry Points (I Punti d'Ingresso)

Attualmente il sito offre due modalità principali di contatto:
1. **L'hard offer**: *"Richiedi Diagnosi Operativa"* -> Genera una Call Immediata.
2. **La soft offer**: *"Download Executive Brief"* -> Genera Nurturing a Lungo Termine.

## Flusso 1: Executive Briefing (Soft Lead)

**Trigger**: L'utente compila il form nella pagina `executive-brief.html`.
**Tag CRM Assegnato**: `Lead_Source: Executive_Brief`, `Status: Cold_C_Level`

### Delineazione del Workflow:
1. **Minuto 1**: Email immediata. Oggetto: *"Il suo Executive Brief: [Titolo]"*. Costruita con testo semplice, pulito, da interfaccia "CEO a CEO". Niente banner grafici stile e-commerce. Contiene il link diretto al PDF.
2. **Giorno 3 (Follow up)**: Email di valore. *"Ho notato un pattern tra le aziende che scaricano il brief..."*. Nessuna vendita. Offerta di perspective.
3. **Giorno 7 (Invito Diagnosi)**: L'invito ufficiale. *"Se la sua struttura sta incrociando i colli di bottiglia descritti a pagina 4, le propongo una Diagnosi Operativa non vincolante di 30 minuti."*

## Flusso 2: Richiesta Diagnosi (Hot Lead)

**Trigger**: L'utente compila il form in `diagnosi.html`.
**Tag CRM Assegnato**: `Lead_Source: Diagnosi_Operativa`, `Status: Hot_Prospect`

### Delineazione del Workflow:
1. **Minuto 1**: Email transazionale. Oggetto: *"La sua richiesta di Diagnosi Sintelops"*. La mail serve per inviare un link a un calendario (es. Calendly) riservato esclusivamente ai prospect qualificati.
2. **Automazione Interna (Notifica Team)**: Slack / Email immediata al team per far partire uno "Scouting LinkedIn" sull'azienda richiedente prima della call prenotata. 
3. **Pre-Call (24h prima)**: Email automatica di reminder che linka una risorsa privata o uno degli *Insights* più potenti del sito Sintelops per "inquadrare" psicologicamente il lead prime della chiamata di vendita.

## Regole Tecniche di Implementazione
- Evitare le email `noreply@sintelops.com`. Utilizzare sempre alias reali es: `nome.cognome@sintelops.com` oppure `partners@sintelops.com`.
- Tracciare SEMPRE le fonti utente sfruttando parametri UTM integrati con i campi hidden nei form contatti del codice HTML.
