# Programmazione Distribuita — Indice ragionato delle lezioni e riferimenti ai libri

> **Scopo.** Questo documento offre una mappa degli argomenti effettivamente presentati nelle slide utilizzate durante il corso. Le descrizioni identificano contenuti, metodi ed esempi senza trasformarsi in appunti o sostituire le lezioni. Ogni voce contiene il riferimento più pertinente verificabile nei due libri indicati. Il documento è stato generato utilizzando ChatGPT-6 al 13/11/2026 e il seguente prompt ed allegando i due libri in formato PDF e le slide delle lezioni in formato PDF, ed i riferimenti presenti nel sito del corso. Il prompt è il seguente:

```Dammi un markdown dove per ogni lezione (slide allegata) viene fornita una lista di argomenti trattati in modo abbastanza approfondito cercando di summarizare il contenuto come una lista di elementi che non vadono a sostituire le slide oppure ad essere appunti ma diano una chiara visione degli argomenti trattati. Inoltre per ogni singolo argomento devi inserire il riferimento preciso sezione, sottosezione, pg del libro corrispondente tra i due libri allegati.```

⚠️ **Nota:** i riferimenti ai libri sono stati estratti dai PDF forniti e possono contenere errori di interpretazione. Si consiglia di verificare sempre le pagine indicate nei libri per confermare la correttezza dei riferimenti.

## Come leggere i riferimenti

- **[S]** Vittorio Scarano, *Programmazione con Oggetti Distribuiti: Java RMI*, II ed., marzo 2010. I riferimenti `§ 1.2.3`, ecc. seguono la numerazione **esplicita** dell'indice del volume.
- **[G]** Antonio Gonçalves, *Beginning Java EE 7*, Apress. Il libro organizza le sottosezioni tramite **titoli** (non numeri); riporto pertanto **capitolo → sezione → sottosezione**, senza inventare numerazioni inesistenti.
- **Pagine:** tutti i numeri rinviano alle **pagine stampate del libro**, non al numero progressivo delle pagine nel visualizzatore PDF. Nel PDF di Scarano, una pagina del file riproduce generalmente **due pagine cartacee**.
- **[O]** Oracle, *The Java Tutorials* → «Essential Java Classes» → «Concurrency»; risorsa indicata dal [programma del corso](https://spagnuolocarmine.github.io/programmazione-distribuita/index.html), con link alle singole sezioni per concorrenza e sincronizzazione.
- **[C]** Materiale didattico online del [corso di Programmazione Distribuita](https://spagnuolocarmine.github.io/programmazione-distribuita/index.html): esercitazioni e schede tematiche, richiamate tramite il titolo della pagina, la sezione e un link diretto.
- **Pagine web:** per i materiali online sono riportati il **titolo esatto della sezione o dell’esercizio** e l’URL della pagina, poiché non esiste una paginazione stampata da indicare.
- Le lezioni sono identificate dal **numero iniziale del nome del file allegato**: alcuni titoli interni alle presentazioni riportano numerazioni diverse (ad esempio i laboratori e le slide JPA). Non è presente una slide con prefisso `10` tra gli allegati di questa richiesta.

## Parte I — Fondamenti dei sistemi distribuiti, concorrenza, socket e RMI

### Lezione 1 — Introduzione ai sistemi distribuiti

*Slide: `1.PD-01-Introduzione.pdf`*

1. **Che cos'è un sistema distribuito e perché viene realizzato.** Presenza di più componenti elaborative connesse, condivisione di risorse e servizi, distribuzione fisica dell'elaborazione e motivazioni applicative rispetto a una soluzione centralizzata. **Rif.:** [S], cap. 1, § 1.1 «I sistemi distribuiti», pp. 2–3.
2. **Caratteristiche identificative di un sistema distribuito.** Discussione delle proprietà che distinguono distribuzione, autonomia dei nodi, interazione tramite comunicazione e gestione dell'eterogeneità. **Rif.:** [S], cap. 1, § 1.2.1 «Le caratteristiche di un sistema distribuito», pp. 4–5.
3. **Esigenze di interoperabilità ed evoluzione.** Importanza di far cooperare componenti eterogenei e di mantenere il sistema modificabile nel tempo; introduzione dell'idea di middleware come supporto comune. **Rif.:** [S], cap. 1, §§ 1.2.1–1.2.2, pp. 4–7; § 1.3 «Il Middleware ad Oggetti Distribuiti», pp. 13–15.
4. **Requisiti non funzionali e qualità del servizio.** Scalabilità, affidabilità, disponibilità, prestazioni, sicurezza e mantenibilità come criteri che guidano la progettazione oltre al semplice risultato funzionale. **Rif.:** [S], cap. 1, § 1.2.2 «I requisiti non funzionali di un sistema distribuito», pp. 5–7.
5. **Dal problema architetturale alla nozione di trasparenza.** Collegamento tra complessità della distribuzione e obiettivo di non esporre all'applicazione i dettagli della collocazione e dell'interazione fra componenti. **Rif.:** [S], cap. 1, § 1.2.3 «La trasparenza di un sistema distribuito», pp. 7–10.

### Lezione 2 — Open Distributed Processing Reference Model

*Slide: `2.PD-02-OpenDistributedProcessing.pdf`*

1. **Scopo di un modello di riferimento.** Introduzione ai modelli concettuali usati per descrivere sistemi complessi, individuare responsabilità e confrontare architetture distribuite. **Rif.:** [S], cap. 1, § 1.2 «Un modello di riferimento: Open Distributed Processing», pp. 3–4.
2. **Modello ODP e proprietà fondamentali.** Inquadramento dell'Open Distributed Processing come riferimento per ragionare su sistemi aperti, eterogenei e interoperabili. **Rif.:** [S], cap. 1, §§ 1.2–1.2.1, pp. 3–5.
3. **Trasparenza della distribuzione.** Concetto, finalità e forme della trasparenza: quali aspetti dell'accesso remoto o della gestione del sistema possono essere nascosti a utenti e applicazioni. **Rif.:** [S], cap. 1, § 1.2.3 «La trasparenza di un sistema distribuito», pp. 7–10.
4. **Viewpoint e separazione delle preoccupazioni.** I diversi punti di vista con cui descrivere un sistema ODP, distinti per interessi progettuali e livelli di astrazione. **Rif.:** [S], cap. 1, § 1.2.4 «I diversi punti di vista (viewpoints) per un sistema distribuito», pp. 10–13.
5. **Motivazioni del middleware a oggetti distribuiti.** Riduzione dell'accoppiamento tra applicazioni e infrastruttura, astrazione della comunicazione e esposizione di servizi remoti sotto forma di interfacce a oggetti. **Rif.:** [S], cap. 1, § 1.3 «Il Middleware ad Oggetti Distribuiti», pp. 13–15.
6. **Dalle Remote Procedure Call ai middleware a oggetti.** Meccanismo RPC, passaggio dall'invocazione di procedure remote all'invocazione di metodi di oggetti distribuiti e differenze di impostazione. **Rif.:** [S], cap. 1, § 1.3.1 «Il progenitore: Remote Procedure Calls (RPC)», p. 15; § 1.3.2 «Da RPC al Middleware ad Oggetti Distribuiti», pp. 15–16.
7. **Ecosistemi e tecnologie esemplificative.** CORBA, Java RMI e Microsoft .NET come modelli e strumenti rappresentativi della distribuzione di oggetti; introduzione dell'evoluzione verso i componenti enterprise. **Rif.:** [S], cap. 1, § 1.3.3 «Esempi rappresentativi: CORBA, Java RMI e .NET», pp. 16–17; § 1.4 «Il Middleware ad Oggetti Distribuiti nel Modello a Componenti», pp. 17–19.
8. **Collegamento con il corso.** Posizionamento delle successive tecniche (socket, RMI e Java Enterprise) rispetto ai diversi livelli di astrazione della comunicazione. **Rif.:** [S], cap. 1, §§ 1.3–1.4, pp. 13–19; [S], cap. 9, § 9.2 «Java Enterprise Edition», pp. 196–198 (**inquadramento complementare**).

### Lezione 3 — Programmazione concorrente e thread, parte 1

*Slide: `3.PD-2021-03-Thread-01.pdf`*

1. **Perché introdurre il calcolo concorrente.** Evoluzione dell'hardware multicore e necessità di coordinare più attività per migliorare reattività o utilizzare capacità di elaborazione parallela. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Concurrency» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/index.html)); [O], *The Java Tutorials* → «Concurrency» → «Processes and Threads» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)).
2. **Concorrenza e parallelismo come problemi di programmazione.** Differenza fra più attività che avanzano logicamente insieme e attività eseguite simultaneamente; vantaggi e difficoltà nell'organizzazione dei programmi. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Processes and Threads» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)).
3. **Processi e thread.** Distinzione tra isolamento dei processi e condivisione di risorse tra thread dello stesso processo; conseguenze sulle comunicazioni e sull'accesso alla memoria. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Processes and Threads» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)).
4. **Creazione e avvio dei thread Java.** Impiego di `Thread`, metodo `run()` e avvio con `start()`, con attenzione alla differenza fra chiamata di metodo e avvio di una nuova esecuzione. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Defining and Starting a Thread» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/runthread.html)).
5. **Metodi e ciclo di vita del thread.** Operazioni fondamentali per sospendere, attendere e osservare l'esecuzione, stati principali del thread e passaggi fra essi. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Thread Objects» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Pausing Execution with Sleep» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/sleep.html)); [O], *The Java Tutorials* → «Concurrency» → «Joins» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/join.html)); [O], *The Java Tutorials* → «Concurrency» → «Interrupts» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/interrupt.html)).
6. **Interferenza tra thread.** Aggiornamenti concorrenti a stato condiviso, operazioni composte non atomiche e condizioni di corsa che alterano il risultato del programma. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Thread Interference» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html)).
7. **Inconsistenza e visibilità della memoria.** Distinzione tra correttezza dell'ordine delle operazioni e visibilità dei valori aggiornati da thread diversi. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Memory Consistency Errors» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/memconsist.html)).

