# ✍️ SOP Creazione Blog / Insights (Guida Rapida)

Questo documento traccia la procedura scientifica e un template standard per creare nuovi articoli che vengano digeriti perfettamente da Google, favorendone il ranking.

## La Procedura "1-2-3"

Quando vuoi pubblicare un nuovo contenuto, segui esattamente questi step:

1. **Ricerca del Titolo:** Scegli un titolo basato sui "sintomi" dell'azienda o su query esatte che un manager cercherebbe (es. "Azienda ferma a 5 Milioni").
2. **Copia il Template:** Prendi lo snippet di codice HTML sottostante, duplicalo creando un nuovo file nella cartella `public_html/insights/NOME-ARTICOLO.html`. Non usare spazi o maiuscole nel nome del file.
3. **Incolla il Testo:** Sostituisci i placeholder con il tuo testo formattato, inserendo bene le gerarchie di importanza (Usa prima `<h2>` per capitoli, poi `<h3>` per sotto-capitoli).
4. **Link Interni:** Aggiungi almeno un link a una pagina istituzionale o un'altra pagina del blog all'interno del copy per permettere l'espansione della link equity.
5. **SEO Check:** Compila scrupolosamente Metatitle, MetaDescription.

---

## 💻 Il Template HTML Esatto (Copia-Incolla)

Utilizza questo scheletro per creare un nuovo post. Mantiene il design premium del sito, formatta in automatico il testo con ampi spazi bianchi (whitespace) e chiude con una potente Call To Action per scaricare l'executive brief o fissare un audit.

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INSERISCI TITOLO ARTICOLO QUI | Insights Sintelops</title>
    <meta name="description" content="INSERISCI META DESCRIPTION ATTRATTIVA (Max 155 caratteri)">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Plus+Jakarta+Sans:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css">
</head>
<body class="insight-page">

    <!-- HEADER: Sostituisci la profondità ../ a seconda di dove piazzi il file se necessario -->
    <header class="main-header">
        <div class="logo">
            <a href="../index.html">Sintelops<span class="gold-dot">.</span></a>
        </div>
        <nav class="main-nav">
            <a href="../chi-siamo.html">Boutique</a>
            <a href="../servizi.html">Servizi</a>
            <a href="index.html" class="active">Insights</a>
            <a href="../contatti.html">Contatti</a>
        </nav>
        <a href="../diagnosi.html" class="cta-button outline">Richiedi Diagnosi</a>
    </header>

    <!-- CONTENT WRAPPER -->
    <main class="insight-content">
        <article class="article-wrapper">
            
            <!-- HEADER ARTICOLO -->
            <header class="article-header">
                <span class="category-tag">Operations</span>
                <h1 class="article-title">TITOLO DELL'ARTICOLO H1: COLPISCI IL DOLORE DEL LETTORE</h1>
                <p class="article-meta">Pubblicato il: <strong>DATA DI OGGI</strong> | Tempo di Lettura: <strong>4 min</strong></p>
            </header>

            <!-- CORPO TESTO -->
            <div class="article-body">
                <p class="lead-paragraph">Il primo paragrafo deve essere incisivo. Deve riassumere il problema e far capire immediatamente all'imprenditore o al manager perché leggere questo testo vale il suo tempo.</p>
                
                <h2>Il Primo Riconoscimento del Problema</h2>
                <p>Inserisci qui i tuoi paragrafi argomentando. Evita muri di testo. Un paragrafo non dovrebbe mai superare le 4-5 righe di testo per risultare arioso e leggibile, in stile Silicon Valley.</p>
                
                <blockquote>
                    "Evidenzia in questo spazio una citazione importante o un concetto drastico sul quale vuoi trasmettere autorevolezza."
                </blockquote>

                <h3>L'approccio Analitico</h3>
                <p>Se devi fare elenchi esplicativi, usa i tag lista:</p>
                <ul>
                    <li>Processo aziendale in rottura strutturale</li>
                    <li>Mancanza di visibilità dei KPI in tempo reale</li>
                    <li>Dependence dai fondatori (Micro-Management)</li>
                </ul>

                <h2>La Soluzione</h2>
                <p>Chiudi l'articolo portando alla soluzione in modo logico e referenziato. Usa anchor text per far viaggiare l'utente su altre pagine del sito, ad esempio menzionando i <a href="../servizi.html" class="inline-link">nostri processi custom</a> per sbloccare la situazione.</p>
            </div>

        </article>

        <!-- LEAD GEN BLOCK (C-LEVEL BOX) -->
        <section class="inline-cta-box">
            <div class="cta-content">
                <h2>Riconosci questi sintomi nella tua struttura?</h2>
                <p>La teoria senza azione prolunga solo i cicli di stallo. Compila l'Executive Briefing per avere dati concreti con cui isolare le perdite e ottimizzare l'azienda.</p>
                <div class="cta-actions">
                    <a href="../executive-brief.html" class="cta-button primary">Scarica Executive Brief</a>
                    <a href="../diagnosi.html" class="cta-button outline">Richiedi Diagnosi Immediata</a>
                </div>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="main-footer">
        <div class="footer-bottom">
            <p>&copy; 2026 Sintelops. Architettura e Management Consulting.</p>
        </div>
    </footer>
</body>
</html>
```