### Lezione 4 — Programmazione concorrente e thread, parte 2

*Slide: `4.PD-2021-04-Thread-02.pdf`*

1. **Concorrenza nella pratica.** Esempi di attività che possono progredire indipendentemente o necessitano di coordinamento, con distinzione fra throughput e durata complessiva. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Processes and Threads» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)); [O], *The Java Tutorials* → «Concurrency» → «Fork/Join» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/forkjoin.html)).
2. **Necessità della sincronizzazione.** Protezione di uno stato condiviso e imposizione di ordine dove sono richieste invarianti e sezioni critiche. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Synchronization» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/sync.html)); [O], *The Java Tutorials* → «Concurrency» → «Thread Interference» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html)).
3. **Metodi e blocchi sincronizzati in Java.** Significato di `synchronized`, mutua esclusione e uso della sincronizzazione nella definizione delle operazioni su oggetti condivisi. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Synchronized Methods» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html)).
4. **Lock intrinseci e monitor.** Relazione tra oggetti, possesso del lock, sezioni critiche e stati di attesa/blocco dei thread, anche attraverso i diagrammi di stato illustrati nelle slide. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Intrinsic Locks and Synchronization» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/locksync.html)).
5. **Atomicità delle operazioni.** Differenza tra accessi atomici e sequenze di istruzioni che richiedono sincronizzazione per preservare la correttezza. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Atomic Access» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html)).
6. **Deadlock e altre patologie della sincronizzazione.** Attesa circolare su più lock, perdita di progresso e conseguenze del cattivo coordinamento dei thread. **Rif.:** [O], *The Java Tutorials* → «Concurrency» → «Deadlock» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/deadlock.html)); [O], *The Java Tutorials* → «Concurrency» → «Starvation and Livelock» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/starvelive.html)).

### Lezione 5 — Laboratorio sui thread

*Slide: `5.PD-2021-06-ThreadExercises.pptx` (all'interno: «Lezione 6 (Lab)»).*

1. **Contatore condiviso e race condition.** Esercizio di incremento di un contatore 40.000 volte: confronto tra esecuzione sequenziale, quattro thread non sincronizzati e quattro thread con protezione della sezione critica. **Rif.:** [C], «Esercitazione Java Thread» → «Esercizio 1» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Thread Interference» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html)).
2. **Misura dei tempi di inizializzazione.** Confronto sperimentale fra uno, due e quattro thread per inizializzare un array di 1.200.000 interi, con discussione del costo di creare e coordinare i thread. **Rif.:** [C], «Esercitazione Java Thread» → «Esercizio 2» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Processes and Threads» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/procthread.html)).
3. **Riduzioni parallele su array.** Esercizi di somma e ricerca del massimo variando il numero di thread; suddivisione del lavoro, combinazione dei risultati e confronto dei tempi. **Rif.:** [C], «Esercitazione Java Thread» → «Esercizi 3 e 4» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Fork/Join» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/forkjoin.html)).
4. **Interleaving di operazioni di output.** Esercizio `Smiley`: più thread devono produrre una sequenza testuale corretta nonostante possibili interferenze e interruzioni temporali. **Rif.:** [C], «Esercitazione Java Thread» → «Esercizio 5» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Synchronized Methods» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html)).
5. **Riproduzione intenzionale di deadlock.** Progettazione di scenari con due e tre thread che entrano in stallo, per comprendere le condizioni che lo rendono possibile. **Rif.:** [C], «Esercitazione Java Thread» → «Esercizio 6» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Deadlock» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/deadlock.html)).
6. **Valutazione dell'impatto della mutua esclusione.** Aumento di thread e iterazioni su un contatore condiviso; confronto fra correttezza e costo prestazionale di diverse strategie di sincronizzazione. **Rif.:** [C], «Esercitazione Java Thread» → «Esercizio 6» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html)); [O], *The Java Tutorials* → «Concurrency» → «Intrinsic Locks and Synchronization» ([pagina](https://docs.oracle.com/javase/tutorial/essential/concurrency/locksync.html)).

### Lezione 6 — Socket TCP, parte 1

*Slide: `6.PD-SocketTCP-01.pdf` (titolo interno: «7: Socket TCP »).*

1. **Programmazione di rete a basso livello.** Ruolo dei socket nell'interazione tra processi su nodi distinti e loro funzione come base delle tecnologie di invocazione remota più astratte. **Rif.:** [S], cap. 2, § 2.1 «Introduzione», p. 26; § 2.2 «Un breve richiamo sulla programmazione con i socket», pp. 26–34.
2. **Socket TCP e ruoli client/server.** Stabilimento della connessione, creazione dei socket e distinzione tra estremità che attende la connessione ed estremità che la avvia. **Rif.:** [S], cap. 2, § 2.2.1 «I socket TCP», p. 27; § 2.2.4 «Un esempio di client-server con i socket», pp. 31–34.
3. **Flussi di ingresso e uscita.** Uso degli stream per inviare e ricevere dati attraverso una connessione TCP, separando gestione della connessione e rappresentazione dei contenuti. **Rif.:** [S], cap. 2, § 2.2.2 «Gli stream», pp. 27–28; § 2.7 «Approfondimenti», pp. 49–50.
4. **Esempio minimo Hello World.** Prime interazioni fra un semplice client e un server con scambio di messaggi su socket. **Rif.:** [S], cap. 2, § 2.2.3 «HelloWorld con i socket», pp. 28–31.
5. **Architettura e sequenza di un'applicazione client-server.** Avvio del server, connessione del client, comunicazione e gestione della sessione; lettura del codice attraverso i ruoli delle due parti. **Rif.:** [S], cap. 2, § 2.2.4 «Un esempio di client-server con i socket», pp. 31–34.
6. **Registro di nomi come servizio di supporto.** Motivazione dell'associazione fra nomi logici e oggetti/servizi reperibili in rete, propedeutica alla futura remotizzazione dell'esempio. **Rif.:** [S], cap. 2, §§ 2.4–2.5, pp. 36–49; [C], «Java Remote Method Invocation (RMI)» → «Hello World con Java Remote Method Invocation» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/03-rmi.html)).

### Lezione 7 — Socket TCP, parte 2

*Slide: `7.PD-SocketTCP-02.pdf` (titolo interno: «8: Socket TCP »).*

1. **Caso di studio «Impiegato» in esecuzione locale.** Struttura iniziale del codice prima della distribuzione e identificazione dei metodi che il client deve poter richiamare. **Rif.:** [S], cap. 2, § 2.3 «Da un oggetto locale», pp. 34–36.
2. **Passaggio da oggetto locale a oggetto remoto.** Trasformazione della collaborazione fra oggetti in comunicazione su rete, senza perdere la separazione fra interfaccia e implementazione. **Rif.:** [S], cap. 2, § 2.4 «…all'oggetto remoto», pp. 36–45.
3. **Interfaccia remota e codice server.** Definizione del contratto accessibile da remoto e costruzione del componente che riceve le richieste e invoca l'oggetto effettivo. **Rif.:** [S], cap. 2, § 2.4.1 «Il server e la interfaccia remota», pp. 37–39.
4. **Client e convenzioni di invocazione.** Operazioni compiute dal chiamante remoto e rappresentazione di richieste e risposte. **Rif.:** [S], cap. 2, § 2.4.2 «Il client», p. 39; § 2.4.4 «La sequenza delle invocazioni», p. 43.
5. **Idea di stub e skeleton.** Introduzione delle componenti intermedie che raccolgono la chiamata, trasferiscono i dati attraverso la rete e la consegnano all'implementazione del metodo. **Rif.:** [S], cap. 2, § 2.4.3 «Lo strato stub/skeleton», pp. 39–43.
6. **Servizio di naming e individuazione dell'oggetto remoto.** Associazione di un nome al servizio, ricerca dal client e inizializzazione della collaborazione remota. **Rif.:** [S], cap. 2, § 2.5 «Indirizzamento dell'oggetto remoto», pp. 45–49; §§ 2.5.1–2.5.2, pp. 45–49.
7. **Senso dell'esercizio preparatorio a RMI.** Comprensione dei passaggi che una piattaforma di middleware automatizza, dalla connessione al reperimento dell'oggetto e al trasferimento degli argomenti. **Rif.:** [S], cap. 2, §§ 2.4–2.6, pp. 36–49; cap. 3, § 3.3.2 «Il meccanismo di invocazione remota», pp. 58–61.

### Lezione 8 — Java Remote Method Invocation, parte 1

*Slide: `8.PD-RMI-01.pdf` (titolo interno: «9: Java Remote Method Invocation »).*

1. **Dai socket a un sistema di oggetti remoti.** Motivazione per cui Java RMI nasconde dettagli espliciti di connessione e protocollo dietro un modello di chiamata a metodi. **Rif.:** [S], cap. 3, § 3.1 «Introduzione», p. 54; § 3.2 «Gli obiettivi della progettazione di Java RMI», pp. 54–56.
2. **Obiettivi progettuali e modello RMI.** Riutilizzo delle astrazioni a oggetti, semplificazione della programmazione distribuita, gestione delle differenze tra chiamate locali e remote. **Rif.:** [S], cap. 3, § 3.2, pp. 54–56; § 3.3 «Il modello a oggetti distribuiti di Java RMI», pp. 56–62.
3. **Classi e ruoli principali nel modello a oggetti distribuiti.** Interfacce remote, implementazioni, oggetti di riferimento e relazione fra client e server. **Rif.:** [S], cap. 3, § 3.3.1 «La struttura delle classi di Java RMI», pp. 56–58.
4. **Parametri, riferimenti e identità degli oggetti.** Differenze nell'uso di oggetti locali e distribuiti, trasferimento dei valori e problemi legati alla preservazione della semantica dei riferimenti. **Rif.:** [S], cap. 3, § 3.3 «Il modello a oggetti distribuiti di Java RMI», pp. 56–62; § 3.3.3 «La differenza tra il modello a oggetti locale e quello remoto», pp. 61–62.
5. **Percorso di una chiamata remota.** Avvio dell'invocazione dal client, trasmissione dei dati, esecuzione sul server e restituzione di risultato o errore. **Rif.:** [S], cap. 3, § 3.3.2 «Il meccanismo di invocazione remota», pp. 58–61.
6. **Modello di sicurezza Java e invocazione remota.** Motivazioni per controllare il codice distribuito e confini di fiducia dell'esecuzione su rete. **Rif.:** [S], cap. 3, § 3.5.3 «La sicurezza in Java», pp. 74–75; cap. 4, § 4.4 «La sicurezza e la policy del Security Manager», pp. 93–94.
7. **Garanzie e limiti della trasparenza remota.** Confronto fra aspetto sintattico simile alla chiamata locale e differenze effettive di latenza, errori e comunicazione. **Rif.:** [S], cap. 3, § 3.5.2 «La trasparenza degli oggetti distribuiti», pp. 70–74; § 3.3.3, pp. 61–62.

### Lezione 9 — Java Remote Method Invocation, parte 2

*Slide: `9.PD-RMI-02.pdf` (titolo interno: «10: Java Remote Method Invocation »).*

1. **Differenze fra oggetti locali e remoti.** Effetti della distribuzione sulla semantica delle chiamate, sul passaggio degli oggetti e sulla gestione di eccezioni e guasti di comunicazione. **Rif.:** [S], cap. 3, § 3.3.3 «La differenza tra il modello a oggetti locale e quello remoto», pp. 61–62; § 3.5.2, pp. 70–74.
2. **Architettura a livelli di Java RMI.** Scomposizione della piattaforma in livelli responsabili di rappresentazione delle chiamate, gestione dei riferimenti remoti e trasporto. **Rif.:** [S], cap. 3, § 3.4 «La architettura di Java RMI», pp. 62–68.
3. **Stub e skeleton.** Ruolo degli intermediari nell'invocazione remota e loro collocazione nella struttura a livelli esaminata dalle slide. **Rif.:** [S], cap. 3, § 3.4.1 «I tre layer della architettura», pp. 62–66; cap. 2, § 2.4.3, pp. 39–43.
4. **Remote Reference Layer e Transport Layer.** Gestione dei riferimenti e connessioni sottostanti, che rendono possibile indirizzare l'oggetto e scambiare le invocazioni. **Rif.:** [S], cap. 3, § 3.4.1 «I tre layer della architettura», pp. 62–66.
5. **Marshalling e serializzazione.** Trasformazione di argomenti e risultati in una forma trasmissibile e loro ricostruzione presso l'altro estremo. **Rif.:** [S], cap. 3, § 3.5.4 «Il meccanismo di marshalling usato da Java RMI», pp. 75–76.
6. **Procedura di costruzione di un'applicazione RMI.** Definizione dell'interfaccia remota, classe di implementazione, componenti server e client, registrazione e avvio del servizio. **Rif.:** [S], cap. 4, § 4.2 «Il processo di creazione di un programma Java RMI», pp. 82–89, in particolare §§ 4.2.1–4.2.9.
7. **Servizio di naming e registro `rmiregistry`.** Pubblicazione e ricerca per nome del servizio remoto e ordine delle operazioni necessarie all'avvio. **Rif.:** [S], cap. 4, §§ 4.2.5–4.2.7, pp. 85–88; § 4.3.5–4.3.7, pp. 91–92.
8. **Esempio HelloWorld end-to-end.** Scomposizione del caso didattico, compilazione ed esecuzione dei due lati tramite shell, con i passaggi essenziali osservabili nella pratica. **Rif.:** [S], cap. 4, § 4.3 «L'esempio HelloWorld», pp. 89–93 (sottosezioni §§ 4.3.1–4.3.9).

## Parte II — Java Enterprise Edition (JEE)

### Lezione 11 — Introduzione a Java Enterprise Edition

*Slide: `11.PD-JEE-01-Intro.pdf`*

1. **Esigenze delle applicazioni enterprise.** Sistemi distribuiti, transazionali, portabili e integrati con servizi aziendali eterogenei; motivazioni per un ambiente server con servizi infrastrutturali comuni. **Rif.:** [G], cap. 1, sez. «Understanding Java EE», pp. 1–2.
2. **Architettura multilayer e multitier.** Distinzione fra separazione logica in livelli applicativi e distribuzione fisica dei componenti; individuazione delle responsabilità di presentazione, business e dati. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Architecture», pp. 2–3; [S], cap. 9, § 9.2.1 «Le architetture multi-tier», pp. 196–197.
3. **Componenti dell'ecosistema Java EE.** Tipologie di componenti e loro collocazione nell'architettura applicativa, con attenzione a componenti web e business. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Components», p. 3.
4. **Container e servizi gestiti.** Responsabilità del container per creazione, gestione e infrastruttura dei componenti, compresi sicurezza, transazioni e iniezione di dipendenze. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Containers» e «Services», pp. 3–5.
5. **Packaging e deployment.** Organizzazione degli artefatti deployabili e rapporto tra moduli Java EE e application server. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Packaging», pp. 6–7.
6. **Annotazioni e deployment descriptor.** Dichiarazione di configurazione e metadati nei sorgenti o nei file XML, con confronto fra approccio dichiarativo e descrittori. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Annotations and Deployment Descriptors», pp. 7–9.
7. **Standard, portabilità e modello di sviluppo.** Origine standardizzata delle API, ruolo del Java Community Process e separazione fra specifica e implementazione. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Standards», «JCP», «Portable» e «Programming Model», pp. 9–12.
8. **Storia e panorama delle tecnologie Java EE.** Evoluzione della piattaforma e mappa delle specifiche che verranno approfondite, tra cui CDI, JPA ed EJB. **Rif.:** [G], cap. 1, «Java EE Specifications Overview» → «A Brief History of Java EE» e «Java EE 7 Specifications», pp. 16–20.

### Lezione 12 — Contexts and Dependency Injection (CDI), parte 1

*Slide: `12.PD-JEE-02-CDI-1.pdf`*

1. **Scopo della Dependency Injection.** Eliminazione della costruzione esplicita delle dipendenze dai componenti e riduzione dell'accoppiamento mediante gestione del container. **Rif.:** [G], cap. 2, «Understanding Beans» → «Dependency Injection», p. 24; «Writing a CDI Bean» → «Dependency Injection», pp. 29–30.
2. **Bean CDI e gestione del ciclo di vita.** Natura dei bean gestiti, istanziazione, durata e ruolo del contesto nella gestione delle istanze. **Rif.:** [G], cap. 2, «Understanding Beans» → «Life-Cycle Management» e «Scopes and Context», pp. 24–25; «Writing a CDI Bean» → «Anatomy of a CDI Bean», pp. 28–29.
3. **Interception come funzione trasversale.** Possibilità di associare comportamenti a eventi di esecuzione dei metodi o del ciclo di vita senza inserirli nella logica di business. **Rif.:** [G], cap. 2, «Understanding Beans» → «Interception», p. 25; sez. «Interceptors», pp. 44–54.
4. **Definizione e punti di iniezione.** Annotazione `@Inject`, injection point e risoluzione delle dipendenze in base al tipo. **Rif.:** [G], cap. 2, «Writing a CDI Bean» → «Dependency Injection» → «@Inject», «Injection Points» e «Default Injection», pp. 29–33.
5. **Qualifier per scegliere un'implementazione.** Disambiguazione di bean che condividono un contratto, compresi qualifier con membri e qualificatori multipli. **Rif.:** [G], cap. 2, «Writing a CDI Bean» → «Qualifiers», pp. 33–36.
6. **Produttori e disposers.** Creazione di oggetti tramite metodi o campi producer, controllo della produzione delle dipendenze e rilascio delle risorse associate. **Rif.:** [G], cap. 2, «Writing a CDI Bean» → «Producers», pp. 37–40; «Disposers», pp. 40–41.
7. **Scope e durata delle istanze.** Significato dei principali contesti e delle conseguenze che la scelta di scope ha sulla condivisione dello stato. **Rif.:** [G], cap. 2, «Writing a CDI Bean» → «Scopes» e «Conversation», pp. 41–43.
8. **Alternative e configurazione di CDI.** Selezione di implementazioni alternative e ruolo di `beans.xml` nell'attivazione di funzionalità del container. **Rif.:** [G], cap. 2, «Writing a CDI Bean» → «Alternatives», pp. 36–37; «Understanding Beans» → «Deployment Descriptor», p. 26.

### Lezione 13 — Laboratorio Java EE/CDI con NetBeans

*Slide: `13.PD-JEE-CDI-Netbeans.pdf` (titolo interno: «JEE Lab 1», lezione 14).*

1. **Assemblare i concetti Java EE in un progetto funzionante.** Dall'organizzazione dei componenti all'avvio dell'applicazione in un ambiente di esecuzione enterprise. **Rif.:** [G], cap. 1, «Understanding Java EE» → «Components», «Containers» e «Packaging», pp. 3–7; cap. 2, «Putting It All Together», pp. 57–66.
2. **NetBeans come ambiente di sviluppo.** Creazione e gestione dei progetti dall'IDE e interazione con i componenti dell'ambiente applicativo. **Rif.:** [C], «Laboratorio Java EE» → «Installazione ambiente di sviluppo» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/05-javaee-lab.html)); [C], «Laboratorio Java EE» → «Importare i progetti del libro di testo nel proprio ambiente» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/05-javaee-lab.html)).
3. **Maven e struttura del progetto.** Dipendenze, file `pom.xml`, fasi di compilazione, test e generazione degli artefatti. **Rif.:** [G], appendice A, sez. «Maven 3» → «Project Descriptor», «Managing Artifacts», «Plug-ins and Life Cycle», pp. 540–546; cap. 2, «Putting It All Together» → «Compiling and Executing with Maven», pp. 63–64.
4. **GlassFish come application server.** Funzione dell'implementazione del container nell'esecuzione di applicazioni Java EE, configurazione e amministrazione di base. **Rif.:** [G], appendice A, sez. «GlassFish v4» → «GlassFish v4 Architecture», «Administration» e «Installing GlassFish», pp. 553–558.
5. **Componenti CDI in un progetto reale.** Collegamento tra bean, dipendenze iniettate, file di configurazione e percorso di esecuzione. **Rif.:** [G], cap. 2, «Putting It All Together» → «Writing the Book and BookService Classes», «Writing the Qualifiers», «Trigger CDI with beans.xml», pp. 58–63.
6. **Compilazione, test ed esecuzione degli esempi.** Verifica che progetto, configurazione e container permettano di eseguire il comportamento previsto. **Rif.:** [G], cap. 2, «Putting It All Together» → «Compiling and Executing with Maven», «Running the Main Class» e «Running the Integration Test», pp. 63–66; appendice A, sez. «JUnit 4», pp. 547–550.

### Lezione 14 — CDI: intercettori, decorator ed eventi

*Slide: `14.PD-JEE-02-CDI2 Interceptor.pdf` (titolo interno: «Context and Dependency Injection - 2», lezione 13).*

1. **Intercettori e separazione delle responsabilità.** Applicazione di logica trasversale ai metodi gestiti senza modificare le responsabilità centrali del bean. **Rif.:** [G], cap. 2, sez. «Interceptors», pp. 44–54.
2. **Target-class e class interceptor.** Modi di associare le classi interceptor alle invocazioni dei bean e differenze fra gli ambiti di applicazione. **Rif.:** [G], cap. 2, «Interceptors» → «Target Class Interceptors», pp. 45–47; «Class Interceptors», pp. 47–49.
3. **Intercettazione del ciclo di vita.** Associazione di comportamenti alle fasi di inizializzazione o distruzione dei componenti. **Rif.:** [G], cap. 2, «Interceptors» → «Life-Cycle Interceptor», pp. 49–50.
4. **Interceptor multipli e catene.** Ordine di esecuzione, concatenazione, esclusione selettiva e controllo della composizione delle operazioni intercettate. **Rif.:** [G], cap. 2, «Interceptors» → «Chaining and Excluding Interceptors», pp. 50–51.
5. **Interceptor binding e priorità.** Uso di annotazioni di binding per associare intercettori e scelta dell'ordine di priorità. **Rif.:** [G], cap. 2, «Interceptors» → «Interceptor Binding» e «Prioritizing Interceptors Binding», pp. 51–54.
6. **Decorator.** Estensione o modifica di comportamenti mediante oggetti decoratori integrati nel modello CDI, distinguendoli dagli interceptor. **Rif.:** [G], cap. 2, sez. «Decorators», pp. 54–55.
7. **Eventi CDI.** Disaccoppiamento tra produttori e osservatori di eventi e propagazione di notifiche nel container. **Rif.:** [G], cap. 2, sez. «Events», pp. 55–57.

### Lezione 15 — Java Persistence API, parte 1

*Slide: `15.PD-JEE-JPA-1.pdf` (titolo interno: «Java Persistence API - 1», lezione 16).*

1. **Persistenza e Object-Relational Mapping.** Motivazioni per collegare il modello a oggetti Java alle tabelle di un database relazionale e ruolo di JPA nel livello di accesso ai dati. **Rif.:** [G], cap. 4, «Understanding Entities» → «Object-Relational Mapping», pp. 105–108; cap. 5, «Elementary Mapping», pp. 125–148.
2. **Entità JPA.** Struttura di una classe persistente, identificativo e annotazioni principali che ne consentono la gestione. **Rif.:** [G], cap. 4, «Understanding Entities» → «Anatomy of an Entity», pp. 104–105.
3. **Mapping di tabelle e colonne.** Associazione fra entità, tabelle e attributi persistenti, con esempi di configurazione dichiarativa. **Rif.:** [G], cap. 5, «Elementary Mapping» → «Tables», pp. 125–128; «Attributes», pp. 131–137.
4. **Identificatori e chiavi primarie.** Definizione dell'identità persistente e generazione degli identificatori delle entità. **Rif.:** [G], cap. 5, «Elementary Mapping» → «Primary Keys» → «@Id and @GeneratedValue», pp. 128–129.
5. **Persistence unit e configurazione.** Individuazione del contesto di persistenza e dei dati necessari per connettere le entità a un database. **Rif.:** [G], cap. 4, «Understanding Entities» → «Persistence Unit», pp. 110–111; «Putting It all Together» → «Writing the Persistence Unit», pp. 118–120.
6. **EntityManager come punto di accesso alle entità.** Funzioni dell'`EntityManager` e relazione con la persistenza gestita dal container. **Rif.:** [G], cap. 6, sez. «Entity Manager», pp. 177–179; «Obtaining an Entity Manager», pp. 179–181.
7. **Introduzione alle operazioni sulle entità.** Inserimento, ricerca, aggiornamento e rimozione come attività tipiche del livello dati, anticipate prima dei dettagli della seconda lezione. **Rif.:** [G], cap. 6, «Entity Manager» → «Manipulating Entities», pp. 183–192.
8. **Esempio applicativo completo JPA.** Organizzazione di classe entity, unità di persistenza, test e inizializzazione dello schema dati. **Rif.:** [G], cap. 4, «Putting It all Together», pp. 114–124.

### Lezione 16 — Java Persistence API, parte 2

*Slide: `16.PD-JEE-JPA-2.pdf` (titolo interno: «Java Persistence API », lezione 17).*

1. **Ottenimento e uso di EntityManager.** Accesso a un gestore di entità in differenti contesti applicativi e comprensione delle responsabilità del persistence context. **Rif.:** [G], cap. 6, «Entity Manager» → «Obtaining an Entity Manager», pp. 179–181; «Persistence Context», pp. 181–183.
2. **Stati e gestione delle entità persistenti.** Distinzione fra oggetti nuovi, gestiti, rimossi o detached e implicazioni per la sincronizzazione con il database. **Rif.:** [G], cap. 6, «Entity Manager» → «Manipulating Entities», pp. 183–192; «Entity Life Cycle», pp. 217–218.
3. **Operazioni CRUD e sincronizzazione.** Metodi di persistenza, ricerca, rimozione, merge, flush e refresh e comportamento delle entità rispetto al contesto. **Rif.:** [G], cap. 6, «Entity Manager» → «Manipulating Entities» (sottosezioni «Persisting an Entity», «Finding by ID», «Removing an Entity», «Synchronizing with the Database», «Merging an Entity»), pp. 185–191.
4. **Mappature e relazioni fra entità.** Richiamo alle principali associazioni object-relational e agli effetti del mapping sulla navigazione degli oggetti. **Rif.:** [G], cap. 5, «Relationship Mapping» → «Entity Relationships», pp. 150–161.
5. **Java Persistence Query Language (JPQL).** Interrogazioni sul modello a entità tramite `SELECT`, `FROM`, `WHERE`, ordinamento e raggruppamento; differenza rispetto a SQL sulle tabelle. **Rif.:** [G], cap. 6, sez. «JPQL», pp. 192–198.
6. **Tipologie di query JPA.** Query dinamiche e con nome, Criteria API e query native, e criteri di scelta fra le modalità di interrogazione. **Rif.:** [G], cap. 6, sez. «Queries» → «Dynamic Queries», «Named Queries», «Criteria API» e «Native Queries», pp. 198–209.
7. **Callback del ciclo di vita.** Associazione di metodi a determinati eventi delle entità gestite, per intervenire nei momenti previsti da JPA. **Rif.:** [G], cap. 6, «Callbacks», pp. 218–221.
8. **Entity listeners.** Separazione della gestione degli eventi di persistenza in classi listener dedicate. **Rif.:** [G], cap. 6, «Listeners», pp. 221–225.

### Lezione 17 — Enterprise JavaBeans, parte 1

*Slide: `17.PD-JEE-EJB-1.pdf` (titolo interno: «Enterprise Java Beans », lezione 18).*

1. **Ruolo degli EJB nel livello business.** Componenti server che incapsulano la logica applicativa e sfruttano servizi forniti dal container. **Rif.:** [G], cap. 7, sez. «Understanding Enterprise JavaBeans», pp. 227–230.
2. **Struttura di un session bean.** Forma della classe bean, interfacce e punti attraverso cui un servizio business viene esposto ai chiamanti. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Anatomy of an EJB», pp. 234–239.
3. **Viste locali, remote e senza interfaccia.** Differenze tra modalità di accesso ai servizi EJB e relazioni tra contratto e implementazione. **Rif.:** [G], cap. 7, «Anatomy of an EJB» → «Remote, Local, and No-Interface Views», pp. 235–237.
4. **Stateless session bean.** Componenti che non conservano stato conversazionale specifico fra invocazioni, con relative condizioni di impiego. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Stateless Beans», pp. 239–241.
5. **Stateful session bean.** Componenti in cui lo stato accompagna una conversazione con il client e comporta considerazioni particolari sul ciclo di vita. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Stateful Beans», pp. 241–244.
6. **Singleton session bean.** Istanza condivisa e modalità di inizializzazione/gestione della concorrenza. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Singletons», pp. 244–250.
7. **Packaging e deployment dei bean.** Composizione del pacchetto, utilizzo del container enterprise e avvio del componente sul server. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Packaging» e «Deploying an EJB», pp. 257–259.
8. **Modalità di invocazione degli EJB.** Iniezione, CDI e naming/JNDI come possibilità per ottenere una referenza utilizzabile dal client. **Rif.:** [G], cap. 7, «Invoking Enterprise Java Beans» → «Invoking with Injection», «Invoking with CDI», «Invoking with JNDI», pp. 259–261.

### Lezione 18 — Enterprise JavaBeans, parte 2

*Slide: `18.PD-JEE-EJB-2.pdf` (titolo interno: «Enterprise Java Beans », lezione 19).*

1. **Ciclo di vita dei session bean.** Creazione, disponibilità, uso e distruzione dei bean in funzione della categoria stateless, stateful o singleton. **Rif.:** [G], cap. 8, «Session Beans Life Cycle» → «Stateless and Singleton», «Stateful», pp. 263–266.
2. **Callback di lifecycle.** Meccanismi con cui un EJB reagisce a specifiche transizioni del proprio ciclo di vita. **Rif.:** [G], cap. 8, «Session Beans Life Cycle» → «Callbacks», pp. 266–268.
3. **Modello di autorizzazione EJB.** Distinzione fra identità, ruoli e controllo dell'accesso ai metodi business gestiti dal container. **Rif.:** [G], cap. 8, sez. «Authorization», pp. 274–278.
4. **Autorizzazione dichiarativa.** Politiche espresse con annotazioni o metadati, senza introdurre controlli manuali in ogni invocazione. **Rif.:** [G], cap. 8, «Authorization» → «Declarative Authorization», pp. 274–277.
5. **Autorizzazione programmatica.** Uso delle API di contesto per eseguire controlli di autorizzazione nel codice del componente. **Rif.:** [G], cap. 8, «Authorization» → «Programmatic Authorization», pp. 277–278.
6. **Transazioni e proprietà di correttezza.** Significato di unità di lavoro atomica, proprietà ACID e rapporto tra logica business e consistenza delle risorse persistenti. **Rif.:** [G], cap. 9, «Understanding Transactions» → «ACID», pp. 289–290.
7. **Container-Managed Transactions (CMT).** Confini transazionali e comportamento gestito dal container, compresa la gestione di rollback ed eccezioni. **Rif.:** [G], cap. 9, «Transaction Support in EJBs» → «Container-Managed Transactions», pp. 295–300.
8. **Bean-Managed Transactions (BMT).** Modalità in cui il componente assume esplicitamente il controllo delle operazioni transazionali. **Rif.:** [G], cap. 9, «Transaction Support in EJBs» → «Bean-Managed Transactions», pp. 300–302.

### Lezione 19 — Enterprise JavaBeans, parte 3: esercitazioni

*Slide: `19.PD-JEE-EJB-3.pdf` (titolo interno: «Enterprise Java Beans (3)», lezione 21).*

1. **Dalle definizioni EJB a un'applicazione eseguibile.** Ricostruzione dei componenti, dei contratti d'accesso e dei passaggi per utilizzare un EJB dentro un progetto enterprise. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Anatomy of an EJB», pp. 234–239; «Invoking Enterprise Java Beans», pp. 259–261.
2. **Caso HelloWorld EJB: struttura del progetto.** Esempio minimale di componente business e client che ne richiama i metodi, con attenzione a file, classi e configurazione. **Rif.:** [G], cap. 7, «Writing Enterprise Java Beans» → «Stateless Beans», pp. 239–241; cap. 8, «Putting It All Together», pp. 278–288 (**esempio analogo, non identico**).
3. **Esecuzione in NetBeans.** Creazione, compilazione e deployment dall'ambiente di sviluppo impiegato nelle slide. **Rif.:** [C], «Laboratorio EJB» → «Esercizio 0 - Hello World EJB» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/07-ejb-lab.html)); [C], «Laboratorio EJB» → «Esercizio 1 - Music Library» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/07-ejb-lab.html)).
4. **Caso Book EJB: modello dati e business layer.** Esempio più articolato che collega un'entità persistente con un session bean per gestire operazioni applicative. **Rif.:** [G], cap. 8, «Putting It All Together» → «Writing the Book Entity» e «Writing the BookEJB Stateless Session Bean», pp. 279–281.
5. **Iniezione delle risorse e configurazione della persistenza.** Collegamento fra EJB, entità, persistence unit e risorsa database. **Rif.:** [G], cap. 8, «Putting It All Together» → «Writing the CDI DatabaseProducer», «Persistence Unit for the BookEJB» e «Writing the DatabasePopulator and Defining the Data Source», pp. 281–284.
6. **Test, build, packaging e deployment.** Validazione dell'applicazione prima della distribuzione, preparazione dell'artefatto e pubblicazione su GlassFish. **Rif.:** [G], cap. 8, «Putting It All Together» → «Writing the BookEJBIT Integration Test», «Compiling, Testing, and Packaging with Maven» e «Deploying on GlassFish», pp. 284–287.
7. **Verifica dell'invocazione dal client.** Collegamento fra componente pubblicato, riferimento ottenuto dal client e osservazione del risultato della chiamata business. **Rif.:** [G], cap. 7, «Invoking Enterprise Java Beans», pp. 259–261; cap. 8, «Putting It All Together» → «Writing the Main Class», pp. 287–288.

### Lezione 20 — Java Message Service (JMS), parte 1

*Slide: `20.PD-JEE-JMS-1(3).pdf` (titolo interno: «Lezione 21: Java Messaging Services»).*

1. **Dal middleware a invocazione remota al Message-Oriented Middleware (MOM).** Confronto tra comunicazione mediante RPC/oggetti distribuiti e scambio di messaggi mediato da un broker, con attenzione al disaccoppiamento temporale tra i sistemi e alla possibilità di integrare applicazioni eterogenee. **Rif.:** [S], cap. 1, §§ 1.3.1–1.3.2, pp. 15–16; [G], cap. 13, «Understanding Messaging», pp. 417–421; [C], «Java Message Service - Part 1» → «Contenuti: Messaging» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/07-jms.html)).
2. **Architettura e ruoli di Java Message Service.** Funzione di JMS come API standard per i messaggi; individuazione di *provider*, produttori, consumatori, messaggi e *destination*, e distinzione tra invio e consegna. **Rif.:** [G], cap. 13, «Understanding Messaging», pp. 417–421; «Messaging Specifications Overview», pp. 421–422.
3. **Messaggistica point-to-point con le code.** Uso delle *queue* per distribuire messaggi fra uno o più mittenti e destinatari; caratteristica secondo cui un singolo messaggio è consumato da un solo ricevente e conseguenze per la distribuzione del carico. **Rif.:** [G], cap. 13, «Understanding Messaging» → «Point-to-Point», p. 419.
4. **Messaggistica publish-subscribe con i topic.** Produzione di eventi destinati a più sottoscrittori; differenze dalle code, dipendenza temporale delle sottoscrizioni ordinarie e introduzione delle sottoscrizioni durevoli. **Rif.:** [G], cap. 13, «Understanding Messaging» → «Publish-Subscribe», p. 420; «Reliability Mechanisms» → «Creating Durable Consumers», pp. 440–441.
5. **Oggetti amministrati e individuazione delle destinazioni.** Ruolo di *connection factory* e *destination* configurate nel provider; uso di nomi JNDI o dell'iniezione per separare il codice client dalla configurazione del broker. **Rif.:** [G], cap. 13, «Understanding Messaging» → «Administered Objects», pp. 420–421; «Java Messaging Service API» → «Classic API», pp. 423–430.
6. **Oggetti e formati dei messaggi JMS.** Componenti di un messaggio (header, proprietà e body), tipi di contenuto e modalità con cui i consumer selezionano ed elaborano informazioni. **Rif.:** [G], cap. 13, «Java Messaging Service API» → «Classic API», pp. 423–430.
7. **Evoluzione delle API e semplificazione in JMS 2.0.** Confronto tra API classica (connessioni, sessioni, producer e consumer) e API semplificata basata su `JMSContext`; obiettivo di ridurre il codice infrastrutturale. **Rif.:** [G], cap. 13, «Messaging Specifications Overview» → «What's New in JMS 2.0?», p. 422; «Java Messaging Service API» → «Classic API» e «Simplified API», pp. 423–433.
8. **Produzione e invio di messaggi.** Uso delle API JMS per creare producer, ottenere una destinazione e inviare messaggi, distinguendo il codice eseguito fuori dal container, dentro il container e con integrazione CDI. **Rif.:** [G], cap. 13, «Writing Message Producers» → «Producing a Message outside a Container», «Producing a Message inside a Container», «Producing a Message inside a Container with CDI», pp. 433–435.
9. **Ricezione sincrona e asincrona; scenari di scalabilità.** Impiego di consumer che attendono un messaggio oppure ricevono notifiche mediante listener; valutazione delle possibilità di aggiungere produttori e consumatori senza accoppiare direttamente gli endpoint. **Rif.:** [G], cap. 13, «Writing Message Consumers» → «Synchronous Delivery» e «Asynchronous Delivery», pp. 436–437; «Understanding Messaging», pp. 417–421 (**scalabilità: collegamento concettuale**).

### Lezione 21 — Java Message Service (JMS), parte 2

*Slide: `21.PD-JEE-JMS-2(3).pdf` (titolo interno: «Lezione 22: Java Messaging Services - 2»).*

1. **Affidabilità della consegna e criteri di qualità del servizio.** Presentazione dei meccanismi configurabili che governano selezione, durata, persistenza, conferma e ordine di elaborazione dei messaggi. **Rif.:** [G], cap. 13, «Reliability Mechanisms», pp. 438–441.
2. **Selezione dei messaggi tramite filtri.** Filtri basati su proprietà e campi di header, con selettori dichiarati dal consumer mediante espressioni simili a condizioni SQL. **Rif.:** [G], cap. 13, «Reliability Mechanisms» → «Filtering messages», p. 439.
3. **Scadenza, persistenza e priorità.** Configurazione di *time-to-live*, modalità di consegna persistente/non persistente e priorità dei messaggi; discussione dei compromessi tra garanzie richieste e prestazioni. **Rif.:** [G], cap. 13, «Reliability Mechanisms» → «Setting Message Time-to-Live», «Specifying Message Persistence», «Setting Priorities», pp. 439–441.
4. **Acknowledgment e sottoscrizioni durevoli.** Controllo delle conferme di ricezione e loro ruolo nel recupero; conservazione dei messaggi per subscriber temporaneamente non connessi. **Rif.:** [G], cap. 13, «Reliability Mechanisms» → «Controlling Acknowledgment», «Creating Durable Consumers», pp. 440–441.
5. **Message-Driven Bean come consumer gestito dal container.** Introduzione agli MDB, che elaborano messaggi senza essere invocati direttamente da un client; differenze rispetto ai session bean e servizi infrastrutturali delegati al container. **Rif.:** [G], cap. 13, «Writing Message-Driven Beans» → «Anatomy of an MDB», pp. 441–445.
6. **Definizione, configurazione e ciclo di vita degli MDB.** Uso di `@MessageDriven`, `MessageListener`, `onMessage()` e proprietà di attivazione; dipendenze iniettate, gestione del contesto e callback lungo il ciclo di vita. **Rif.:** [G], cap. 13, «Writing Message-Driven Beans» → «Anatomy of an MDB», pp. 442–445; [C], «Java Message Service - Part 1» → «Contenuti: Parte 2 → Message-Driven Beans» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/07-jms.html)).
7. **MDB come ricevitore e produttore di messaggi.** Casi in cui il componente reagisce all'arrivo di un messaggio e, dopo l'elaborazione, invia messaggi a un'altra destinazione per collegare fasi applicative. **Rif.:** [G], cap. 13, «Writing Message-Driven Beans» → «MDB as a Consumer» e «MDB as a Producer», pp. 445–446.
8. **Transazioni ed eccezioni nel trattamento dei messaggi.** Interazione fra consegna JMS e confini transazionali gestiti dal container o dal bean; gestione degli errori e delle eccezioni tipiche delle API. **Rif.:** [G], cap. 13, «Writing Message-Driven Beans» → «Transactions», «Handling Exceptions», pp. 446–447; [G], cap. 9, «Transaction Support in EJBs», pp. 295–302 (**approfondimento delle transazioni EJB**).
9. **Esercitazione d'integrazione JMS–MDB e configurazione applicativa.** Lettura di un flusso completo composto da messaggi, producer, consumer, broker e MDB; predisposizione delle destinazioni, compilazione, deployment e prova del comportamento. **Rif.:** [G], cap. 13, «Putting It All Together» → «Writing the OrderDTO», «Writing the OrderProducer», «Writing the OrderConsumer», «Writing the ExpensiveOrderMDB», «Compiling and Packaging with Maven», «Creating the Administered Objects», «Deploying the MDB on GlassFish», «Running the Example», pp. 448–453 (**esempio del libro analogo; procedure e progetti specifici delle slide non necessariamente identici**).

### Lezione 22 — SOAP Web Services, parte 1

*Slide: `22.PD-2021-23-JEE-WS-1.pdf` (titolo interno: «Lezione 23: SOAP Web Services - 1»).*

1. **Servizi distribuiti, architettura orientata ai servizi e interoperabilità.** Motivazioni per esporre funzionalità tramite interfacce descrivibili e utilizzabili da programmi eterogenei; *loose coupling*, indipendenza dalla piattaforma e composizione dei servizi. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services», pp. 455–461; [C], «Java Web Services (WS) Parte 1» → «Contenuti: Parte 1 → Service-Oriented Architecture» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/08-ws.html)).
2. **Web Services, applicazioni web, SOAP, REST e architettura orientata ai servizi.** Distinzione fra interfacce rivolte a utenti e servizi utilizzabili direttamente da software; ruolo dell’interoperabilità, del basso accoppiamento e della composizione di servizi in scenari distribuiti e B2B. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services», pp. 455–456; [G], cap. 15, «Understanding RESTful Web Services», pp. 495–505; [C], «Java Web Services (WS) Parte 1» → «Contenuti: Parte 1 → Service-Oriented Architecture» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/08-ws.html)).
3. **Ruoli e interazione tra soggetti che pubblicano e utilizzano servizi.** Individuazione di *service provider*, *requester* e strumenti di discovery; relazione tra pubblicazione della descrizione, ricerca e successiva invocazione dell'endpoint. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services» → «UDDI» e «Transport Protocol», p. 461; «WSDL», pp. 456–459 (**corrispondenza concettuale**).
4. **Contratto WSDL e descrizione formale delle operazioni.** Struttura della descrizione del servizio, messaggi e tipi XML, operazioni esposte, binding verso un protocollo e indirizzi delle porte; separazione del contratto dall'implementazione. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services» → «WSDL», pp. 456–459.
5. **SOAP e formato dei messaggi XML.** Protocolli e convenzioni per l'interscambio strutturato, con lettura di envelope, body e informazioni aggiuntive (header) e relazione con i fault restituiti dal servizio. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services» → «XML», «SOAP», pp. 456 e 459–461; «Writing SOAP Web Services» → «Handling Exceptions», pp. 474–477 (**per i fault**).
6. **Registrazione e discovery tramite UDDI.** Funzione dei registri nella pubblicazione e individuazione di servizi e loro metadati rispetto alla conoscenza diretta dell'indirizzo di un endpoint. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services» → «UDDI», p. 461.
7. **HTTP e altri elementi dello stack SOAP.** Ruolo del trasporto nella comunicazione fra provider e consumer e distinzione fra protocollo di trasporto, formato del messaggio e contratto del servizio. **Rif.:** [G], cap. 14, «Understanding SOAP Web Services» → «Transport Protocol», p. 461; «SOAP», pp. 459–461.
8. **Standard e specifiche Java per SOAP Web Services.** Panoramica dell'evoluzione delle specifiche, di JAX-WS e delle API collegate, come introduzione alla successiva programmazione dei servizi in Java. **Rif.:** [G], cap. 14, «SOAP Web Services Specifications Overview» → «A Brief History of SOAP Web Services Specifications», «SOAP Web Services Related Specifications», «What's New in SOAP Web Services Specifications?», «Reference Implementation», pp. 461–464.

### Lezione 23 — SOAP Web Services, parte 2

*Slide: `23.PD-2021-24-JEE-WS-2.pdf` (titolo interno: «Lezione 24: SOAP Web Services - 2»).*

1. **Programmazione di endpoint SOAP in Java.** Uso di JAX-WS e JAXB per esporre operazioni Java come servizio, delegando ai framework la traduzione fra invocazioni e messaggi SOAP/XML. **Rif.:** [G], cap. 14, «Writing SOAP Web Services» → «Anatomy of a SOAP Web Service», «SOAP Web Service Endpoints», pp. 465–466; «SOAP Web Services Specifications Overview» → «Reference Implementation», p. 464.
2. **Mapping da Java a WSDL mediante annotazioni.** Interfacce o classi marcate con `@WebService`, dichiarazione delle operazioni con `@WebMethod`, descrizione di parametri e risultati con `@WebParam` e `@WebResult`, personalizzazione del binding SOAP. **Rif.:** [G], cap. 14, «Writing SOAP Web Services» → «WSDL Mapping», pp. 466–474.
3. **Gestione delle eccezioni e dei SOAP Fault.** Traduzione di errori Java in strutture SOAP e distinzione fra eccezioni non previste e fault applicativi esplicitamente modellati nel contratto del servizio. **Rif.:** [G], cap. 14, «Writing SOAP Web Services» → «Handling Exceptions», pp. 474–477.
4. **Ciclo di vita dell'endpoint e accesso al contesto.** Creazione e distruzione dell'oggetto servizio, callback gestiti dal container, uso di `WebServiceContext` per ricavare informazioni sulla richiesta e sul chiamante. **Rif.:** [G], cap. 14, «Writing SOAP Web Services» → «Life Cycle and Callback», «WebServiceContext», pp. 477–478.
5. **Deployment descriptor, packaging e pubblicazione.** Configurazione dichiarativa con `webservices.xml`, preparazione dell'applicazione e messa a disposizione di un endpoint SOAP. **Rif.:** [G], cap. 14, «Writing SOAP Web Services» → «Deployment Descriptor», «Packaging», «Publishing a SOAP Web Service», pp. 478–480.
6. **Invocazione del servizio mediante proxy e client generati.** Uso del WSDL per ottenere artefatti lato consumer e invocare metodi senza costruire manualmente richieste HTTP/SOAP; differenze rispetto all'invocazione RMI per interoperabilità fra linguaggi. **Rif.:** [G], cap. 14, «Invoking SOAP Web Services» → «Anatomy of a SOAP Consumer», «Invoking Programmatically», «Invoking with Injection», «Invoking with CDI», pp. 480–483.
7. **Esempio CardValidator: definizione e utilizzo di un servizio.** Riconoscimento degli elementi di un caso completo con oggetto `CreditCard`, interfaccia di servizio, implementazione della validazione e client di invocazione. **Rif.:** [G], cap. 14, «Putting It All Together» → «Writing the CreditCard Class», «Writing the CardValidator SOAP Web Service», «Writing the WebServiceConsumer Class», pp. 484–485 e 490–491.
8. **Generazione, test e distribuzione da strumenti di sviluppo.** Passaggi illustrati nelle slide con NetBeans per creare un progetto Web Service, pubblicarlo su GlassFish, provarne l'endpoint e creare un client. **Rif.:** [G], cap. 14, «Putting It All Together», pp. 485–493; [C], «Laboratorio Java WS» → «Esercizio 0 - Card Validator» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html)).

### Lezione 24 — SOAP Web Services, parte 3: laboratorio

*Slide: `24.PD-2021-25-JEE-WS-3.pdf` (titolo interno: «Lezione 25: WS - 3 Esercizi»).*

1. **Architettura end-to-end di un'applicazione che offre e consuma un Web Service.** Ricostruzione dei rapporti fra endpoint pubblicato su GlassFish, WSDL, client Java e artefatti intermedi generati; lettura del diagramma dell'esempio proposto nelle slide. **Rif.:** [G], cap. 14, «Invoking SOAP Web Services» → «Anatomy of a SOAP Consumer», pp. 480–481; «Putting It All Together», pp. 483–494.
2. **Modello dati scambiato come XML: `CreditCard`.** Analisi della classe usata come parametro del servizio e delle annotazioni JAXB che definiscono elementi e attributi del messaggio serializzato. **Rif.:** [G], cap. 14, «Putting It All Together» → «Writing the CreditCard Class», p. 484; [G], cap. 12, «Java Architecture for XML Binding» → «Annotations», pp. 401–407 (**approfondimento JAXB, da distinguere dall'esempio specifico**).
3. **Interfaccia `Validator` e implementazione `CardValidator`.** Suddivisione fra contratto ed effettiva logica del servizio di validazione, con esposizione dell'operazione invocabile dai client. **Rif.:** [G], cap. 14, «Putting It All Together» → «Writing the CardValidator SOAP Web Service», pp. 484–485.
4. **Creazione guidata di un progetto Web Service con NetBeans.** Scelta del tipo di progetto, selezione del server applicativo e generazione della classe di servizio, anche a partire da componenti enterprise esistenti. **Rif.:** [C], «Laboratorio Java WS» → «Esercizio 0 - Card Validator» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html)); [G], cap. 14, «Writing SOAP Web Services» → «SOAP Web Service Endpoints», pp. 465–466.
5. **Configurazione di metodi, parametri e operazioni esposte.** Aggiunta di operazioni tramite NetBeans e definizione dei parametri, con verifica delle annotazioni Java e della corrispondenza con le operazioni esposte dal servizio. **Rif.:** [C], «Laboratorio Java WS» → «Esercizio 0 - Card Validator → validatedata» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html)); [G], cap. 14, «Writing SOAP Web Services» → «WSDL Mapping», pp. 466–474.
6. **Compilazione, pubblicazione ed endpoint su GlassFish.** Dalla scrittura del codice alla preparazione dell'artefatto e alla distribuzione sul server, osservando il servizio effettivamente raggiungibile. **Rif.:** [C], «Laboratorio Java WS» → «Esercizio 0 - Card Validator → Testing» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html)); [G], cap. 14, «Writing SOAP Web Services» → «Packaging», «Publishing a SOAP Web Service», pp. 479–480; «Putting It All Together» → «Deploying on GlassFish», pp. 487–490.
7. **Consultazione del WSDL e test delle operazioni.** Controllo del contratto generato e delle richieste/risposte SOAP, con prove del comportamento del servizio prima dell'integrazione in un'applicazione client. **Rif.:** [C], «Laboratorio Java WS» → «Esercizio 0 - Card Validator → Testing» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html)); [G], cap. 14, «Understanding SOAP Web Services» → «WSDL», pp. 456–459.
8. **Generazione e uso di un Web Service Client.** Creazione dei proxy lato client sulla base del WSDL, collegamento all'endpoint e invocazione delle operazioni esposte senza gestire esplicitamente la serializzazione SOAP. **Rif.:** [G], cap. 14, «Invoking SOAP Web Services», pp. 480–483; «Putting It All Together» → «Writing the WebServiceConsumer Class», «Generating Consumer's Artifacts and Packaging with Maven», «Running the WebServiceConsumer Class», pp. 490–493.
9. **Verifica integrata del flusso client–servizio.** Collegamento dei passaggi di definizione, deployment, discovery del contratto, generazione del client ed esecuzione per individuare errori di configurazione o invocazione. **Rif.:** [C], «Laboratorio Java WS» → «Esercizio 0 - Card Validator» ([pagina](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html)); [G], cap. 14, «Putting It All Together», pp. 483–494.

---

## Sintesi delle fonti per gruppi di lezioni

| Insieme di lezioni | Copertura principale | Note |
|---|---|---|
| 1–2: sistemi distribuiti e ODP | [S], cap. 1, pp. 1–20 | Concetti e architetture di riferimento per la distribuzione. |
| 3–5: thread Java e laboratorio | [O], «Concurrency» → sezioni sui thread, sincronizzazione, interferenza e deadlock; [C], [«Esercitazione Java Thread»](https://spagnuolocarmine.github.io/programmazione-distribuita/01-threads.html) | Le sezioni online sostituiscono i riferimenti bibliografici per la concorrenza Java SE; gli esercizi sono descritti direttamente nella pagina del corso. |
| 6–7: socket TCP e remotizzazione | [S], cap. 2, pp. 25–51 | Gli esercizi delle slide e i casi concreti del libro possono variare nei nomi. |
| 8–9: Java RMI | [S], capp. 3–4, pp. 53–96 | Includono architettura, sicurezza, marshalling e primo esempio eseguibile. |
| 11: Java Enterprise | [G], cap. 1, pp. 1–22 | [S], cap. 9, pp. 195–207 offre un collegamento storico/architetturale. |
| 12–14: CDI e laboratorio | [G], cap. 2, pp. 23–66; appendice A, pp. 539–559; [C], [«Laboratorio Java EE»](https://spagnuolocarmine.github.io/programmazione-distribuita/05-javaee-lab.html) | Per procedure IDE e configurazione si usano le istruzioni online del corso. |
| 15–16: JPA | [G], capp. 4–6, pp. 103–226 | Mappatura, EntityManager, JPQL e ciclo di vita. |
| 17–19: EJB | [G], capp. 7–9, pp. 227–304; [C], [«Laboratorio EJB»](https://spagnuolocarmine.github.io/programmazione-distribuita/07-ejb-lab.html) | Componenti, autorizzazioni, transazioni e operazioni con NetBeans. |
| 20–21: JMS, MOM e Message-Driven Bean | [G], cap. 13, pp. 417–453; [C], [«JMS»](https://spagnuolocarmine.github.io/programmazione-distribuita/07-jms.html) e [«JMS Lab»](https://spagnuolocarmine.github.io/programmazione-distribuita/08-jms-lab.html) | Architettura a messaggi, JMS 2.0, affidabilità e MDB. |
| 22–24: SOAP Web Services e laboratorio | [G], cap. 14, pp. 455–494; cap. 12, «Java Architecture for XML Binding», pp. 401–407; [C], [«Laboratorio Java WS»](https://spagnuolocarmine.github.io/programmazione-distribuita/09-ws-lab.html) | WSDL, SOAP, JAX-WS, endpoint, client e procedure di sviluppo con NetBeans. |


